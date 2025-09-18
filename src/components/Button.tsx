interface ButtonProps {
  buttonText?: string;
  property1?: "Primary" | "Secondary" | "Teritiary";
  property2?: "Outline" | "Solid";
  state?: "Default" | "Hover";
  property3?: "Default" | "Only Icon";
}

export default function Button({
  buttonText = "Button",
  property1 = "Primary",
  property2 = "Solid",
  state = "Default",
  property3 = "Default"
}: ButtonProps) {
  const element = (
    <div className="font-avigea leading-[0] not-italic relative shrink-0 text-[20px] text-nowrap text-white">
      <p className="leading-[normal] whitespace-pre">{buttonText}</p>
    </div>
  );

  if (property1 === "Secondary" && property2 === "Solid" && state === "Default" && property3 === "Default") {
    return (
      <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[48px] py-[18px] relative rounded-[41px] size-full">
        {element}
      </div>
    );
  }

  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[48px] py-[18px] relative rounded-[41px] size-full">
      {element}
    </div>
  );
}