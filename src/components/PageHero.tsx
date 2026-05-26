type Props = {
  eyebrow: string;
  title: string;
  italicWord?: string;
  description?: string;
  image: string;
};

export function PageHero({ eyebrow, title, italicWord, description, image }: Props) {
  return (
    <section className="relative flex min-h-[72vh] items-end overflow-hidden bg-background pt-16">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
      <div className="relative mx-auto w-full max-w-[1400px] px-5 pb-16 md:px-10 md:pb-24">
        <p className="eyebrow animate-fade-up">{eyebrow}</p>
        <h1 className="mt-6 max-w-4xl font-display text-[42px] font-bold uppercase leading-[0.95] tracking-tight text-foreground animate-fade-up md:text-[88px]">
          {title}
          {italicWord && (
            <>
              {" "}
              <span className="font-serif text-brand italic normal-case tracking-normal">
                {italicWord}
              </span>
            </>
          )}
        </h1>
        {description && (
          <p className="mt-8 max-w-xl text-base leading-relaxed text-foreground/75 animate-fade-up md:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
