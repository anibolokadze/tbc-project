import { useTranslation } from "react-i18next";

const PostInfo = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex justify-center items-center flex-row">
        <div className="flex justify-center items-center w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]">
          <p className="font-bold text-[20px] text-white">01</p>
        </div>
        <p className="flex-1 ml-[30px] font-normal text-[18px] dark:text-white leading-[32.4px]">
          {t("post-1")}
        </p>
      </div>
      <div className="flex justify-center items-center flex-row">
        <div className="flex justify-center items-center w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]">
          <p className="font-bold text-[20px] text-white">02</p>
        </div>
        <p className="flex-1 ml-[30px] font-normal text-[18px] dark:text-white leading-[32.4px]">
          {t("post-2")}
        </p>
      </div>
    </>
  );
};

export default PostInfo;
