import RecruitmentClosed from './RecruitmentClosed';
import RecruitmentPart from './RecruitmentPart';
import RecruitmentTarget from './RecruitmentTarget';
import RecruitmentSchedule from './RecruitmentSchedule';
import Notice from './Notice';

const RecruitmentPage = () => {
  return (
    <div>
      <RecruitmentClosed />
      <RecruitmentTarget />
      <RecruitmentPart />
      <RecruitmentSchedule/>
      <Notice/>
    </div>
  );
};

export default RecruitmentPage;
