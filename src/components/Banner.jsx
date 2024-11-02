export default function Banner() {
  return (
    <section className="container mx-auto py-5">
      <div className="hero bg-base-200 rounded-lg">
        <div className="hero-content flex-col lg:flex-row-reverse gap-10">
          <img
            src="banner-image.png"
            className="w-full md:w-[40rem] rounded-lg md:translate-x-[1rem] md:translate-y-[1rem]"
          />
          <div className="p-2 md:p-10">
            <h1 className="text-3xl md:text-5xl md:leading-[2.25ch] font-bold">
             Chuppo Dukan Belive In Quality
            </h1>
            <p className="py-6 max-w-[40ch] leading-relaxed">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi. Lorem ipsum dolor sit amet consectetur. Lorem ipsum
              dolor sit amet.
            </p>
            <button className="btn btn-neutral text-lg px-6">Shop Now</button>
          </div>
        </div>
      </div>
    </section>
  );
}
