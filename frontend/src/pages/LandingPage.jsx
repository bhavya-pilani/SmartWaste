import { NavLink } from 'react-router-dom';
import SignIn from './auth/SignIn';
import './LandingPage.css';
import React, { useEffect, useState } from 'react';


const LandingPage = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        try {
          const storedUser = localStorage.getItem('user');
          if (storedUser) {
            setUser(JSON.parse(storedUser));
          }
        } catch (error) {
          console.error('Error parsing user from localStorage:', error);
          // Optionally, handle the error (e.g., set user to null, display an error message)
        }
      }, []);

    const handleLogout = () => {
        localStorage.removeItem('user');
        setUser(null);
        // Redirect to login or home page after logout
        window.location.href = '/'; // Example redirect
    };


    return (

        <>








            <header>
                <div class="navbar">
                    <div class="logo">
                        <span class="logo-icon">♻️</span>
                        <span>SmartWaste</span>
                    </div>
                    <div>
                        <nav>
                            <ul>
                                {user ? (
                                    <>
                                        {user.role === 'admin' && (
                                            <li>
                                                <a href="/admin-dashboard">Admin Dashboard</a>
                                            </li>
                                        )}
                                        {user.role === 'user' && (
                                            <li>
                                                <a href="/user-dashboard">User Dashboard</a>
                                            </li>
                                        )}
                                        <li>
                                            <a href="/" onClick={handleLogout}>Logout</a>
                                        </li>
                                    </>
                                ) : (
                                    <li>
                                        <a href="/signin">Login</a>
                                    </li>
                                )}







                                {/*<li><NavLink to="/user-dashboard"><a>User Dashboard</a></NavLink></li>
                                <li><NavLink to="/admin-dashboard"><a>Admin Dashboard</a></NavLink></li>
                                <li><NavLink to="/signin"><a>Login In</a></NavLink></li>
                            */}</ul>
                        </nav>
                    </div>
                </div>
            </header>


            <section class="hero">
                <div class="hero-content">
                    <h1>Smart Waste Management for Smart Cities</h1>
                    <p>IoT-enabled waste management system revolutionizing urban sanitation with smart bins, real-time
                        monitoring, and citizen engagement.</p>
                    <a href="#features" class="cta-button">Discover How It Works</a>
                </div>
            </section>


            <section class="features" id="features">
                <div class="section-title">
                    <h2>Smart Features</h2>
                </div>
                <div class="feature-grid">
                    <div class="feature-card">
                        <div class="feature-icon">📊</div>
                        <h3>Real-time Monitoring</h3>
                        <p>Smart sensors track waste levels, types, and detect potential hazards, providing continuous data to
                            optimize collection routes.</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">🔄</div>
                        <h3>Waste Sorting</h3>
                        <p>Automated waste classification into wet, dry, and hazardous categories ensures proper treatment and
                            maximizes recycling potential.</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">🚨</div>
                        <h3>Hazard Detection</h3>
                        <p>Advanced sensors detect odors, fire hazards, and other risks, triggering immediate alerts to prevent
                            environmental incidents.</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">📲</div>
                        <h3>Citizen Engagement</h3>
                        <p>Mobile application allows citizens to track bin status, report issues, and earn rewards for
                            responsible waste disposal.</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">🚚</div>
                        <h3>Smart Transport</h3>
                        <p>When bins reach capacity, automated systems coordinate waste transport to designated areas for
                            processing.</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">🧠</div>
                        <h3>AI Optimization</h3>
                        <p>Artificial intelligence analyzes waste patterns and optimizes collection routes, schedules, and
                            resource allocation.</p>
                    </div>
                </div>
            </section>


            <section class="dashboard" id="dashboard">
                <div class="dashboard-container">
                    <div class="section-title">
                        <h2>Live Dashboard</h2>
                    </div>
                    <div class="dashboard-grid">
                        <div class="dashboard-card">
                            <h3>Waste Collection Statistics</h3>
                            <div class="stat">
                                <div class="stat-icon">📈</div>
                                <div class="stat-info">
                                    <h4>Total Waste Collected Today</h4>
                                    <p>4.8 Tons</p>
                                </div>
                            </div>
                            <div class="stat">
                                <div class="stat-icon">♻️</div>
                                <div class="stat-info">
                                    <h4>Recycling Rate</h4>
                                    <p>68%</p>
                                </div>
                            </div>
                            <div class="stat">
                                <div class="stat-icon">🚚</div>
                                <div class="stat-info">
                                    <h4>Collection Trucks Active</h4>
                                    <p>12</p>
                                </div>
                            </div>
                        </div>
                        <div class="dashboard-card">
                            <h3>Smart Bin Status</h3>
                            <div class="bin-status">
                                <div class="bin-label">
                                    <span>Bin 1 - City Center</span>
                                    <span>30%</span>
                                </div>
                                <div class="progress-bar">
                                    <div class="progress normal"></div>
                                </div>
                            </div>
                            <div class="bin-status">
                                <div class="bin-label">
                                    <span>Bin 2 - Park Area</span>
                                    <span>65%</span>
                                </div>
                                <div class="progress-bar">
                                    <div class="progress warning"></div>
                                </div>
                            </div>
                            <div class="bin-status">
                                <div class="bin-label">
                                    <span>Bin 3 - Shopping Mall</span>
                                    <span>85%</span>
                                </div>
                                <div class="progress-bar">
                                    <div class="progress critical"></div>
                                </div>
                            </div>
                        </div>
                        <div class="dashboard-card">
                            <h3>Hazard Alerts</h3>
                            <div class="stat">
                                <div class="stat-icon">🔥</div>
                                <div class="stat-info">
                                    <h4>Fire Hazards</h4>
                                    <p>0 Detected</p>
                                </div>
                            </div>
                            <div class="stat">
                                <div class="stat-icon">☣️</div>
                                <div class="stat-info">
                                    <h4>Toxic Materials</h4>
                                    <p>1 Alert</p>
                                </div>
                            </div>
                            <div class="stat">
                                <div class="stat-icon">👃</div>
                                <div class="stat-info">
                                    <h4>Odor Levels</h4>
                                    <p>Normal</p>
                                </div>
                            </div>
                        </div>
                        <div class="dashboard-card">
                            <h3>System Performance</h3>
                            <div class="stat">
                                <div class="stat-icon">⚡</div>
                                <div class="stat-info">
                                    <h4>Energy Consumption</h4>
                                    <p>12.4 kWh</p>
                                </div>
                            </div>
                            <div class="stat">
                                <div class="stat-icon">🔋</div>
                                <div class="stat-info">
                                    <h4>Battery Status</h4>
                                    <p>87% Average</p>
                                </div>
                            </div>
                            <div class="stat">
                                <div class="stat-icon">📶</div>
                                <div class="stat-info">
                                    <h4>Network Connectivity</h4>
                                    <p>98% Uptime</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section class="waste-sorting" id="waste-sorting">
                <div class="section-title">
                    <h2>Waste Sorting Guide</h2>
                </div>
                <div class="waste-types">
                    <div class="waste-type">
                        <img src="/img1.webp" alt="Dry Waste" />
                        <div class="waste-type-content">
                            <h3>Dry Waste</h3>
                            <p>Dry waste includes materials that can be recycled and do not contain food residue or moisture.
                            </p>
                            <div class="waste-examples">
                                <h4>Examples:</h4>
                                <ul>
                                    <li>Paper and cardboard</li>
                                    <li>Plastic bottles and containers</li>
                                    <li>Metal cans and foil</li>
                                    <li>Glass bottles and jars</li>
                                    <li>Tetra packs</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="waste-type">
                        <img src="/img2.webp" alt="Wet Waste" />
                        <div class="waste-type-content">
                            <h3>Wet Waste</h3>
                            <p>Wet waste is biodegradable and typically contains food scraps or other organic materials that can
                                be composted.</p>
                            <div class="waste-examples">
                                <h4>Examples:</h4>
                                <ul>
                                    <li>Food scraps</li>
                                    <li>Fruit and vegetable peels</li>
                                    <li>Tea bags and coffee grounds</li>
                                    <li>Eggshells</li>
                                    <li>Garden waste</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="waste-type">
                        <img src="/img3.webp" alt="Hazardous Waste" />
                        <div class="waste-type-content">
                            <h3>Hazardous Waste</h3>
                            <p>Hazardous waste contains harmful substances that require special handling and disposal
                                procedures.</p>
                            <div class="waste-examples">
                                <h4>Examples:</h4>
                                <ul>
                                    <li>Batteries</li>
                                    <li>Electronic waste</li>
                                    <li>Chemicals and solvents</li>
                                    <li>Medical waste</li>
                                    <li>Paint and aerosol cans</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section class="notifications" id="notifications">
                <div class="notifications-container">
                    <div class="section-title">
                        <h2>Smart Notifications</h2>
                    </div>
                    <div class="notifications-content">

                        <div class="notifications-text">
                            <h3>Stay Informed in Real-Time</h3>
                            <div class="notification-feature">
                                <div class="notification-icon">🔔</div>
                                <div class="notification-info">
                                    <h4>Bin Status Alerts</h4>
                                    <p>Receive notifications when bins reach capacity, triggering automatic collection requests.
                                    </p>
                                </div>
                            </div>
                            <div class="notification-feature">
                                <div class="notification-icon">⚠️</div>
                                <div class="notification-info">
                                    <h4>Hazard Warnings</h4>
                                    <p>Immediate alerts for detected hazards such as fire, toxic materials, or unusual
                                        conditions.</p>
                                </div>
                            </div>
                            <div class="notification-feature">
                                <div class="notification-icon">🔄</div>
                                <div class="notification-info">
                                    <h4>Collection Updates</h4>
                                    <p>Track waste collection status and receive confirmations when service is completed.</p>
                                </div>
                            </div>
                            <div class="notification-feature">
                                <div class="notification-icon">🛠️</div>
                                <div class="notification-info">
                                    <h4>Maintenance Reminders</h4>
                                    <p>System health monitoring with proactive maintenance alerts to prevent downtime.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section class="citizen-portal" id="citizen-portal">
                <div class="section citizen-portal" id="citizen-portal">
                    <div class="section-title">
                        <h2>Citizen Portal</h2>
                    </div>
                    <div class="portal-features">
                        <div class="portal-feature">
                            <div class="portal-icon">📱</div>
                            <h3>Mobile Access</h3>
                            <p>Access the waste management system on-the-go with our mobile app available for Android and iOS
                                devices.</p>
                        </div>
                        <div class="portal-feature">
                            <div class="portal-icon">🗺️</div>
                            <h3>Bin Locator</h3>
                            <p>Find the nearest available smart bins with detailed information about capacity and waste types
                                accepted.</p>
                        </div>
                        <div class="portal-feature">
                            <div class="portal-icon">📣</div>
                            <h3>Issue Reporting</h3>
                            <p>Report issues such as damaged bins, improper disposal, or collection problems directly through
                                the platform.</p>
                        </div>
                        <div class="portal-feature">
                            <div class="portal-icon">🏆</div>
                            <h3>Reward System</h3>
                            <p>Earn rewards for responsible waste disposal practices and active participation in community
                                cleanliness.</p>
                        </div>
                        <div class="portal-feature">
                            <div class="portal-icon">📊</div>
                            <h3>Personal Analytics</h3>
                            <p>Track your waste disposal habits and environmental impact with personalized analytics and
                                insights.</p>
                        </div>
                        <div class="portal-feature">
                            <div class="portal-icon">🔔</div>
                            <h3>Custom Alerts</h3>
                            <p>Configure custom notifications for collection schedules, special disposal events, and community
                                initiatives.</p>
                        </div>
                    </div>
                </div>
            </section>


            <section class="cta-section">
                <div class="cta-container">
                    <h2>Join the Smart Waste Revolution</h2>
                    <p>Be part of a cleaner, more sustainable future with our IoT-enabled waste management system.</p>
                    <div class="cta-buttons">
                        <a href="#" class="cta-button">Download Mobile App</a>
                        <a href="#" class="secondary-button">Contact Us</a>
                    </div>
                </div>
            </section>


            <footer>
                <div class="footer-container">
                    <div class="footer-column">
                        <h3>SmartWaste</h3>
                        <p>Revolutionizing urban sanitation with IoT-enabled waste management solutions that connect smart bins,
                            citizens, and service providers.</p>
                        <div class="social-icons">
                            <a href="#"><span>FB</span></a>
                            <a href="#"><span>TW</span></a>
                            <a href="#"><span>IG</span></a>
                            <a href="#"><span>LI</span></a>
                        </div>
                    </div>
                    <div class="footer-column">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="#features">Features</a></li>
                            <li><a href="#dashboard">Dashboard</a></li>
                            <li><a href="#waste-sorting">Waste Sorting</a></li>
                            <li><a href="#notifications">Notifications</a></li>
                            <li><a href="#citizen-portal">Citizen Portal</a></li>
                        </ul>
                    </div>
                    <div class="footer-column">
                        <h3>Resources</h3>
                        <ul>
                            <li><a href="#">Help Center</a></li>
                            <li><a href="#">User Guide</a></li>
                            <li><a href="#">API Documentation</a></li>
                            <li><a href="#">System Status</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div class="footer-column">
                        <h3>Contact Us</h3>
                        <ul>
                            <li><a href="mailto:info@smartwaste.com">info@smartwaste.com</a></li>
                            <li><a href="tel:+123456789">+1 (234) 567-89</a></li>
                            <li><a href="#">Support Ticket</a></li>
                            <li><a href="#">Feedback Form</a></li>
                        </ul>
                    </div>
                </div>
                <div class="copyright">
                    <p>&copy; 2025 SmartWaste. All rights reserved.</p>
                </div>
            </footer>





        </>
    )
}

export default LandingPage;