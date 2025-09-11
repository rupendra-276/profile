// "use client";
// import { useState } from "react";

// export default function SpreadsSignIn() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center p-4">
//       <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
//         <div className="space-y-8 lg:pr-12">
//           <div className="space-y-6">
//             <div className="inline-block">
//               <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
//                 Digital Identity Platform
//               </div>
//             </div>

//             <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
//               Welcome to{" "}
//               <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
//                 Spreads
//               </span>{" "}
//               – Where Your Digital Identity Unlocks Opportunities
//             </h1>

//             <p className="text-xl text-gray-600 leading-relaxed">
//               Your Digital Identity Is Your New Passport
//             </p>

//             <div className="flex items-center space-x-4 pt-4">
//               <div className="flex -space-x-2">
//                 <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full border-2 border-white"></div>
//                 <div className="w-8 h-8 bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-full border-2 border-white"></div>
//                 <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full border-2 border-white"></div>
//               </div>
//               <span className="text-sm text-gray-500">
//                 Join 10,000+ users building their digital identity
//               </span>
//             </div>
//           </div>
//         </div>

//         <div className="w-full max-w-md mx-auto">
//           <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 space-y-6">
//             <div className="text-center space-y-2">
//               <h2 className="text-2xl font-bold text-gray-900">Sign In</h2>
//               <p className="text-gray-500">
//                 Welcome back! Please sign in to your account
//               </p>
//             </div>

//             <div className="space-y-3">
//               <button className="w-full flex items-center justify-center px-4 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-all duration-200 hover:shadow-md group">
//                 <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
//                   <path
//                     fill="#4285F4"
//                     d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
//                   />
//                   <path
//                     fill="#34A853"
//                     d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
//                   />
//                   <path
//                     fill="#FBBC05"
//                     d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
//                   />
//                   <path
//                     fill="#EA4335"
//                     d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
//                   />
//                 </svg>
//                 <span className="text-gray-700 font-medium group-hover:text-gray-900">
//                   Sign in with Google
//                 </span>
//               </button>

//               <button className="w-full flex items-center justify-center px-4 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-all duration-200 hover:shadow-md group">
//                 <svg
//                   className="w-5 h-5 mr-3"
//                   viewBox="0 0 24 24"
//                   fill="currentColor"
//                 >
//                   <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.042-3.441.219-.937 1.404-5.965 1.404-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.888-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.013C24.007 5.367 18.641.001 12.017.001z" />
//                 </svg>
//                 <span className="text-gray-700 font-medium group-hover:text-gray-900">
//                   Sign in with Apple
//                 </span>
//               </button>
//             </div>

//             <div className="relative">
//               <div className="absolute inset-0 flex items-center">
//                 <div className="w-full border-t border-gray-200"></div>
//               </div>
//               <div className="relative flex justify-center text-sm">
//                 <span className="px-4 bg-white text-gray-500">or</span>
//               </div>
//             </div>

//             <div className="space-y-4">
//               <div>
//                 <input
//                   type="text"
//                   placeholder="Enter Your Phone, Email Or User name"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
//                 />
//               </div>

//               <div className="relative">
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   placeholder="Enter your password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white pr-12"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
//                 >
//                   {showPassword ? (
//                     <svg
//                       className="w-5 h-5"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
//                       />
//                     </svg>
//                   ) : (
//                     <svg
//                       className="w-5 h-5"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
//                       />
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
//                       />
//                     </svg>
//                   )}
//                 </button>
//               </div>

//               <div className="flex items-center justify-between text-sm">
//                 <button className="text-blue-600 hover:text-blue-700 font-medium hover:underline">
//                   Forgot password?
//                 </button>
//                 <div className="flex items-center space-x-1">
//                   <span className="text-gray-500">New to Spreads?</span>
//                   <button className="text-blue-600 hover:text-blue-700 font-medium hover:underline">
//                     Sign Up
//                   </button>
//                 </div>
//               </div>

//               <button
//                 onClick={() => console.log("Login clicked")}
//                 className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
//               >
//                 Login
//               </button>
//             </div>

