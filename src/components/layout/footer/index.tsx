import { Separator } from "@/components/ui/separator";

import Copyright from "./Copyright";
import FooterLinks from "./FooterLinks";
import SocialLinks from "./SocialLinks";
import Container from "../header/Container";

export const Footer = () => {
  return (
    <footer className="border-t border-border/40 bg-background/80 backdrop-blur-sm">
      <Container>
        <div className="py-12">
          {/* Top Section: Navigation & Social Links */}
          <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
            <FooterLinks className="order-2 md:order-1" />
            <SocialLinks className="order-1 md:order-2" />
          </div>

          <Separator className="my-8" />

          {/* Bottom Section: Copyright */}
          <Copyright />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
