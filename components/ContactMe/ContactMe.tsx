import Link from "next/link";

import EmailIcon from "@/components/Icons/Email";
import GitHubIcon from "@/components/Icons/GitHub";
import GitLabIcon from "@/components/Icons/GitLab";
import IconContainer from "@/components/Icons/IconContainer";
import LinkedInIcon from "@/components/Icons/LinkedIn";
import ResumeIcon from "@/components/Icons/Resume";
import WhatsAppIcon from "@/components/Icons/WhatsApp";


const ContactMe = () => {
  return (
    <div className="flex items-center justify-center gap-8">
      <Link
        href="https://www.linkedin.com/in/salgadoguiller"
        target="_blank"
        aria-label="LinkedIn"
      >
        <IconContainer>
          <LinkedInIcon />
        </IconContainer>
      </Link>
      <Link
        href="https://github.com/salgadoguiller"
        target="_blank"
        aria-label="GitHub"
      >
        <IconContainer>
          <GitHubIcon />
        </IconContainer>
      </Link>
      <Link
        href="https://gitlab.com/salgadoguiller"
        target="_blank"
        aria-label="GitLab"
      >
        <IconContainer>
          <GitLabIcon />
        </IconContainer>
      </Link>
      <Link
        href="mailto:guillermosalgado822@gmail.com"
        target="_blank"
        aria-label="Email"
      >
        <IconContainer>
          <EmailIcon />
        </IconContainer>
      </Link>
      <Link
        href="https://wa.me/+50496406631"
        target="_blank"
        aria-label="WhatsApp"
      >
        <IconContainer>
          <WhatsAppIcon />
        </IconContainer>
      </Link>
      <Link
        href="https://drive.google.com/file/d/102TpCZmsRu6DS21CTotDSPjzmPdXzS4N/view"
        target="_blank"
        aria-label="Resume"
      >
        <IconContainer>
          <ResumeIcon />
        </IconContainer>
      </Link>
    </div>
  );
};

export default ContactMe;
