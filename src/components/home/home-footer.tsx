import { Logo } from "../logo/Logo";
import { Button } from "./ui/button/Button";
import { Props } from "../../utilities/types";


export const HomeFooter = ({ handleClick }: Props) => {

  return (
    <footer className="bg-secondary relative bottom-0 right-0 left-0">
      <section className="max-w-[85%] lg:max-w-[75%] mx-auto bg-secondary flex flex-col gap-3 py-16    lg:flex-row lg:justify-between lg:items-center">
        <Logo />
        <div className="">
          <ul>
            <li>
              <h3>Company</h3>
            </li>
            <li>
              <a href="">FAQ's</a>
            </li>
            <li>
              <a href="">About us</a>
            </li>
            <li>
              <a href="">Our investors</a>
            </li>
            <li>
              <a href="">Partner with us</a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <h3>Legal</h3>
            </li>
            <li>
              <a href="">Privacy policy</a>
            </li>
            <li>
              <a href="">Return policy</a>
            </li>
            <li>
              <a href="">Terms of Service</a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <h3>Let's Connect</h3>
            </li>
            <li>
              <a href="">X</a>
            </li>
            <li>
              <a href="">Instagram</a>
            </li>
            <li>
              <a href="">Facebook</a>
            </li>
            <li>
              <a href="">Linkedin</a>
            </li>
            <li>
              <a href="">donatelink@gmail.com</a>
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