//             <div className="text-center">
//               <p className="text-xs text-gray-500 leading-relaxed">
//                 By signing up, you agree to the{" "}
//                 <button className="text-blue-600 hover:underline">
//                   Terms of Service
//                 </button>{" "}
//                 and{" "}
//                 <button className="text-blue-600 hover:underline">
//                   Privacy Policy
//                 </button>{" "}
//                 including{" "}
//                 <button className="text-blue-600 hover:underline">
//                   Cookie Use
//                 </button>
//                 .
//               </p>
//             </div>

//             <div className="text-center pt-4">
//               <p className="text-sm text-gray-500">
//                 Don't have an account?{" "}
//                 <button className="text-blue-600 hover:text-blue-700 font-medium hover:underline">
//                   Register here
//                 </button>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// Updated Login Page (app/login/page.js)
// This integrates Redux for login, stores token in localStorage, and redirects to /jobfeed on success.
// Assumptions:
// - The input is treated as email (backend expects email for login).
// - If you want to support phone or username, update backend to handle alternative login fields.
// - Google/Apple sign-in not implemented (can be added similarly with Firebase).
// - "Forgot password?" not implemented (can add a route like /forgot-password).
// - "Sign Up" and "Register here" redirect to /register.

// "use client";

// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { loginUser } from "../store/authSlice";
// import { useRouter } from "next/navigation";

// export default function SpreadsSignIn() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   const dispatch = useDispatch();
//   const router = useRouter();
//   const { loading, error } = useSelector((state) => state.auth);

//   const handleLogin = async () => {
//     if (!email || !password) {
//       alert("Please enter email and password");
//       return;
//     }

//     try {
//       const result = await dispatch(loginUser({ email, password })).unwrap();
//       localStorage.setItem("token", result.token); // Store token in localStorage
//       console.log("Login successful");
//       router.push("/jobfeed"); // Redirect to /jobfeed
//     } catch (err) {
//       console.error("Login error:", err);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center p-4">
//       <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
//         <div className="space-y-8 lg:pr-12">
//           <div className="space-y-6">
//             <div className="inline-block">
//               <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
//                 Digital Identity Platform
//               </div>
//             </div>

//             <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
//               Welcome to{" "}
//               <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
//                 Spreads
//               </span>{" "}
//               – Where Your Digital Identity Unlocks Opportunities
//             </h1>

//             <p className="text-xl text-gray-600 leading-relaxed">
//               Your Digital Identity Is Your New Passport
//             </p>

//             <div className="flex items-center space-x-4 pt-4">
//               <div className="flex -space-x-2">
//                 <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full border-2 border-white"></div>
//                 <div className="w-8 h-8 bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-full border-2 border-white"></div>
//                 <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full border-2 border-white"></div>
//               </div>
//               <span className="text-sm text-gray-500">
//                 Join 10,000+ users building their digital identity
//               </span>
//             </div>
//           </div>
//         </div>

//         <div className="w-full max-w-md mx-auto">
//           <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 space-y-6">
//             <div className="text-center space-y-2">
//               <h2 className="text-2xl font-bold text-gray-900">Sign In</h2>
//               <p className="text-gray-500">
//                 Welcome back! Please sign in to your account
//               </p>
//             </div>

//             <div className="space-y-3">
//               <button className="w-full flex items-center justify-center px-4 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-all duration-200 hover:shadow-md group">
//                 <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
//                   <path
//                     fill="#4285F4"
//                     d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
//                   />
//                   <path
//                     fill="#34A853"
//                     d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
//                   />
//                   <path
//                     fill="#FBBC05"
//                     d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
//                   />
//                   <path
//                     fill="#EA4335"
//                     d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
//                   />
//                 </svg>
//                 <span className="text-gray-700 font-medium group-hover:text-gray-900">
//                   Sign in with Google
//                 </span>
//               </button>

//               <button className="w-full flex items-center justify-center px-4 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-all duration-200 hover:shadow-md group">
//                 <svg
//                   className="w-5 h-5 mr-3"
//                   viewBox="0 0 24 24"
//                   fill="currentColor"
//                 >
//                   <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.042-3.441.219-.937 1.404-5.965 1.404-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.888-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.013C24.007 5.367 18.641.001 12.017.001z" />
//                 </svg>
//                 <span className="text-gray-700 font-medium group-hover:text-gray-900">
//                   Sign in with Apple
//                 </span>
//               </button>
//             </div>

