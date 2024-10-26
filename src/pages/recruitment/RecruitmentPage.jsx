import RecruitmentClosed from './RecruitmentClosed';
import RecruitmentPart from './RecruitmentPart';
import RecruitmentTarget from './RecruitmentTarget';
import RecruitmentSchedule from './RecruitmentSchedule';

const RecruitmentPage = () => {
  return (
    <div>
      <RecruitmentClosed />
      <RecruitmentTarget />
      <RecruitmentPart />
      <RecruitmentSchedule/>
    </div>
  );
};

export default RecruitmentPage;
