import React from "react";
import abs1 from "../../images/abstract/abs1.webp";
import abs2 from "../../images/abstract/abs2.webp";
import abs3 from "../../images/abstract/abs3.webp";
import abs4 from "../../images/abstract/abs4.webp";
import abs5 from "../../images/abstract/abs5.webp";
import abs6 from "../../images/abstract/abs6.webp";
import abs7 from "../../images/abstract/abs7.webp";
import abs8 from "../../images/abstract/abs8.webp";
import abswall from "../../images/abstract/abstractwall.webp";
import second from "../../images/abstract/secondwall.webp";
import livingroom from "../../images/abstract/livingroom.webp";
import wall3 from "../../images/abstract/wall3.png";
import modern from "../../images/abstract/modern.webp"

const Abstract = () => {
  const abstract = [
    {
      src: abs1,
      caption: "[AB#001] Dangerous Abstract ",
      price: "From $195",
    },
    {
      src: abs2,
      caption: "[AB#002] Inventive Abstract painting",
      price: "From $195",
    },
    {
      src: abs3,
      caption: "[AB#003] Colorful Abstract painting",
      price: "From $195",
    },
    { src: abs4, caption: "[AB#004] Abstract painting", price: "From $195" },
    {
      src: abs5,
      caption: "[AB#005] Gorgeous Abstract painting",
      price: "From $195",
    },
    { src: abs6, caption: "[AB#006] Abstract painting 07", price: "From $195" },
    { src: abs7, caption: "[AB#007] Abstract painting 06", price: "From $195" },
    { src: abs8, caption: "[AB#008] Abstract painting 08", price: "From $165" },
  ];
  return (
    <>
      <div className="flex justify-around pt-[32px]">
        <span>Filter and Sort</span>
        <span>Showing 8 results</span>
      </div>
      <div>
        <h1 className="text-[31px] font-extrabold pl-[50px] pb-[10px]">Abstract Art For Sale In Arizona</h1>
      </div>
      {/* <div className="grid grid-cols-4 place-items-center pt-[20px] w-[1384px] h-auto pb-[56px] mx-auto"> */}
     <div className='flex flex-col sm:flex-row flex-wrap justify-center items-center px-10 2xl:w-[1600px] gap-8 md:px-4 sm:px-7 m-auto mt-20 pt-8 '>


        {abstract.map((item, index) => (
          <div
            key={index}
            className="md:w-[302px] "
          >
            <img
              src={item.src}
              alt={item.caption}
              className="md:w-[302px] w-full md:h-[408px]"
            />
            <p className="text-[18px] text-[#F6C934] max-w-54 max-h-32 text-left pt-[15px]">{item.caption}</p>
            <p className="text-[18px] text-[#F6C934] text-left">{item.price}</p>
          </div>
        ))}
      </div>
      <section>
        <div className="lg:px-[56px] px-10 lg:mx-[231.5px]">
          <p className="leading-8">
            You have come to one of our favorite categories: abstract painting.
            Abstract art is easy to explain but hard to understand. It must
            portray a clear subject that is easy to see and understand. It asks
            for your input to fill meaning in these colors, textures, shapes,
            and lines.
          </p>
          <br/>
          <p className="leading-8">
            These abstract pieces by top-reviewed artist Miguel Camarena allow
            you to engage yourself in the hues, textures, and brushstrokes,
            leaving you stranded in the undiscovered imagination of the art. In
            this particular collection of Arizona, the bold brushstrokes and
            dynamic composition evoke curiosity and brighten the visual feast!
          </p>
          <br/>
          <p className="leading-8">
            From sharp colors to vibrant textures, bursts of color to geometry,
            Camarena's artwork is a testament to his powerful artistic
            expression. We promise you are here to experience the delightful
            display of abstract landscapes. So, let's explore what each painting
            says to you.
          </p>
          <h2 className="text-[32px] font-bold">Why Is Abstract Art So Popular?</h2>
          <p className="leading-8">
            It is fascinating to see how abstractly framed wall art allows each
            viewer to build a relationship with the piece. Abstract art is
            interesting for the viewer's eyes because it allows them to
            interpret the artwork in their own way. Whoever visits the art
            cannot refrain from expressing their thoughts on it. This is the
            main reason people hang abstract artwork in their homes.
          </p>
          <br/>
          <p className="leading-8">
            Additionally, this type of art connects you emotionally with art.
            This ability makes the art compelling and memorable for you.
            Overall, abstract art challenges you to think critically and engage
            with the artwork more deeply.
          </p>
          <br/>
          <p className="leading-8">
            One more reason that comes to mind for why abstract art is so
            popular among other art forms is that it gives maximum creative
            freedom to both artists and viewers.
          </p>
          <h2 className="text-[32px] font-bold">Abstract Painting On Canvas</h2>
          <div>
            <img src={abswall} alt="wallimage" className="w-[551px] h-[612px] mx-auto mb-[16px]" />
          </div>
          <p className="leading-8 py-[18px]">
            It can get challenging for a while because your brain only sees what
            it wishes to see. But once your mind and heart connect with the art,
            you instantly feel a deeper connection. Look at this beautiful
            abstract painting made by Miguel Camarena, which looks so peaceful,
            and the combination of colors is so attractive. This painting
            enhances the view of the study room and refreshes your mood while
            studying or working. It provides new perspectives on the world for
            you to consider. This artwork is the most cost-effective piece in
            our art gallery and is available in various sizes.
          </p>
          <h2 className="text-[32px] font-bold">The Power Of Layers In Abstract Art</h2>
          <p className="leading-8 py-[18px] my-[5px]">
            The multiple layers in abstract art allow people to build depth and
            interest. These paintings are crafted with various layers and start
            with a textured background. It is then built up with additional
            layers of forms and shapes in the middle ground and foreground,
            called the compositional approach. These layers translate the
            painting into beautiful, nonrepresentational art, which creates a
            feeling of space and dimension.
          </p>
          <p className="leading-8">
            These layers in abstract art enhance emotional resonance. Adding
            multiple layers to the painting creates a dynamic interplay of light
            and shadow, which adds complexity and visual interest. Additionally,
            using layers of different colors creates depth and helps the artist
            express emotions. So, it serves as a space for experimentation for
            unexpected discoveries that contribute to the uniqueness of abstract
            artworks.
          </p>
          <h2 className="text-[32px] font-bold">Revealing Geometric Wonders In Abstract Art</h2>
          <p className="leading-8">
            Geometric references in abstract paintings produce a visual symphony
            that defies categorization. Artists use geometric shapes, lines, and
            patterns with precision and purpose to instill order and balance in
            their works. These features serve as the foundation for an engaging
            visual language, bringing viewers on an exploration and
            interpretation journey.
          </p>
          <br/>
          <p className="leading-8">
            Modern geometric abstract art evokes a sense of structure while
            providing an opportunity for individual perception and emotional
            resonance, from the peaceful repetition of squares and circles to
            the dynamic interaction of triangles and polygons. The geometric
            reference in abstract painting contributes to the visual symphony,
            showing a unique fusion of structure and creativity.{" "}
          </p>
          <div>
            <img src={second} alt="second" className="w-[512px] h-[512px] mx-auto pb-[16px]"/>
          </div>
          <p className="leading-8 my-[18px]">
            The beautifully crafted painting highlights a harmonious interplay
            between shapes and colors to explore symmetry, proportion, and
            rhythm themes. Moreover, this artwork expresses a balance between
            mathematical precision and artistic expression. This abstract
            painting engages the intellect and stimulates the viewer's visual
            sense with aesthetic experience.
          </p>
          <h2 className="text-[32px] font-bold">Abstract Landscape Painting</h2>
          <div>
            <img src={livingroom} alt="livingroom"  className="w-[489px] h-[489px] mx-auto mb-[68px]"/>
          </div>
          <p className="leading-8">
            This pitiful art piece is ideal for a room with an ocean aesthetic.
            The artwork perfectly complements ash white, soft gray, pale beige,
            and light taupe wall colors. The dynamic composition of colors in
            this art will be the focal point of any room. This art not only
            sparks conversation but also adds sophistication to the space.
          </p>
          <br/>
          <p className="leading-8">
            Each brushstroke and color choice were carefully selected to make
            this artwork unique. Art investment in this piece isn't just about
            acquiring beautiful wall art for your room; it's about having a
            piece that speaks to your personality as you choose it to buy. It
            will bring joy and inspiration into your everyday life.
          </p>
          <h2 className="text-[32px] font-bold">Modern Abstract Painting</h2>
          <div>
            <img src={modern} alt="paint"  className="w-[442px] h-[442px] mx-auto mb-[18px]" />
          </div>
          <p className="leading-8 pt-[60px]">
            The sophisticated abstract elegance is best suited for a luxurious
            look, whether you have a small or large space. This stunning artwork
            can complement any wall color with a delicate mix of brownish-gray
            tones and a little touch of yellow, blue, red, and peach. However,
            it is recommended for hygge, boho, contemporary, minimalist, and
            modern decoration.
          </p><br/>
          <p className="leading-8">
            This art piece is enough to give the space a lavish ambiance. We
            offer both small and large sizes to accommodate different areas.
            Additionally, customization options are available if you wish to add
            a touch of your preferred color. Owning this painting is truly worth
            it.
          </p>
          <h2 className="text-[32px] font-bold">Beyond The Ordinary</h2>
          <img src={wall3} alt="wall3"  className="w-[487px] h-[487px] mx-auto" />

          <p className="leading-8 my-[18px]">
            This abstract piece is exclusive to our collection. It is trendy,
            classy, and luxurious, yet affordable for pockets. Suppose you want
            a classy aesthetic for your living room, then this art is a must.
            With its decent blue and yellow brush strokes, this art is willing
            to tell you something. Now, it's up to your imagination to interpret
            it.{" "}
          </p>
          <p className="leading-8">
            We label this piece as dangerous art, as it never lets the audience
            leave space without indulging in its captivating beauty. It is also
            best for oceanic themes or modern cottage decor. Own this painting
            now and make your space a living heaven.
          </p>
          <h2 className="text-[32px] font-bold">Own A Masterpiece!</h2>
          <p className="leading-8">
            Don’t we all look for subtle ways to own art without going broke? I
            mean, who doesn’t love abstract art? Now, you can easily own an
            abstract painting (oil or acrylic) by getting it giclee painted on
            canvas.
          </p>
          <br/>
          <p className="leading-8">
            Want to own an original masterpiece? Contact us, and Miguel can
            create a custom, one-of-a-kind piece for you. Visit our gallery if
            you reside in Arizona near Scottsdale or Phoenix. Otherwise, order
            your favorite art online.
          </p><br/>
          <h3>
            <b>FAQs</b>
          </h3>
          <br/>
          <p>
            <b>What is the purpose of abstract art?</b>
          </p>
          <br/>
          <p className="leading-8">
            Abstract art's core purpose is to evoke imagination and connect
            emotionally with the viewer. This art form allows individuals to
            build their stories from what they see.
          </p><br/>
          <p>
            <b>What is abstract in painting?</b>
          </p><br/>
          <p className="leading-8">
            Abstract art does not seek to convey an accurate depiction of a
            visual reality but achieves its effect via the use of shapes,
            colors, forms, and gestural marks.
          </p><br/>
          <p>
            <b>Is abstract painting modern and costly?</b>
          </p><br/>
          <p className="leading-8">
            The designs displayed here are reproduced from original paintings
            and are available as giclee prints on canvas. Therefore, these are
            affordable options for everyone. If you are interested in an
            original piece by Miguel Camarena, please feel free to reach out!
          </p>
        </div>
      </section>
    </>
  );
};

export default Abstract;
