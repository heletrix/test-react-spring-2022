import { HttpError } from 'common/exceptions';
import { contentTypes, httpMethods } from 'common/enums';
import { generateQueryParams } from 'common/helpers';

class HttpService {
  makeRequest(url, options) {
    const {
      method = httpMethods.GET,
      body = null,
      query
    } = options;

    const headers = {
      'Content-Type': contentTypes.JSON
    };

    return fetch(this.getUrl(url, query), {
      method,
      headers,
      body,
    })
      .then(this.checkStatus)
      .then(this.parseJSON)
      .catch(this.throwError);
  }

  getUrl(url, query) {
    return `${url}${query ? `?${generateQueryParams(query)}`: ''}`;
  }

  async checkStatus(response) {
    if (!response.ok) {
      const parsedException = await response.json().catch(() => ({
        message: response.statusText,
      }));

      throw new HttpError({
        status: response.status,
        message: parsedException?.message,
      });
    }
    return response;
  }

  parseJSON(response) {
    return response.json();
  }

  throwError(error) {
    throw error;
  }
}

export default HttpService;
