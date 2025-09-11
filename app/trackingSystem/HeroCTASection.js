import LinkButton from "../button/Button";

export default function HeroCTASection() {
  return (
    <section className="bg-[#A66565] py-24 px-4 text-center text-white">
      <h2 className="text-3xl md:text-4xl font-semibold mb-4">
        Start Making Better Hiring Decisions Today
      </h2>
      <p className="text-sm md:text-base text-white/80 mb-6">
        Try the full-featured Smart ATS, built for modern recruiters, growing
        startups, and enterprise teams alike.
      </p>

         <LinkButton
                href="/skills"
                name="Start Your Skill Journey"
                linkclassname="border border-white !bg-[#A66565] hover:!bg-white hover:!text-[#A66565] hover:!cursor-pointer  transition "
              />
    </section>
  );
}
