import defaultImg from "../../assets/icons/LeaderWOW.svg";
import LeaderCard from "../../components/leader/LeaderCard";

const LeaderPage = () => {
  return (
    <div
      style={{
        background: "black",
        marginTop: "5rem",
        display: "flex",
        gap: "1rem",
        justifyContent: "center",
      }}
    >
      <LeaderCard
        img={defaultImg}
        role="회장"
        name="박도연"
        nickname="도도"
        major="홍익대학교 컴퓨터공학과"
      />
    </div>
  );
};

export default LeaderPage;
