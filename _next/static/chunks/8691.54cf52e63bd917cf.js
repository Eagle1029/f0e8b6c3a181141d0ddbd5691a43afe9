"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8691], {
        18691: function(e, o, t) {
            t.r(o);
            var a = t(85893),
                s = t(67294),
                i = t(83253),
                l = t.n(i),
                r = t(94184),
                n = t.n(r),
                u = t(83480),
                d = t(69316),
                h = t(27982),
                c = t(88208),
                m = t(71667),
                p = t.n(m),
                y = t(2664),
                w = t(19870);
            let f = [{
                label: "What is BloxFlip?",
                values: ["BloxFlip is the #1 social casino for wagering ROBUX! Deposit fiat, crypto, ROBUX, and limiteds to receive a balance on the site to start playing! Cashout your ROBUX into your account or choose from our large selection of Limiteds to cash out to as well."]
            }, {
                label: "Why do you need my password/cookie?",
                values: ["This is needed so that you can deposit ROBUX from your account with your onsite balance. We don’t hold your ROBUX when you deposit it, but rather we utilize a p2p system for our withdraws which would not be possible without access to your account. It also makes it more convenient and faster to receive your ROBUX and Limiteds from withdraws. We use state-of-the-art encryption and security measures to store your cookie and we do not have access to your password. With millions of ROBUX processed through our website every day, rest assured that you will not need to worry."]
            }, {
                label: "How do I deposit ROBUX to play?",
                values: ["Click on the top right and press the plus button, you will have different options for depositing on the website."]
            }, {
                label: "How do I know that the games are fair?",
                values: ["At BloxFlip, we utilize probability fair for all our game modes so it’s mathematically proven that all our games are fair. We utilize the EOS blockchain to make sure random numbers are generated for each. We have a flat 5% house edge on all our game modes."]
            }, {
                label: "Help! There is an issue with the site and I’m not sure what to do!",
                values: ["Contact our support team by clicking the intercom button on the bottom right of the page. You’ll have a support agent that should guide you through solving whatever problem you’re experiencing. Alternatively, you can join our Discord and ask for help there."]
            }, {
                label: "How do I tip?",
                values: ["Use the command “.tip (username) (amount)” in the chat without quotes to send a tip to another user. This sends ROBUX to their account. Please note, if you have more than three accounts you will be prohibited from tipping!"]
            }, {
                label: "How do I rain?",
                values: ["Use the command “.rain (amount)” in the chat without quotes to rain your ROBUX to other users!"]
            }, {
                label: "Is this legal?",
                values: ["Bloxflip is a completely legal social casino and is registered under the company entity “Based Plate Studios LLC”. For more information, view our terms of service."]
            }, {
                label: "I have a business or legal inquiry",
                values: ["support@bloxflip.com"]
            }];
            l().setAppElement("#__next"), o.default = (0, y.$j)(e => ({
                showFaq: e.auth.showFaq
            }))(function(e) {
                let {
                    className: o,
                    showFaq: t
                } = e, [i, r] = (0, s.useState)(!1), m = (0, y.I0)(), b = s.useMemo(() => (0, c.P)("margin"), ["margin"]);

                function closeModal() {
                    m({
                        type: w.we
                    }), r(!1), document.body.style.overflow = "initial", document.body.style.paddingRight = "0px"
                }
                return (0, s.useEffect)(() => {
                    t ? (r(!0), setTimeout(() => {
                        document.body.style.overflow = "hidden", document.body.style.paddingRight = b.gap + "px"
                    }, 0)) : !1 === t && closeModal()
                }, [t]), (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsxs)(l(), {
                        isOpen: i,
                        onRequestClose: closeModal,
                        contentLabel: "Withdraw modal",
                        className: n()(p().defaultModal, p().modalWithdraw, o),
                        closeTimeoutMS: 200,
                        children: [(0, a.jsx)(h.Z, {
                            element: "h2",
                            className: p().modalDepositTitle,
                            children: "FAQ"
                        }), f.map((e, o) => {
                            let {
                                label: t,
                                values: s
                            } = e;
                            return (0, a.jsxs)(d.Z, {
                                className: p().modalWithdrawText,
                                element: "p",
                                textType: "regular14",
                                style: {
                                    margin: "2em 0"
                                },
                                children: [(0, a.jsxs)("b", {
                                    children: [o + 1, " - ", t]
                                }), ".", (0, a.jsx)("div", {
                                    style: {
                                        width: "100%"
                                    },
                                    children: s.map((e, o) => (0, a.jsx)("p", {
                                        style: {
                                            margin: ".7em 0"
                                        },
                                        children: e
                                    }, o))
                                })]
                            }, o)
                        }), (0, a.jsx)(u.Z, {
                            style: {
                                width: "100%",
                                marginTop: "0em"
                            },
                            variant: "primary",
                            onClick: closeModal,
                            className: p().modalWithdrawButton,
                            children: "Close"
                        }), (0, a.jsx)(u.Z, {
                            onClick: closeModal,
                            className: p().defaultModalClose,
                            "aria-label": "Close"
                        })]
                    })
                })
            })
        }
    }
]);