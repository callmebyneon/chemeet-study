import PageTitle from "@/common/Atoms/Text/PageTitle";
import StudyCardList from "@/common/Templates/CardList";
import { getStudiesData } from "@/dummies/studies";

export default function StudySearchPage() {
  const studyCard = getStudiesData();

  return (
    <div>
      <div className="flex items-center justify-between">
        <PageTitle size="lg">스터디</PageTitle>
        <div className="relative">
          <input
            type="search"
            placeholder="검색어를 입력하세요"
            className="w-[380px] py-2 pr-9 pl-6 border border-line-normal rounded-lg placeholder:text-label-assist placeholder:text-label-nomral"
          />
          <span className="absolute right-2 top-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 15L21 21M10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 13.866 13.866 17 10 17Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>
      <PageTitle size="md">전체 검색 결과 {studyCard.length}개</PageTitle>
      <StudyCardList studyCard={studyCard} count={16} />
    </div>
  );
}