//             <div className="relative">
//               <div className="absolute inset-0 flex items-center">
//                 <div className="w-full border-t border-gray-200"></div>
//               </div>
//               <div className="relative flex justify-center text-sm">
//                 <span className="px-4 bg-white text-gray-500">or</span>
//               </div>
//             </div>

//             <div className="space-y-4">
//               <div>
//                 <input
//                   type="text"
//                   placeholder="Enter Your Phone, Email Or User name"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
//                 />
//               </div>

//               <div className="relative">
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   placeholder="Enter your password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white pr-12"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
//                 >
//                   {showPassword ? (
//                     <svg
//                       className="w-5 h-5"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
//                       />
//                     </svg>
//                   ) : (
//                     <svg
//                       className="w-5 h-5"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
//                       />
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
//                       />
//                     </svg>
//                   )}
//                 </button>
//               </div>

//               <div className="flex items-center justify-between text-sm">
//                 <button className="text-blue-600 hover:text-blue-700 font-medium hover:underline">
//                   Forgot password?
//                 </button>
//                 <div className="flex items-center space-x-1">
//                   <span className="text-gray-500">New to Spreads?</span>
//                   <button
//                     onClick={() => router.push("/register")}
//                     className="text-blue-600 hover:text-blue-700 font-medium hover:underline"
//                   >
//                     Sign Up
//                   </button>
//                 </div>
//               </div>

//               {error && <p className="text-red-500 text-sm">{error}</p>}
//               <button
//                 onClick={handleLogin}
//                 disabled={loading}
//                 className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 {loading ? "Logging in..." : "Login"}
//               </button>
//             </div>

//             <div className="text-center">
//               <p className="text-xs text-gray-500 leading-relaxed">
//                 By signing up, you agree to the{" "}
//                 <button className="text-blue-600 hover:underline">
//                   Terms of Service
//                 </button>{" "}
//                 and{" "}
//                 <button className="text-blue-600 hover:underline">
//                   Privacy Policy
//                 </button>{" "}
//                 including{" "}
//                 <button className="text-blue-600 hover:underline">
//                   Cookie Use
//                 </button>
//                 .
//               </p>
//             </div>

//             <div className="text-center pt-4">
//               <p className="text-sm text-gray-500">
//                 Don't have an account?{" "}
//                 <button
//                   onClick={() => router.push("/register")}
//                   className="text-blue-600 hover:text-blue-700 font-medium hover:underline"
//                 >
//                   Register here
//                 </button>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// jjjjjjjjjjjjjjjjjjjjjjj

// "use client";

// import { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { loginUser } from "../store/authSlice";
// import { useRouter } from "next/navigation";

// export default function SpreadsSignIn() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   const dispatch = useDispatch();
//   const router = useRouter();
//   const { user, loading, error } = useSelector((state) => state.auth);

//   // Redirect if already logged in
//   useEffect(() => {
//     if (user) {
//       router.push("/jobfeed");
//     }
//   }, [user, router]);

//   const handleLogin = async () => {
//     if (!email || !password) {
//       alert("Please enter email and password");
//       return;
//     }

//     try {
//       const result = await dispatch(loginUser({ email, password })).unwrap();
//       localStorage.setItem("token", result.token);
//       console.log("Login successful");
//       router.push("/jobfeed");
//     } catch (err) {
//       console.error("Login error:", err);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center p-4">
//       <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
//         <div className="space-y-8 lg:pr-12">
//           <div className="space-y-6">
//             <div className="inline-block">
//               <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
//                 Digital Identity Platform
//               </div>
//             </div>

//             <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
//               Welcome to{" "}
//               <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
//                 Spreads
//               </span>{" "}
//               – Where Your Digital Identity Unlocks Opportunities
//             </h1>

//             <p className="text-xl text-gray-600 leading-relaxed">
//               Your Digital Identity Is Your New Passport
//             </p>

//             <div className="flex items-center space-x-4 pt-4">
//               <div className="flex -space-x-2">
//                 <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full border-2 border-white"></div>
//                 <div className="w-8 h-8 bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-full border-2 border-white"></div>
//                 <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full border-2 border-white"></div>
//               </div>
//               <span className="text-sm text-gray-500">
//                 Join 10,000+ users building their digital identity
//               </span>
//             </div>
//           </div>
//         </div>

