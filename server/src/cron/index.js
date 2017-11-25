import sendSurcharge from './sendSurcharge';
import { CronJob } from 'cron';


export const setCron = props => new CronJob(props);

export const sendSurchargeJob = () =>
  setCron({
    cronTime: '05 17 * * 1-7', 
    onTick: sendSurcharge,
    timeZone: 'Africa/Lagos',
    start: true
  });

if (require.main === module) {
  sendSurchargeJob();
}
export default {

};
