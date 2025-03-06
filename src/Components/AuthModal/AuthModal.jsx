import { useEffect, useState } from "react";
import "./AuthModal.scss";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useHttp } from "../../hooks/useHttp";
import LoadingSpinner from "../Loaders/LoadingSpinner";

const user = JSON.parse(localStorage.getItem("user"));

function AuthModal() {
  const [searchParams, setSearchParams] = useSearchParams();

  const isAuthOpen = searchParams.get("auth");

  const [, setUsername] = useState(user?.username);

  const [isRailwayWorker, setIsRailwayWorker] = useState(false);

  const [pinfl, setPinfl] = useState();

  const [fio, setFio] = useState("");

  const [activeTab, setActiveTab] = useState("signin");

  const sendRequest = useHttp();

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

  const pinflMutation = useMutation({
    mutationFn: getFio,
    onSuccess: (data) => {
      if (data?.worker?.first_name) {
        setFio(`${data?.worker?.last_name} ${data?.worker?.first_name}`);
      }
    },
  });

  const { data: allInstitutions } = useQuery({
    queryKey: ["institutions"],
    queryFn: () =>
      sendRequest({
        url: `/reception/all/organization/`,
      }),
    staleTime: 1000,
    refetchOnWindowFocus: false,
    retry: false,
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

  const handlePinflClick = () => {
    pinflMutation.mutate({
      pinfl,
    });
  };

  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      username: formData.get("username"),
      email: formData.get("email"),
      password: formData.get("password"),
      profile: {
        fio: formData.get("fio"),
        phone_number: formData.get("phone_number"),
        is_railway_worker: isRailwayWorker,
        pinfl: formData.get("pinfl"),
      },
    };

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

  async function getFio({ pinfl }) {
    const response = await axios.get(
      `https://back.nsu-railway.uz/account/register/?pinfl=${pinfl}`
    );
    return response.data;
  }

  console.log(fio);

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
                      <div className="d-flex gap-2">
                        <input
                          id="pinfl"
                          name="pinfl"
                          type="text"
                          onChange={(e) => setPinfl(e.target.value)}
                          value={pinfl}
                          required
                          maxLength={14}
                          minLength={14}
                        />
                        <button
                          onClick={handlePinflClick}
                          style={{ width: "120px" }}
                          type="button"
                          className="btn btn-primary d-block"
                        >
                          {pinflMutation?.isPending ? (
                            <LoadingSpinner
                              isMini
                              style={{ marginBottom: 0 }}
                            />
                          ) : (
                            "FIO olish"
                          )}
                        </button>
                      </div>
                    </div>
                  )}

                  <div>
                    <label htmlFor="fio">FIO</label>
                    <input
                      value={fio}
                      onChange={(e) => setFio(e.target.value)}
                      autoComplete="off"
                      id="fio"
                      type="text"
                      name="fio"
                      required
                    />
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
                  <div className="styled-select">
                    <label htmlFor="institution">
                      Davolash muassasasini tanlang
                    </label>
                    <select name="organization">
                      {allInstitutions?.map((ins) => {
                        return (
                          <option key={ins?.id} value={ins?.id}>
                            {ins.title}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="login">Login</label>
                    <input id="login" type="text" name="username" required />
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