//         <div className="w-full max-w-md mx-auto">
//           <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 space-y-6">
//             <div className="text-center space-y-2">
//               <h2 className="text-2xl font-bold text-gray-900">Sign In</h2>
//               <p className="text-gray-500">
//                 Welcome back! Please sign in to your account
//               </p>
//             </div>

//             <div className="space-y-3">
//               <button className="w-full flex items-center justify-center px-4 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-all duration-200 hover:shadow-md group">
//                 <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
//                   <path
//                     fill="#4285F4"
//                     d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
//                   />
//                   <path
//                     fill="#34A853"
//                     d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
//                   />
//                   <path
//                     fill="#FBBC05"
//                     d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
//                   />
//                   <path
//                     fill="#EA4335"
//                     d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
//                   />
//                 </svg>
//                 <span className="text-gray-700 font-medium group-hover:text-gray-900">
//                   Sign in with Google
//                 </span>
//               </button>

//               <button className="w-full flex items-center justify-center px-4 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-all duration-200 hover:shadow-md group">
//                 <svg
//                   className="w-5 h-5 mr-3"
//                   viewBox="0 0 24 24"
//                   fill="currentColor"
//                 >
//                   <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.042-3.441.219-.937 1.404-5.965 1.404-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.888-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.013C24.007 5.367 18.641.001 12.017.001z" />
//                 </svg>
//                 <span className="text-gray-700 font-medium group-hover:text-gray-900">
//                   Sign in with Apple
//                 </span>
//               </button>
//             </div>

//             <div className="relative">
//               <div className="absolute inset-0 flex items-center">
//                 <div className="w-full border-t border-gray-200"></div>
//               </div>
//               <div className="relative flex justify-center text-sm">
//                 <span className="px-4 bg-white text-gray-500">or</span>
//               </div>
//             </div>

//             <div className="space-y-4">
//               <div>
//                 <input
//                   type="text"
//                   placeholder="Enter Your Phone, Email Or User name"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
//                 />
//               </div>

//               <div className="relative">
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   placeholder="Enter your password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white pr-12"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
//                 >
//                   {showPassword ? (
//                     <svg
//                       className="w-5 h-5"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
//                       />
//                     </svg>
//                   ) : (
//                     <svg
//                       className="w-5 h-5"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
//                       />
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
//                       />
//                     </svg>
//                   )}
//                 </button>
//               </div>

//               <div className="flex items-center justify-between text-sm">
//                 <button className="text-blue-600 hover:text-blue-700 font-medium hover:underline">
//                   Forgot password?
//                 </button>
//                 <div className="flex items-center space-x-1">
//                   <span className="text-gray-500">New to Spreads?</span>
//                   <button
//                     onClick={() => router.push("/register")}
//                     className="text-blue-600 hover:text-blue-700 font-medium hover:underline"
//                   >
//                     Sign Up
//                   </button>
//                 </div>
//               </div>

//               {error && <p className="text-red-500 text-sm">{error}</p>}
//               <button
//                 onClick={handleLogin}
//                 disabled={loading}
//                 className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 {loading ? "Logging in..." : "Login"}
//               </button>
//             </div>

//             <div className="text-center">
//               <p className="text-xs text-gray-500 leading-relaxed">
//                 By signing up, you agree to the{" "}
//                 <button className="text-blue-600 hover:underline">
//                   Terms of Service
//                 </button>{" "}
//                 and{" "}
//                 <button className="text-blue-600 hover:underline">
//                   Privacy Policy
//                 </button>{" "}
//                 including{" "}
//                 <button className="text-blue-600 hover:underline">
//                   Cookie Use
//                 </button>
//                 .
//               </p>
//             </div>

//             <div className="text-center pt-4">
//               <p className="text-sm text-gray-500">
//                 Don't have an account?{" "}
//                 <button
//                   onClick={() => router.push("/register")}
//                   className="text-blue-600 hover:text-blue-700 font-medium hover:underline"
//                 >
//                   Register here
//                 </button>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// jajajajajajajajaj

