import HttpService from './HttpService';
import JobService from './JobService';

const httpService = new HttpService();

const jobService = new JobService({ httpService });

export {
  jobService
};
