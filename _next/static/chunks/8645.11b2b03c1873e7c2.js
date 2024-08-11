"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8645], {
        58645: function(e, t, a) {
            a.r(t);
            var o = a(85893),
                n = a(83253),
                r = a.n(n),
                s = a(94184),
                l = a.n(s),
                i = a(67294),
                c = a(2664),
                d = a(86664),
                u = a(54465),
                p = a(86501),
                m = a(24762),
                h = a(19870),
                y = a(40975),
                f = a(64709),
                g = a(88208),
                x = a(34558),
                w = a(71667),
                b = a.n(w),
                v = a(69316),
                C = a(27982),
                S = a(97787),
                j = a(83480),
                P = a(66713);
            r().setAppElement("#__next");
            let calcFee = function(e) {
                    let t = "number" == typeof e ? e : parseFloat(e),
                        a = (t + .3) / (1 - 2.9 / 100);
                    return {
                        amount: t,
                        fee: (a - t).toFixed(2),
                        total: a.toFixed(2)
                    }
                },
                Z = {
                    style: {
                        base: {
                            backgroundColor: "#282e54",
                            lineHeight: "2em",
                            borderRadius: "25px",
                            color: "#ffffff",
                            fontSize: "20px",
                            fontFamily: "Titillium Web, Roboto, Open Sans, Segoe UI, sans-serif"
                        },
                        invalid: {
                            color: "#fa755a",
                            fontSize: "20px"
                        }
                    }
                },
                decodeHash = e => e.replace(/[a-zA-Z]/g, function(e) {
                    return String.fromCharCode((e <= "Z" ? 90 : 122) >= (e = e.charCodeAt(0) + 13) ? e : e - 26)
                }),
                CheckoutForm = e => {
                    let {
                        rbxAmount: t,
                        fee: a,
                        rate: n,
                        setLoading: r,
                        setBtnDisabled: s,
                        btnDisabled: l,
                        stripePromise: u,
                        btnText: y,
                        sponsorCode: f,
                        pmMethod: g,
                        setPmMethod: w
                    } = e, v = (0, d.useStripe)(), C = (0, d.useElements)(), S = (0, c.I0)(), handleAttempt = () => {
                        (0, x.FO)("Stripe").then(console.log).catch(console.error)
                    };
                    (0, i.useEffect)(() => {
                        null != g && "" != g && handleSubmit(null, g)
                    }, [g]);
                    let handleSubmit = async (e, a) => {
                        var o, n, r;
                        if (null != e && e.preventDefault(), u) {
                            if (s(!0), (o = a && "" != a ? {
                                    paymentMethod: {
                                        id: a
                                    }
                                } : await v.createPaymentMethod({
                                    type: "card",
                                    card: C.getElement(d.CardElement)
                                })).error) s(!1), console.debug(o.error.message);
                            else {
                                let e = await window.grecaptcha.enterprise.execute("6Lf3jaQpAAAAAMC8nWH5T7XlLvKxMZQva59PfzwP", {
                                    action: "PURCHASE"
                                });
                                try {
                                    let a = await (0, x.Z5)(t / 2, o.paymentMethod.id, f, window.ga4ClientId, e);
                                    if (console.debug(a), a.success) {
                                        s(!1);
                                        try {
                                            C.getElement(d.CardElement).clear()
                                        } catch (e) {}
                                        w(null), p.ZP.success("Thank you very much for the payment! The robux have been credited to your account!")
                                    } else if (a.requires_action) {
                                        let e = await v.handleCardAction(a.payment_intent_client_secret),
                                            o = await window.grecaptcha.enterprise.execute("6Lf3jaQpAAAAAMC8nWH5T7XlLvKxMZQva59PfzwP", {
                                                action: "PURCHASE"
                                            });
                                        try {
                                            let a = await (0, x.KX)(t / 2, e.paymentIntent.id, f, window.ga4ClientId, o);
                                            console.debug(a);
                                            try {
                                                C.getElement(d.CardElement).clear()
                                            } catch (e) {}
                                            if (w(null), a.success) {
                                                try {
                                                    let o = parseFloat(a.amount);
                                                    o && o > 0 && window.ttq && (window.ttq.track("CompletePayment", {
                                                        value: null != o ? o : 0,
                                                        currency: "USD",
                                                        content_name: "Robux",
                                                        content_type: "product",
                                                        content_id: null !== (r = null === (n = e.paymentIntent) || void 0 === n ? void 0 : n.id) && void 0 !== r ? r : "L".concat(Date.now()),
                                                        quantity: 1
                                                    }), window._tfa.push({
                                                        notify: "event",
                                                        name: "CompletePayment",
                                                        id: t
                                                    }), window.uetq.push("event", "CompletePayment", {
                                                        event_category: "",
                                                        event_label: "",
                                                        event_value: t
                                                    }))
                                                } catch (e) {
                                                    console.log(e)
                                                }
                                                s(!1), p.ZP.success("Thank you very much for the payment! The robux have been credited to your account!")
                                            } else s(!1), p.ZP.error("An unknown error occurred while trying to charge your card!")
                                        } catch (e) {
                                            s(!1), w(null);
                                            try {
                                                C.getElement(d.CardElement).clear()
                                            } catch (e) {}
                                            e.response && 400 === e.response.status ? p.ZP.error(e.response.data.error) : p.ZP.error("There was an error while depositing with your card. Please try again!!")
                                        }
                                    }
                                } catch (e) {
                                    w(null);
                                    try {
                                        C.getElement(d.CardElement).clear()
                                    } catch (e) {}
                                    s(!1), console.log("There was an error while fetching card deposit information:", e), e.response && 400 === e.response.status ? p.ZP.error(e.response.data.error) : p.ZP.error("There was an error while processing the payment. Please try again!")
                                }
                            }
                        }
                    };
                    return (0, o.jsxs)("form", {
                        children: [(0, o.jsx)("div", {
                            style: {
                                borderRadius: "8px",
                                textAlign: "center",
                                backgroundColor: "#282e54"
                            },
                            children: (0, o.jsx)("div", {
                                style: {
                                    width: "98%",
                                    margin: "auto"
                                },
                                children: g && "" != g ? (0, o.jsx)("p", {
                                    children: "Please wait, we're processing your payment..."
                                }) : (0, o.jsx)(o.Fragment, {
                                    children: u && (0, o.jsx)(d.CardElement, {
                                        options: Z,
                                        onFocus: () => handleAttempt()
                                    })
                                })
                            })
                        }), (0, o.jsx)(m.Z, {
                            place: "right",
                            effect: "solid",
                            textColor: "#fff",
                            className: "custom-tooltip",
                            multiline: !0,
                            backgroundColor: "#282e54"
                        }), (0, o.jsxs)("div", {
                            style: {
                                textAlign: "center"
                            },
                            children: [(0, o.jsx)(j.Z, {
                                style: {
                                    marginBottom: "2rem"
                                },
                                variant: "secondary",
                                className: b().modalDepositButton,
                                onClick: e => {
                                    e.preventDefault(), S({
                                        type: h.xf
                                    }), S({
                                        type: h.jT
                                    })
                                },
                                children: "Redeem Discount"
                            }), (0, o.jsx)(j.Z, {
                                "data-tip": "\n                            R$ Rate: $".concat(+(n / 2).toFixed(2), " per 1,000\n                            <br/>\n                            Fee: $0.3 + 2.9% of the amount\n                            <br />\n                            Calculated fee: $").concat(a, "\n                        "),
                                style: {
                                    marginBottom: "2rem",
                                    marginLeft: "1rem"
                                },
                                onClick: handleSubmit,
                                variant: "primary",
                                disabled: l,
                                className: b().modalDepositButton,
                                children: y
                            })]
                        })]
                    })
                };
            t.default = (0, c.$j)(e => ({
                showCardsModal: e.auth.showCardsModal,
                fflags: e.auth.fflags
            }))(function(e) {
                var t;
                let {
                    className: a,
                    showCardsModal: n,
                    fflags: s
                } = e, [m, w] = (0, i.useState)(!1), [Z, _] = (0, i.useState)(""), [A, M] = (0, i.useState)(!1), [E, T] = (0, i.useState)(!1), [F, k] = (0, i.useState)(void 0), [R, D] = (0, i.useState)(4.25), [B, I] = (0, i.useState)(0), [N, L] = (0, i.useState)(""), [$, U] = (0, i.useState)(3e3), [q, W] = (0, i.useState)(!1), z = (0, i.useRef)(null), O = (0, i.useRef)(null), [H, K] = (0, i.useState)("https://secure.bloxbill.com/integration/bloxflip?hideCard=true"), [Q, X] = (0, i.useState)({
                    width: "100%",
                    height: "50px"
                });
                (0, i.useEffect)(() => {
                    let eventListener = e => {
                        if (console.log("received message", e.data), "bloxbill_process_alternative" === e.data.event_id) {
                            var t = e.data.pm;
                            G(1), ef(t), console.log("processing")
                        }
                        if ("bloxbill_show_3ds" === e.data.event_id) {
                            ep(!0), eh({
                                width: -1 == e.data.width ? "100%" : e.data.width + "px",
                                height: -1 == e.data.height ? "100%" : e.data.height + "px"
                            });
                            var a = e.data.acsUrl,
                                o = e.data.creq;
                            let t = document.getElementById("challengeForm");
                            t.elements.creq.value = o, t.action = a, t.submit()
                        }
                        if ("bloxbill_hide_3ds" === e.data.event_id && ep(!1), "bloxbill_failure" === e.data.event_id && W(!1), "bloxbill_finalize_payment" === e.data.event_id) {
                            let postData = async () => {
                                try {
                                    let t = await (0, x._L)(e.data.transactionId);
                                    t && t.success ? (p.ZP.success("Thank you very much for the payment! The robux have been credited to your account! This payment was processed by BloxBill, a trusted and certified payment processor brought to you by Bloxflip!"), K(H + "&t=" + Date.now()), W(!1)) : t.msg && p.ZP.error(t.msg)
                                } catch (e) {
                                    W(!1), console.log("There was an error while processing payment"), e.response && 400 === e.response.status ? p.ZP.error(e.response.data.error) : p.ZP.error("There was an error while processing the payment. Please try again!!")
                                }
                            };
                            postData()
                        }
                    };
                    return window.addEventListener("message", eventListener), () => {
                        window.removeEventListener("message", eventListener)
                    }
                }, []);
                let finalizeApplePay = async (e, t) => {
                    W(!1), console.log("got token passed", e);
                    try {
                        let t = await (0, x.vu)(e, calcFee(Math.round($ / 2 / 1e3 * R * 100) / 100).total);
                        if (t.success) {
                            W(!1), p.ZP.success("Thank you very much for using BloxBill, your Apple Pay deposit has been processed");
                            try {
                                let e = {
                                    status: window.ApplePaySession.STATUS_SUCCESS
                                };
                                O.current.contentWindow.pspSession.completePayment(e)
                            } catch (e) {
                                console.error(e)
                            }
                        } else {
                            let e = {
                                status: window.ApplePaySession.STATUS_FAILURE
                            };
                            O.current.contentWindow.pspSession.completePayment(e)
                        }
                    } catch (t) {
                        W(!1);
                        let e = {
                            status: window.ApplePaySession.STATUS_FAILURE
                        };
                        O.current.contentWindow.pspSession.completePayment(e), t.response && 400 === t.response.status && p.ZP.error(t.response.data.error, {
                            duration: 1e4
                        })
                    }
                }, [J] = (0, i.useState)([2e4, 15e3, 1e4, 8e3, 6e3]), [V, G] = (0, i.useState)(0), [Y, ee] = (0, i.useState)(null), [et, ea] = (0, i.useState)(null), [eo, en] = (0, i.useState)(!1), [er, es] = (0, i.useState)(!0), [el, ei] = (0, i.useState)(!1), ec = (0, i.useRef)(null), ed = (0, c.v9)(e => e.auth.user), [eu, ep] = (0, i.useState)(!1), [em, eh] = (0, i.useState)({
                    width: "250px",
                    height: "400px"
                }), [ey, ef] = (0, i.useState)(null), eg = (0, c.I0)(), ex = i.useMemo(() => (0, g.P)("margin"), ["margin"]);

                function closeModal() {
                    eg({
                        type: h.Fv
                    }), eg({
                        type: h.Mr
                    }), w(!1), ei(!1), es(!0), document.body.style.overflow = "initial", document.body.style.paddingRight = "0px"
                }(0, i.useEffect)(() => {
                    s.enable_applepay2 && m && window.ApplePaySession && (window.ApplePaySession.canMakePaymentsWithActiveCard(s.applepay_merchant) ? (console.log("i can make payments!!"), es(!0), ei(!0)) : window.ApplePaySession.canMakePayments() && (console.log("have to allow"), es(!0), ei(!0)))
                }, [m]), (0, i.useEffect)(() => {
                    let onWindowMessage = async e => {
                        if (m && "bloxbill_applepay_payment_complete" === e.data.event_id) {
                            console.log("got data", e.data.data);
                            let t = e.data.data.token;
                            finalizeApplePay(JSON.parse(t), $)
                        }
                    };
                    return m && (console.log(s), window.addEventListener("message", onWindowMessage)), () => {
                        window.removeEventListener("message", onWindowMessage)
                    }
                }, [m, $]), (0, i.useEffect)(() => {
                    window.applePayRequest = {
                        countryCode: "DE",
                        currencyCode: "USD",
                        merchantCapabilities: ["supports3DS"],
                        supportedNetworks: ["visa", "masterCard", "amex", "discover"],
                        total: {
                            label: (0, y.Z)((0, f.Z)($) + " R$"),
                            type: "final",
                            amount: calcFee(Math.round($ / 2 / 1e3 * R * 100) / 100).total
                        }
                    }, window.applePayRbx = $
                }, [B, $, R]);
                let getPriceEeachchange = async () => {
                    try {
                        if (2 === V) {
                            let e = document.URL.replace("localhost", "127.0.0.1"),
                                t = await (0, x.st)(null, $ / 2, e);
                            t && "rate" in t && ea(t.rate)
                        }
                    } catch (e) {
                        console.log(e)
                    }
                };
                (0, i.useEffect)(() => {
                    m && 2 === V && getPriceEeachchange()
                }, [m, V, E]);
                let handleCheckoutClick = async () => {
                    if (2 === V) try {
                        en(!0);
                        let t = document.URL.replace("localhost", "127.0.0.1"),
                            a = await (0, x.tb)(encodeURIComponent(t), $ / 2);
                        if (en(!1), a) {
                            var e;
                            let t = null !== (e = null == a ? void 0 : a.url) && void 0 !== e ? e : null;
                            t && ((0, x.FO)("CoastalPay").then(console.log).catch(console.error), window.location.href = t)
                        }
                    } catch (e) {
                        en(!1), p.ZP.error(String(e)), console.log(e)
                    }
                };
                return ((0, i.useEffect)(() => {
                    n ? (w(!0), W(!1), setTimeout(() => {
                        document.body.style.overflow = "hidden", document.body.style.paddingRight = ex.gap + "px"
                    }, 0)) : !1 === n && closeModal();
                    let fetchData = async () => {
                        try {
                            let e = await (0, x.VD)();
                            e && e.success && (null == e ? void 0 : e.preferred_method) && (null == e ? void 0 : e.available_methods) && ("CoastalPay" === e.preferred_method ? G(2) : "BloxBill" === e.preferred_method ? G(3) : G(1))
                        } catch (e) {
                            console.log(e)
                        }
                        try {
                            let e = await (0, x.jS)();
                            if (e.success) {
                                let t = e.pKey;
                                t = decodeHash(e.pKey.substring(8)), t = e.pKey.substring(0, 8) + t, k((0, u.J)(t)), D(e.rate);
                                let a = calcFee(Math.round($ / 2 / 1e3 * e.rate * 100) / 100);
                                I(a.fee), L("Buy for $" + a.total)
                            } else p.ZP.error(e.msg), eg({
                                type: h.Fv
                            })
                        } catch (e) {
                            console.log("There was an error while fetching card deposit information:"), e.response && 400 === e.response.status ? p.ZP.error(e.response.data.error) : p.ZP.error("There was an error while generating the Coinbase deposit. Please try again!!"), eg({
                                type: h.Fv
                            })
                        }
                    };
                    n && fetchData()
                }, [n]), F) ? (0, o.jsx)(d.Elements, {
                    stripe: F,
                    children: (0, o.jsxs)(r(), {
                        isOpen: m,
                        onRequestClose: closeModal,
                        contentLabel: "Replenishment modal",
                        className: l()(b().defaultModal, b().modalDeposit, b().giftcardModal, a),
                        closeTimeoutMS: 200,
                        children: [(0, o.jsxs)("div", {
                            id: "displayBox",
                            style: {
                                position: "absolute",
                                top: "0",
                                left: "0",
                                width: "100%",
                                height: "100%",
                                display: eu ? "flex" : "none",
                                alignItems: "center",
                                justifyContent: "center",
                                zIndex: 999999999999,
                                backdropFilter: "blur(5px)"
                            },
                            children: [(0, o.jsx)("iframe", {
                                style: {
                                    width: "".concat(em.width),
                                    height: "".concat(em.height),
                                    zIndex: 999999999999,
                                    border: "none",
                                    borderRadius: "8px"
                                },
                                name: "challengeIframe",
                                title: "Challenge iframe"
                            }), (0, o.jsxs)("form", {
                                id: "challengeForm",
                                target: "challengeIframe",
                                method: "post",
                                children: [(0, o.jsx)("input", {
                                    type: "hidden",
                                    name: "creq",
                                    id: "creq"
                                }), (0, o.jsx)("input", {
                                    type: "hidden",
                                    name: "threeDSSessionData",
                                    id: "threeDSSessionData"
                                })]
                            })]
                        }), (0, o.jsxs)("div", {
                            className: b().defaultModalBreadcrumbs,
                            children: [(0, o.jsx)(j.Z, {
                                className: b().defaultModalBreadcrumbsItem,
                                children: (0, o.jsx)(v.Z, {
                                    onClick: closeModal,
                                    element: "span",
                                    textType: "labelsRegular",
                                    children: "Deposit"
                                })
                            }), (0, o.jsx)(j.Z, {
                                className: b().defaultModalBreadcrumbsItem,
                                children: (0, o.jsx)(v.Z, {
                                    element: "span",
                                    textType: "labelsRegular",
                                    children: "Secure Card Deposit"
                                })
                            })]
                        }), (0, o.jsx)(C.Z, {
                            style: {
                                margin: "1em 0"
                            },
                            element: "h2",
                            className: b().modalDepositTitle,
                            children: "Secure Card Deposit"
                        }), (0, o.jsx)("div", {
                            className: b().modalDepositOptions,
                            children: (0, o.jsxs)(v.Z, {
                                element: "p",
                                textType: "regular16",
                                className: b().modalDepositOptionsLabel,
                                children: ["Card payments are processed through a ", (0, o.jsx)("u", {
                                    children: "secure"
                                }), " third-party processor. Bloxflip does not store or process your card details."]
                            })
                        }), (0, o.jsxs)("div", {
                            className: b().modalDepositOptionsList,
                            children: [(0, o.jsxs)(j.Z, {
                                style: {
                                    marginTop: "1.5em"
                                },
                                variant: "tab",
                                onClick: () => {
                                    var e;
                                    return null === (e = z.current) || void 0 === e ? void 0 : e.focus()
                                },
                                isActive: !J.includes($),
                                children: ["Custom ", (0, o.jsx)(P.Z, {})]
                            }), J.map((e, t) => (0, o.jsxs)(j.Z, {
                                onClick: () => {
                                    U(e);
                                    let t = calcFee(Math.round(e / 2 / 1e3 * R * 100) / 100);
                                    I(t.fee), L("Buy for $" + t.total)
                                },
                                style: {
                                    marginTop: "1.5em"
                                },
                                variant: "tab",
                                isActive: $ === e,
                                children: [(0, y.Z)((0, f.Z)(e)), " ", (0, o.jsx)(P.Z, {})]
                            }, t))]
                        }), (0, o.jsxs)("div", {
                            className: l()("customInput", b().modalDepositInput),
                            style: {
                                marginBottom: 2 !== V ? "5em" : "2.5em"
                            },
                            children: [(0, o.jsx)(v.Z, {
                                element: "p",
                                textType: "labelsRegular",
                                className: l()("customInputLabel"),
                                ref: z,
                                children: "Robux amount"
                            }), (0, o.jsxs)("div", {
                                className: l()("customInputInner"),
                                children: [(0, o.jsx)(S.Z, {
                                    type: "number",
                                    max: 5e4,
                                    min: 100,
                                    step: 100,
                                    placeholder: "Enter the amount of Robux you want to buy",
                                    value: $,
                                    onBlur: e => {
                                        if (e.target.value > 1e5) {
                                            U(1e5);
                                            let e = calcFee(Math.round(50 * R * 100) / 100);
                                            I(e.fee), L("Buy for $" + e.total), L("Buy for $" + calcFee(Math.round(50 * R * 100) / 100).total);
                                            return
                                        }
                                        if (e.target.value < 100) {
                                            U(100);
                                            let e = calcFee(Math.round(.05 * R * 100) / 100);
                                            I(e.fee), L("Buy for $" + e.total);
                                            return
                                        }
                                        U(100 * Math.round(e.target.value / 100))
                                    },
                                    onChange: e => {
                                        U(e.target.value);
                                        let t = calcFee(Math.round(e.target.value / 2 / 1e3 * R * 100) / 100);
                                        I(t.fee), L("Buy for $" + t.total)
                                    }
                                }), (0, o.jsx)(v.Z, {
                                    element: "p",
                                    textType: "regular14",
                                    className: b().modalDepositInputAmount,
                                    children: (0, o.jsx)(P.Z, {})
                                })]
                            }), (0, o.jsxs)(v.Z, {
                                element: "p",
                                textType: "labelsRegular",
                                className: l()("customInputLabel"),
                                children: ["Enjoy the cheapest rates,", " ", (0, o.jsx)("b", {
                                    children: (0, y.Z)((0, f.Z)(.75 * $))
                                }), " ", "of those Robux need to be wagered before withdrawal. The rest can be withdrawn immediately."]
                            }), el && (0, o.jsxs)("div", {
                                style: {
                                    textAlign: "center"
                                },
                                children: [(0, o.jsx)("iframe", {
                                    ref: O,
                                    frameBorder: "0",
                                    scrolling: "no",
                                    id: "fc-iframe-wrap",
                                    className: "fc-iframe-wrap",
                                    referrerPolicy: "no-referrer",
                                    "aria-label": " ",
                                    style: {
                                        width: "200px",
                                        height: "50px",
                                        overflow: "hidden"
                                    },
                                    src: "/apple-pay.html"
                                }), er && (0, o.jsx)("div", {
                                    className: "separator",
                                    children: "Alternatively"
                                })]
                            })]
                        }), 1 === V && er && F && (0, o.jsx)(CheckoutForm, {
                            fee: B,
                            rate: R,
                            sponsorCode: "",
                            stripePromise: F,
                            btnText: N,
                            setBtnDisabled: W,
                            rbxAmount: $,
                            btnDisabled: q,
                            pmMethod: ey,
                            setPmMethod: ef
                        }), 3 === V && er && (0, o.jsxs)("div", {
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center"
                            },
                            children: [(0, o.jsx)("iframe", {
                                src: H,
                                ref: ec,
                                style: {
                                    width: "100%",
                                    border: "none",
                                    height: "70px",
                                    display: "block",
                                    margin: "0 auto"
                                }
                            }), (0, o.jsx)(j.Z, {
                                "data-tip": "\n                            R$ Rate: $".concat(+(R / 2).toFixed(2), " per 1,000\n                            <br/>\n                            Fee: $0.3 + 2.9% of the amount\n                            <br />\n                            Calculated fee: $").concat(B, "\n                        "),
                                style: {},
                                onClick: () => {
                                    W(!0), ec.current.contentWindow.postMessage({
                                        event_id: "bloxbill_process_payment",
                                        data: {
                                            usdAmount: calcFee(Math.round($ / 2 / 1e3 * R * 100) / 100).total,
                                            merchantRef: ed.robloxId
                                        }
                                    }, "*")
                                },
                                variant: "primary",
                                disabled: q,
                                className: b().modalDepositButton,
                                children: N
                            })]
                        }), 2 === V && (0, o.jsxs)(j.Z, {
                            style: {
                                margin: "0 auto",
                                width: "max-content"
                            },
                            variant: "primary",
                            onClick: () => handleCheckoutClick(),
                            disabled: eo,
                            children: ["Buy for $", "number" == typeof et ? Math.max(0, parseFloat(null !== (t = calcFee(Math.round($ / 2 / 1e3 * et * 100) / 100).total) && void 0 !== t ? t : 0)).toFixed(2) : "--"]
                        }), (0, o.jsx)(j.Z, {
                            onClick: closeModal,
                            className: b().defaultModalClose,
                            "aria-label": "Close"
                        })]
                    })
                }) : (0, o.jsx)(o.Fragment, {})
            })
        }
    }
]);