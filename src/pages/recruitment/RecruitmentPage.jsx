import RecruitmentClosed from './RecruitmentClosed';
import RecruitmentPart from './RecruitmentPart';
import RecruitmentTarget from './RecruitmentTarget';
import RecruitmentSchedule from './RecruitmentSchedule';
import Notice from './Notice';
import FAQ from './FAQ';

const RecruitmentPage = () => {
  return (
    <div>
      <RecruitmentClosed />
      <RecruitmentTarget />
      <RecruitmentPart />
      <RecruitmentSchedule/>
      <Notice/>
      <FAQ/>
    </div>
  );
};

export default RecruitmentPage;
