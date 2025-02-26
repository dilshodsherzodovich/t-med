import { useEffect, useState } from "react";
import "./AuthModal.scss";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

const user = JSON.parse(localStorage.getItem("user"));

function AuthModal() {
  const [searchParams, setSearchParams] = useSearchParams();

  const isAuthOpen = searchParams.get("auth");

  const [, setUsername] = useState(user?.username);

  const [isRailwayWorker, setIsRailwayWorker] = useState(false);

  const [activeTab, setActiveTab] = useState("signin");

  const mutation = useMutation({
    mutationFn: auth,
    onSuccess: (data) => {
      setUsername(data.username);
      localStorage.setItem("user", JSON.stringify(data));
      toast.success("Amaliyot muvaffaqqiyatli amalga oshirildi", {
        theme: "colored",
      });
      handleClose();
      mutation.reset();
    },
    // onError: (error) => {},
  });

  useEffect(() => {
    if (!mutation?.error) return;
    if (mutation?.error?.status === 500) {
      toast.error("Server error", { theme: "colored" });
      mutation.reset();
      return;
    }
    const errors = [];

    if (
      mutation?.error?.response?.data &&
      typeof mutation.error.response.data === "object"
    ) {
      if (mutation?.error?.response?.data?.error) {
        errors.push(mutation?.error?.response?.data?.error);
      } else {
        Object.values(mutation?.error?.response?.data || {})?.forEach((item) =>
          errors.push(...item)
        );
      }
    }

    errors.forEach((error) => {
      toast.error(error, { theme: "colored" });
    });
    mutation.reset();

    // eslint-disable-next-line
  }, [mutation.error]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);

    mutation.mutate({
      data,
      tab: "login",
    });
    // Handle form submission logic here
  };

  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    data.append("is_railway_worker", isRailwayWorker);

    mutation.mutate({
      data,
      tab: "register",
    });
    // Handle form submission logic here
  };

  const handleClose = () => {
    searchParams.delete("auth");
    setSearchParams(searchParams);
  };

  async function auth({ data, tab }) {
    const response = await axios.post(
      `https://back.nsu-railway.uz/account/${tab}/`,
      data
    );
    return response.data;
  }

  return (
    <>
      {isAuthOpen && (
        <div className="singing-modal">
          <div className="modal-overlay">
            <div className="auth-modal">
              <button className="close-button" onClick={handleClose}>
                ×
              </button>
              <h4>Avtorizatsiya</h4>
              <p>{"Shaxsiy kabinetga kiring yoki ro'yxatdan o'ting"}</p>
              <div className="tabs">
                <button
                  className={activeTab === "signin" ? "active" : ""}
                  onClick={() => setActiveTab("signin")}
                >
                  Kirish
                </button>
                <button
                  className={activeTab === "signup" ? "active" : ""}
                  onClick={() => setActiveTab("signup")}
                >
                  {"Ro'yxatdan o'tish"}
                </button>
              </div>
              {activeTab === "signin" ? (
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="login">Login</label>
                    <input
                      id="login"
                      type="text"
                      name="username"
                      placeholder="m@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="password">Parol</label>
                    <input
                      name="password"
                      id="password"
                      type="password"
                      required
                    />
                  </div>
                  <button type="submit">Kirish</button>
                </form>
              ) : (
                <form autoComplete="off" onSubmit={handleRegisterSubmit}>
                  <div>
                    <label htmlFor="fio">FIO</label>
                    <input
                      autoComplete="off"
                      id="fio"
                      type="text"
                      name="fio"
                      required
                    />
                  </div>

                  <div className="d-flex align-items-center gap-1">
                    <input
                      id="isRailwayWorker"
                      name="is_railway_worker"
                      type="checkbox"
                      style={{ width: "auto" }}
                      checked={isRailwayWorker}
                      onChange={(e) => setIsRailwayWorker(e.target.checked)}
                    />
                    <label
                      htmlFor="isRailwayWorker"
                      style={{ marginBottom: 0 }}
                    >
                      Temir yo'l ishchisi
                    </label>
                  </div>

                  {isRailwayWorker && (
                    <div>
                      <label htmlFor="pinfl">PINFL</label>
                      <input
                        id="pinfl"
                        name="pinfl"
                        type="text"
                        required
                        maxLength={14}
                        minLength={14}
                      />
                    </div>
                  )}
                  <div>
                    <label htmlFor="login">Login</label>
                    <input id="login" type="text" name="username" required />
                  </div>
                  <div>
                    <label htmlFor="phone">Telefon raqam</label>
                    <input
                      id="phone"
                      type="phone"
                      name="phone_number"
                      placeholder="991234567"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="m@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="password">Parol</label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="password">Parolni tasdiqlang</label>
                    <input
                      id="password"
                      name="confirm"
                      type="password"
                      required
                    />
                  </div>
                  <div className="styled-select">
                    <label htmlFor="referal">
                      Biz haqimizda qayerdan eshitgansiz
                    </label>
                    <select name="referral">
                      <option value="1">Facebook</option>
                      <option value="2">Instagram orqali</option>
                      <option value="3">Twitter</option>
                      <option value="4">Youtube</option>
                      <option value="5">Telegram</option>
                      <option value="6">Boshqa</option>
                    </select>
                  </div>
                  <button type="submit">{"Ro'yxatdan o'tish"}</button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AuthModal;
