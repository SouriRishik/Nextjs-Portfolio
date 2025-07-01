import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-br from-white to-blue-50 pt-20">
      <h1 className="text-5xl font-extrabold mb-4 text-gray-800">Hi, I'm Souri</h1>
      <p className="max-w-2xl text-lg text-gray-700 mb-6 leading-relaxed">
        A Data Science Engineering student at MIT, Manipal.
        <br />
        I'm a coding enthusiast who loves building things with code. From robotics to AI, I'm passionate about solving real-world problems through technology.
      </p>

      <div className="flex space-x-4">
        <Link href="/projects" passHref>
          <a className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition">
            View Projects
          </a>
        </Link>

        <a
          href="/SouriRishik_Resume.pdf"
          download
          className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}
