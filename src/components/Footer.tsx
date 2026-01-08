import { Separator } from "./ui/separator";
import { LuLinkedin } from "react-icons/lu";
import { FiMail } from "react-icons/fi";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-8">
          {/* Brand */}
          <div className="col-span-full md:col-span-full">
            <h3 className="text-xl font-semibold mb-4">Reyes Recruiting</h3>
            <p className="text-primary-foreground/80 mb-6 max-w">
              Founded by developer-turned-recruiter Dandy Reyes. Specializing in
              technical talent acquisition with the inside knowledge that only
              comes from years of hands-on development experience.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/dandy-reyes"
                target="_blank"
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
              >
                <LuLinkedin className="h-5 w-5" />
              </a>
              <a
                href="#contact"
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
              >
                <FiMail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />

        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-primary-foreground/60">
          <div>© 2025 Reyes Recruiting. All rights reserved.</div>
          {/* <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Cookie Policy
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
