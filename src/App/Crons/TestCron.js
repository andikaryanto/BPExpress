import Cron from '../../Core/Utilities/Cron';

class TestCron extends Cron {
    time() {
        return '* * * * *';
    }

    execute() {
        console.log('cron running');
    }
}

export default TestCron;
