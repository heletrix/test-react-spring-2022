import { httpCodes } from 'common/enums';
import { HTTP_ERROR_DEFAULT_MESSAGE } from 'common/constants';

class HttpError extends Error {
  status;

  constructor({
    status = httpCodes.INTERNAL_SERVER_ERROR,
    message = HTTP_ERROR_DEFAULT_MESSAGE,
  } = {}) {
    super(message);
    this.status = status;
    this.name = HTTP_ERROR_DEFAULT_MESSAGE;
  }
}

export default HttpError;