"use client";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../store/authSlice";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function SpreadsSignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const router = useRouter();
  const { user, loading } = useSelector((state) => state.auth);

  // Redirect if already logged in
  useEffect(() => {
    if (user || localStorage.getItem("token")) {
      router.replace("/jobfeed");
    }
  }, [user, router]);

  const handleLogin = async () => {
    if (!email || !password) {
      toast.error("Please enter email and password", { position: "top-right" });
      return;
    }

    try {
      const result = await dispatch(loginUser({ email, password })).unwrap();
      localStorage.setItem("token", result.token);
      router.replace("/jobfeed");
    } catch (err) {
      // Error toast is handled in authSlice
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 lg:pr-12">
          <div className="space-y-3">
            <div className="inline-block">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full text-[10px] font-medium ">
                Digital Identity Platform
              </div>
            </div>
            <div>
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 leading-tight">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Spreads
              </span>{" "}
              – Where Your Digital Identity Unlocks Opportunities
            </h1>
               <p className="text-lg mt-1 text-gray-600 leading-relaxed">
              Your Digital Identity Is Your New Passport
            </p>
            </div>


         

            <div className="flex items-center space-x-4 pt-4">
              <div className="flex -space-x-2">
                <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full border-2 border-white"></div>
                <div className="w-6 h-6 bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-full border-2 border-white"></div>
                <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full border-2 border-white"></div>
              </div>
              <span className="text-sm text-gray-500">
                Join 10,000+ users building their digital identity
              </span>
            </div>
          </div>
        </div>

        <div className="w-full max-w-md my-10 mx-auto">
          <div className="bg-white rounded-2xl m-5 shadow-xl border border-gray-100 p-8 space-y-3">
            <div className="text-center space-y-2">
              <h2 className="text-lg font-bold text-gray-900">Sign In</h2>
              <p className="text-gray-500 text-[13px]">
                Welcome back! Please sign in to your account
              </p>
            </div>

            <div className="space-y-2">
              <button className="w-full  flex items-center justify-center px-3 py-2 border border-gray-200 rounded-xl hover:bg-gray-50 transition-all duration-200 hover:shadow-md group">
                <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                <span className="text-gray-700  text-[13px] font-semibold group-hover:text-gray-900">
                  Sign in with Google
                </span>
              </button>

              <button className="w-full flex items-center justify-center px-3 py-2 border border-gray-200 rounded-xl hover:bg-gray-50 transition-all duration-200 hover:shadow-md group">
                <svg
                  className="w-5 h-5 mr-3"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.042-3.441.219-.937 1.404-5.965 1.404-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.888-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.013C24.007 5.367 18.641.001 12.017.001z" />
                </svg>
                <span className="text-gray-700 text-[13px] font-medium group-hover:text-gray-900">
                  Sign in with Apple
                </span>
              </button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">or</span>
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <input
                  type="text"
                  placeholder="Enter Your Phone, Email Or User name"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full text-[12px] px-2 py-1.5 text-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                />
              </div>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full text-[12px] px-2 py-1.5 border text-sm border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 text-sm transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  )}
                </button>
              </div>

              <div className="flex items-center my-4 justify-between text-sm">
                <button className="text-blue-600 hover:text-blue-700 font-medium hover:underline">
                  Forgot password?
                </button>
                <div className="flex items-center space-x-1">
                  <span className="text-gray-500">New to Spreads?</span>
                  <button
                    onClick={() => router.push("/signup")}
                    className="text-blue-600 hover:text-blue-700 hover:cursor-pointer font-medium hover:underline"
                  >
                    Sign Up
                  </button>
                </div>
              </div>

              <button
                onClick={handleLogin}
                disabled={loading}
                className="w-full my-1 hover:cursor-pointer bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-1.5 rounded-xl font-medium text-sm hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-md transform hover:-translate-y-0.5 disabled:opacity-80 disabled:cursor-not-allowed"
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </div>

            <div className="text-center">
              <p className="text-xs text-gray-500 leading-relaxed">
                By signing up, you agree to the{" "}
                <button className="text-blue-600 hover:underline">
                  Terms of Service
                </button>{" "}
                and{" "}
                <button className="text-blue-600 hover:cursor-pointer hover:underline">
                  Privacy Policy
                </button>{" "}
                including{" "}
                <button className="text-blue-600 hover:cursor-pointer hover:underline">
                  Cookie Use
                </button>
                .
              </p>
            </div>

            <div className="text-center pt-4">
              <p className="text-sm text-gray-500">
                Don't have an account?{" "}
                <button
                  onClick={() => router.push("/signup")}
                  className="text-blue-600 hover:cursor-pointer hover:text-blue-700 font-medium hover:underline"
                >
                  Register here
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
