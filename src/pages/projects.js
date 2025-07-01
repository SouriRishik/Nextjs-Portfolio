import Navbar from '@/components/Navbar';

export default function Projects() {
  return (
    <>
      <Navbar />
      <section className="pt-24 px-6 max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">My Projects</h1>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border p-4 rounded shadow-sm">
            <h2 className="text-xl font-semibold">Autonomous Navigation Robot</h2>
            <p className="text-sm text-gray-600 mb-2">Python, ROS2, SLAM</p>
            <p className="mb-2">
              Built for RoboCup@Work using a 6-DOF arm and RPLIDAR A2M8. Used SLAM Toolbox and NAV2 package for autonomous mapping and navigation.
            </p>
            <a href="https://github.com/SouriRishik" className="text-blue-600 underline">View on GitHub</a>
          </div>

          <div className="border p-4 rounded shadow-sm">
            <h2 className="text-xl font-semibold">Fastest Line Follower</h2>
            <p className="text-sm text-gray-600 mb-2">C, STM32CubeIDE, LSA-08</p>
            <p className="mb-2">
              Built and programmed a line follower robot for World Robotics Championship using STM32CubeIDE, LSA-08 sensor, and MDD3A motor driver.
            </p>
            <a href="https://github.com/SouriRishik" className="text-blue-600 underline">View on GitHub</a>
          </div>

          <div className="border p-4 rounded shadow-sm">
            <h2 className="text-xl font-semibold">Ball Tracker</h2>
            <p className="text-sm text-gray-600 mb-2">Python, ROS, Gazebo</p>
            <p className="mb-2">
              Simulated robot that detects randomly spawned balls using a depth camera and publishes their location relative to robot base frame using TF2.
            </p>
            <a href="https://github.com/SouriRishik" className="text-blue-600 underline">View on GitHub</a>
          </div>

          <div className="border p-4 rounded shadow-sm">
            <h2 className="text-xl font-semibold">Open Volley</h2>
            <p className="text-sm text-gray-600 mb-2">Python, OpenCV</p>
            <p className="mb-2">
              Tracks ball trajectory in volleyball match footage, highlights ball positions, and counts team players using computer vision techniques.
            </p>
            <a href="https://github.com/SouriRishik" className="text-blue-600 underline">View on GitHub</a>
          </div>

          <div className="border p-4 rounded shadow-sm">
            <h2 className="text-xl font-semibold">Netflix Clone</h2>
            <p className="text-sm text-gray-600 mb-2">HTML, CSS</p>
            <p className="mb-2">
              A responsive static clone of the Netflix landing page built using only HTML and CSS.
            </p>
            <a href="https://github.com/SouriRishik" className="text-blue-600 underline">View on GitHub</a>
          </div>

          <div className="border p-4 rounded shadow-sm">
            <h2 className="text-xl font-semibold">Student Marksheet</h2>
            <p className="text-sm text-gray-600 mb-2">C++, OOP</p>
            <p className="mb-2">
              Command-line based marksheet generator using Object-Oriented Programming concepts in C++.
            </p>
            <a href="https://github.com/SouriRishik" className="text-blue-600 underline">View on GitHub</a>
          </div>
        </div>
      </section>
    </>
  );
}
