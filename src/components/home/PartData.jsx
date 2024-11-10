import plan from "../../assets/icons/part/PM.png";
import design from "../../assets/icons/part/Design.png";
import web from "../../assets/icons/part/Web.png";
import andriod from "../../assets/icons/part/Android.png";
import ios from "../../assets/icons/part/iOS.png";
import spring from "../../assets/icons/part/SpringBoot.png";
import node from "../../assets/icons/part/Node.png";

const PartData = [
  {
    id: 1,
    part: "Plan",
    big: "기획",
    small: "Plan",
    detail:
      "어떤 서비스를 만들 것인지 아이디어를 제시하고,\n시장조사와 트렌드 분석으로 차별화된 전략을 수립합니다.\n개발, 디자인 파트와의 협력을 통해 해당 아이디어가\n사용자 중심적으로 기능할 방법을 구상합니다.",
    photo: plan,
  },
  {
    id: 2,
    part: "Design",
    big: "디자인",
    small: "Design",
    detail:
      "UX/UI 디자인을 통해 사용자 친화적인 인터페이스와 경험을\n설계합니다. 기획, 개발 파트와 협력하며 프로토타입 제작, 비\n주얼 스타일 가이드 설정 등 다양한 시각적 요소를 제작하여\n프로젝트의 완성도를 높입니다.",
    photo: design,
  },
  {
    id: 3,
    part: "Android",
    big: "Andriod",
    small: "클라이언트",
    detail:
      "디자인을 실제 Android 앱 화면으로 구현하고, 사용자와의 상\n호작용할 수 있는 기능을 개발합니다. Kotlin을 사용해 화면을\n구성하며 애니메이션 효과로 사용자의 경험을 향상시킵니다.\n성능 최적화와 디버깅을 통해 안정적인 앱 실행을 유지합니다.",
    photo: andriod,
  },
  {
    id: 4,
    part: "iOS",
    big: "iOS",
    small: "클라이언트",
    detail:
      "디자인을 iOS 앱으로 구현하고, 사용자와 상호작용할 수 있는\n기능을 개발합니다. Swift를 사용해 화면을 구성하며 애니메\n이션 효과로 사용자의 경험을 향상시킵니다. 성능 최적화와 디\n버깅을 통해 안정적인 앱 실행을 유지합니다.",
    photo: ios,
  },
  {
    id: 5,
    part: "Web",
    big: "Web",
    small: "클라이언트",
    detail:
      "디자인을 웹페이지로 구현하고 HTML, CSS, JavaScript를\n사용해 사용자와 상호작용할 수 있는 기능을 개발합니다. 웹\n애니메이션과 반응형 디자인을 통해 다양한 디바이스에서 최\n적화된 사용자 경험을 제공합니다.",
    photo: web,
  },
  {
    id: 6,
    part: "Spring",
    big: "Spring Boot",
    small: "서버",
    detail:
      "서버의 로직을 개발하고 API를 통해 프론트엔드와 소통합니\n다. 사용자 인증, 권한 관리, 데이터 처리 등의 핵심 기능을 구\n현하고, 성능 최적화와 보안 강화를 담당합니다. 그리고 서버\n의 안정적인 운영을 위한 오류처리와 로그 관리를 수행합니다.",
    photo: spring,
  },
  {
    id: 7,
    part: "Node.js",
    big: "Node.js",
    small: "서버",
    detail:
      "비동기 기반의 서버 로직을 개발하고 API를 통해 프론트엔드\n와 소통합니다. 사용자 인증, 파일처리, 실시간 기능 등을 구현\n하며 서버 성능 최적화와 보안을 담당합니다. 그리고 Node.js\n를 활용해 확장 가능하고 효율적인 서버를 구축합니다.",
    photo: node,
  },
];

export default PartData;
