import React, { useState } from "react";

export default function AuthPage() {
  const [mode, setMode] = useState("login");
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    setTimeout(() => {
      setLoading(false);
      setMessage(
        mode === "login"
          ? "Login berhasil!"
          : "Registrasi berhasil! Akunmu sudah dibuat."
      );
      setForm({ name: "", email: "", password: "" });
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-800 via-purple-700 to-pink-600 p-6" style={{ fontFamily: "Inter, sans-serif" }}>
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <div className="flex flex-col items-center mb-6">
          {/* Animated Ring */}
          <div className="relative mb-4">
            <div className="rotating-ring w-32 h-32 rounded-full flex items-center justify-center">
              <div className="inner-circle w-16 h-16 rounded-full"></div>
            </div>
          </div>
          <h1 className="text-2xl font-bold text-white">{mode === "login" ? "Login" : "Register"}</h1>
        </div>

        {message && (
          <div className="p-3 mb-4 rounded-md text-center text-sm bg-green-600/20 text-green-200">
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === "register" && (
            <div>
              <label className="block text-sm text-white/80 mb-1">Nama</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-xl bg-white/20 text-white placeholder-white/60 outline-none"
                placeholder="Nama Lengkap"
              />
            </div>
          )}

          <div>
            <label className="block text-sm text-white/80 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-xl bg-white/20 text-white placeholder-white/60 outline-none"
              placeholder="email@domain.com"
            />
          </div>

          <div>
            <label className="block text-sm text-white/80 mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              minLength={6}
              className="w-full px-4 py-2 rounded-xl bg-white/20 text-white placeholder-white/60 outline-none"
              placeholder="Minimal 6 karakter"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-white text-indigo-700 font-semibold hover:scale-[1.02] transition-transform shadow-md"
          >
            {loading ? (
              <div className="flex items-center justify-center gap-2">
                <div className="loader w-4 h-4 rounded-full" />
                <span>Loading...</span>
              </div>
            ) : mode === "login" ? (
              "Login"
            ) : (
              "Register"
            )}
          </button>
        </form>

        <p className="text-center text-white/70 text-sm mt-4">
          {mode === "login" ? "Belum punya akun?" : "Sudah punya akun?"}{" "}
          <button
            onClick={() => setMode(mode === "login" ? "register" : "login")}
            className="underline hover:text-white"
          >
            {mode === "login" ? "Register" : "Login"}
          </button>
        </p>
      </div>

      <style>{`
        .rotating-ring{
          border: 6px solid rgba(255,255,255,0.2);
          border-top: 6px solid #fff;
          animation: spin 3s linear infinite;
        }
        .inner-circle{
          background: rgba(255,255,255,0.15);
          border: 2px solid rgba(255,255,255,0.3);
        }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

        .loader{
          background: white;
          animation: pulse 1s infinite;
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.9; }
          50% { transform: scale(1.3); opacity: 0.6; }
        }
      `}</style>
    </div>
  );
}
