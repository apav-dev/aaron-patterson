import {
  GetHeadConfig,
  GetPath,
  HeadConfig,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";
import FinProAbout from "../components/FinProAbout";
import FinProHeader from "../components/FinProHeader";
import FinProHero from "../components/FinProHero";
import FinProNav from "../components/FinProNav";
import MainLayout from "../components/MainLayout";
import "../index.css";

export const config: TemplateConfig = {
  stream: {
    $id: "fin-pro",
    localization: { locales: ["en"], primary: false },
    fields: [
      "name",
      "description",
      "c_jobTitle",
      "address",
      "mainPhone",
      "emails",
      "headshot",
      "slug",
    ],
    filter: { entityIds: ["FP-0132"] },
  },
};
export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return document.slug ?? document.entityId.toString();
};

export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = (
  data
): HeadConfig => {
  return {
    title: "Blog Home",
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
  };
};

export default function Blog({ document }: TemplateProps) {
  return (
    <MainLayout backgroundColor="#FFFFFF">
      <FinProHeader />
      <FinProNav />
      <FinProAbout
        name={`${document.name}`}
        description={`${document.description}`}
      />
      <FinProHero
        name={`${document.name}`}
        title={`${document.c_jobTitle}`}
        address={{
          line1: `${document.address.line1}`,
          line2: ``,
          city: `${document.address.city}`,
          region: `${document.address.region}`,
          postalCode: `${document.address.postalCode}`,
        }}
        phone={`${document.mainPhone}`}
        email={`${document.emails[0]}`}
        headshotUrl={`${document.headshot.url}`}
        heroTheme="green"
      />
    </MainLayout>
  );
}
