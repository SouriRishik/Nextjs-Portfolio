import Navbar from '@/components/Navbar';

export default function About() {
  return (
    <>
      <Navbar />
      <section className="pt-24 px-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">About Me</h1>
        <p className="mb-4">
          I&apos;m a Data Science Engineering student at MIT, Manipal, passionate about robotics, AI, and full-stack development.
          I love building things with code and solving real-world problems through intelligent systems and simulations.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">Education</h2>
        <ul className="list-disc pl-6">
          <li>
            <strong>Manipal Institute of Technology, MAHE</strong> (2023-2027)  
            <br />B.Tech in Data Science Engineering — CGPA: 7.84
          </li>
          <li>
            <strong>MGM PU College, Udupi</strong> (2021-2023) — 94.3%
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-2">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
          <span className="bg-gray-100 px-3 py-1 rounded">Python</span>
          <span className="bg-gray-100 px-3 py-1 rounded">C++</span>
          <span className="bg-gray-100 px-3 py-1 rounded">Java</span>
          <span className="bg-gray-100 px-3 py-1 rounded">HTML/CSS</span>
          <span className="bg-gray-100 px-3 py-1 rounded">MySQL</span>
          <span className="bg-gray-100 px-3 py-1 rounded">TensorFlow</span>
          <span className="bg-gray-100 px-3 py-1 rounded">ROS/ROS2</span>
          <span className="bg-gray-100 px-3 py-1 rounded">OpenCV</span>
          <span className="bg-gray-100 px-3 py-1 rounded">STM32CubeIDE</span>
        </div>
      </section>
    </>
  );
}
