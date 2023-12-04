import { Education } from "@/app/components/Education";
import { EmploymentHistory } from "@/app/components/EmploymentHistory";
import { Header } from "@/app/components/Header";
import { Intro } from "@/app/components/Intro";
import { Skill } from "@/app/components/Skill";
import { Document, Font, Page } from "@react-pdf/renderer";

Font.register({
  family: "Open Sans",
  src: "https://fonts.gstatic.com/s/googlesans/v29/4UaGrENHsxJlGDuGo1OIlL3Owp4.woff2",
});

export default function Home() {
  return (
    <Document
      title="Resume"
      author="WeeHong"
      subject="WeeHong's Resume"
      language="en"
    >
      <Page size="A4">
        <Header />
        <Intro />
        <EmploymentHistory />
        <Skill />
        <Education />
      </Page>
    </Document>
  );
}
