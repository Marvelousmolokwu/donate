type Props={
  logoClasses: string
}

export const Logo = ({logoClasses}:Props) => {
  return (
    <div className="flex">
      <h1 className=  {` font-bold text-2xl lg:text-3xl ${logoClasses}`}>DonoLink</h1>
      <img
        src="https://res.cloudinary.com/ddgyd8szc/image/upload/v1693561560/coins_3_ihvdep.png"
        alt="coin"
      />
    </div>
  );
};
