import { TPost } from "@/app/(route)/post/page";

const example: TPost[] = [
  {
    postId: "10",
    category: {
      value: "free",
      label: "자유게시판",
      isRecruiting: null,
    },
    contents: {
      title: "가나다라",
      body: "<p>조금 더 공부하면서 성장하는게 목적인 온라인 디스코드 스터디원을 모집합니다.</p><p></p><p>스터디 목표는 단순히 저녁에 공부하는 습관을 만드는 것입니다.</p><p>하나의 공통된 주제는 없고</p><p>원하시는 공부를 하시면 됩니다.</p><p>장기간 성장을 바라보는 분들을 환영합니다.</p><p></p><p>진행 시간</P><p>월, 화, 목 오후 20시~오후 21시입니다.</p><p>최소 주 2회 참여 해주세요.</p><p></p><p>진행 방식</p><p>공부할 것을 공유하며 간단히 이야기하고</p><p>한시간동안 공부합니다.</p><p>관심이 있으시면 댓글로 간단하게 남겨주세요.</p>",
      linkedStudyId: null,
    },
    writer: {
      userId: "hanyoojun",
      name: "한유준",
      role: "user",
      position: "개발자",
      profileUrl: "",
    },
    createdAt: "2024-06-29 22:10:00",
    view: 188,
    like: 15,
  },
  {
    postId: "9",
    category: {
      value: "study",
      label: "스터디 홍보",
      isRecruiting: true,
    },
    contents: {
      title: "모든 프로덕트에 대한 스터디",
      body: "",
      linkedStudyId: null,
    },
    writer: {
      userId: "hanyoojun",
      name: "한유준",
      role: "user",
      position: "개발자",
      profileUrl: "",
    },
    createdAt: "2024-06-29 20:00:00",
    view: 188,
    like: 15,
  },
  {
    postId: "8",
    category: {
      value: "study",
      label: "스터디 홍보",
      isRecruiting: true,
    },
    contents: {
      title:
        "[면접 스터디] 강남 오프라인 프론트엔드 면접 준비 ( 기술면접, CS 등 ) - 추가 모집중입니다!!",
      body: "",
      linkedStudyId: null,
    },
    writer: {
      userId: "hanyoojun",
      name: "한유준",
      role: "user",
      position: "개발자",
      profileUrl: "",
    },
    createdAt: "2024-06-29 00:00:00",
    view: 188,
    like: 15,
  },
  {
    postId: "7",
    category: {
      value: "study",
      label: "스터디 홍보",
      isRecruiting: false,
    },
    contents: {
      title: "안드로이드 면접 스터디",
      body: "",
      linkedStudyId: null,
    },
    writer: {
      userId: "hanyoojun",
      name: "한유준",
      role: "user",
      position: "개발자",
      profileUrl: "",
    },
    createdAt: "2024-06-25 00:00:00",
    view: 188,
    like: 15,
  },
];

export function getPosts(): TPost[] {
  return example;
}

export function getPost(id: string): TPost {
  return { ...example[0] };
}
