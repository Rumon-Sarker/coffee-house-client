import { Parallax } from 'react-parallax';

const Cover = ({ title, img }) => {
    return (
        <div>


            <Parallax
                blur={{ min: -15, max: 15 }}
                bgImage={img}
                bgImageAlt="the dog"
                strength={-200}
            >
                <div className="hero h-[600px]">
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                            <p className="mb-5">Ipsum dolor sit, amet consectetur adipisicing elit. Voluptates cumque delectus laborum ipsum blanditiis molestiae eligendi, est officia asperiores facilis eaque, accusantium fugit a dolorem ad ipsa! Neque, perferendis iusto..</p>
                        </div>
                    </div>
                </div>
            </Parallax>

        </div>
    );
};

export default Cover;