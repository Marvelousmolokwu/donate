import { Logo } from "../logo/Logo";
import { Button } from "../button/Button";
import { ButtonProps } from "../../utilities/types";


export const HomeFooter = ({ handleClick }: ButtonProps) => {

  return (
    <footer className="bg-secondary relative bottom-0 right-0 left-0">
      <section className="container bg-secondary flex flex-col gap-3 py-16    lg:fr-flex lg:items-start">
        <Logo logoClasses={""} />
        <div className="">
          <ul>
            <li>
              <h3 >Company</h3>
            </li>
            <li>
              <a className="animated-links" href="">FAQ's</a>
            </li>
            <li>
              <a className="animated-links"  href="">About us</a>
            </li>
            <li>
              <a className="animated-links"  href="">Our investors</a>
            </li>
            <li>
              <a className="animated-links"  href="">Partner with us</a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <h3>Legal</h3>
            </li>
            <li>
              <a className="animated-links"  href="">Privacy policy</a>
            </li>
            <li>
              <a className="animated-links"  href="">Return policy</a>
            </li>
            <li>
              <a className="animated-links" href="">Terms of Service</a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <h3>Let's Connect</h3>
            </li>
            <li>
              <a className="animated-links"  href="">X</a>
            </li>
            <li>
              <a className="animated-links"  href="">Instagram</a>
            </li>
            <li>
              <a className="animated-links"  href="">Facebook</a>
            </li>
            <li>
              <a className="animated-links"  href="">Linkedin</a>
            </li>
            <li>
              <a className="animated-links"  href="">donatelink@gmail.com</a>
            </li>
          </ul>
        </div>
        <Button
          handleClick={handleClick}
          content={"Sign up Now"}
          btnClasses="bg-primary text-backgroundcolor w-[50%] lg:w-auto"
        />
      </section>
      <p className="text-center">
        © Copyright 2023 - DonorLink. All rights reserved.
      </p>
    </footer>
  );
};
