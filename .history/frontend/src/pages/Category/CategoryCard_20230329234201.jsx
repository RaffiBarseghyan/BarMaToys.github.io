import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import CardComponentChange from "./components/cardComponent";
import CardComponent from "./components/cardComponent";

function CategoryCard({
  person,
  colorBlacl,
  colorWhite,
  colorGolden,
  colorRed,
  colorPink,
  colorBlue,
  colorGreen,
  colorGray,
  colorSilver,
  colorYellow,
  colorViolet,
  colorCoral,
  colorBrown,
  materialTree,
  materialPaper,
  materialCloth,
  materialPlastic,
  Goal1,
  Goal2,
  Goal3,
  Goal4,
  Goal5,
  Goal6,
  Goal7,
  priceMin,
  priceMax,
}) {
  if (
    colorBlacl != "" ||
    colorWhite != "" ||
    colorGolden != "" ||
    colorRed != "" ||
    colorPink != "" ||
    colorBlue != "" ||
    colorGreen != "" ||
    colorGray != "" ||
    colorSilver != "" ||
    colorYellow != "" ||
    colorViolet != "" ||
    colorCoral != "" ||
    colorBrown != ""
  ) {
    if (
      colorBlacl != person.color &&
      colorWhite != person.color &&
      colorGolden != person.color &&
      colorRed != person.color &&
      colorPink != person.color &&
      colorBlue != person.color &&
      colorGreen != person.color &&
      colorGray != person.color &&
      colorSilver != person.color &&
      colorYellow != person.color &&
      colorViolet != person.color &&
      colorCoral != person.color &&
      colorBrown != person.color
    ) {
      return <></>;
    } else {
      if (
        materialTree != "" ||
        materialPaper != "" ||
        materialCloth != "" ||
        materialPlastic != ""
      ) {
        if (
          materialTree != person.item &&
          materialPaper != person.item &&
          materialCloth != person.item &&
          materialPlastic != person.item
        ) {
          return <></>;
        } else {
          if (priceMin != "") {
            if (person.price < priceMin) {
              return <></>;
            } else {
              if (person.price > priceMax) {
                return <></>;
              } else {
                if (
                  Goal1 != "" ||
                  Goal2 != "" ||
                  Goal3 != "" ||
                  Goal4 != "" ||
                  Goal5 != "" ||
                  Goal6 != "" ||
                  Goal7 != ""
                ) {
                  if (Goal1 == true && person.goal1 != "false") {
                    <CardComponent person={person} />;
                  } else {
                    if (Goal2 == true && person.goal2 != "false") {
                      <CardComponent person={person} />;
                    } else {
                      if (Goal3 == true && person.goal3 != "false") {
                        <CardComponent person={person} />;
                      } else {
                        if (Goal4 == true && person.goal4 != "false") {
                          <CardComponent person={person} />;
                        } else {
                          if (Goal5 == true && person.goal5 != "false") {
                            <CardComponent person={person} />;
                          } else {
                            if (Goal6 == true && person.goal6 != "false") {
                              <CardComponent person={person} />;
                            } else {
                              if (Goal7 == true && person.goal7 != "false") {
                                <CardComponent person={person} />;
                              } else {
                                return <></>;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                } else {
                  if (
                    Goal1 != "" ||
                    Goal2 != "" ||
                    Goal3 != "" ||
                    Goal4 != "" ||
                    Goal5 != "" ||
                    Goal6 != "" ||
                    Goal7 != ""
                  ) {
                    if (Goal1 == true && person.goal1 != "false") {
                      <CardComponent person={person} />;
                    } else {
                      if (Goal2 == true && person.goal2 != "false") {
                        <CardComponent person={person} />;
                      } else {
                        if (Goal3 == true && person.goal3 != "false") {
                          <CardComponent person={person} />;
                        } else {
                          if (Goal4 == true && person.goal4 != "false") {
                            <CardComponent person={person} />;
                          } else {
                            if (Goal5 == true && person.goal5 != "false") {
                              <CardComponent person={person} />;
                            } else {
                              if (Goal6 == true && person.goal6 != "false") {
                                <CardComponent person={person} />;
                              } else {
                                if (Goal7 == true && person.goal7 != "false") {
                                  <CardComponent person={person} />;
                                } else {
                                  return <></>;
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  } else {
                    <CardComponent person={person} />;
                  }
                }
              }
            }
          } else {
            if (
              Goal1 != "" ||
              Goal2 != "" ||
              Goal3 != "" ||
              Goal4 != "" ||
              Goal5 != "" ||
              Goal6 != "" ||
              Goal7 != ""
            ) {
              if (Goal1 == true && person.goal1 != "false") {
                <CardComponent person={person} />;
              } else {
                if (Goal2 == true && person.goal2 != "false") {
                  <CardComponent person={person} />;
                } else {
                  if (Goal3 == true && person.goal3 != "false") {
                    <CardComponent person={person} />;
                  } else {
                    if (Goal4 == true && person.goal4 != "false") {
                      <CardComponent person={person} />;
                    } else {
                      if (Goal5 == true && person.goal5 != "false") {
                        <CardComponent person={person} />;
                      } else {
                        if (Goal6 == true && person.goal6 != "false") {
                          <CardComponent person={person} />;
                        } else {
                          if (Goal7 == true && person.goal7 != "false") {
                            <CardComponent person={person} />;
                          } else {
                            return <></>;
                          }
                        }
                      }
                    }
                  }
                }
              }
            } else {
              <CardComponent person={person} />;
            }
          }
        }
      } else {
        if (priceMin != "") {
          if (person.price < priceMin) {
            return <></>;
          } else {
            if (priceMax != "") {
              if (person.price > priceMax) {
                return <></>;
              } else {
                if (
                  Goal1 != "" ||
                  Goal2 != "" ||
                  Goal3 != "" ||
                  Goal4 != "" ||
                  Goal5 != "" ||
                  Goal6 != "" ||
                  Goal7 != ""
                ) {
                  if (Goal1 == true && person.goal1 != "false") {
                    <CardComponent person={person} />;
                  } else {
                    if (Goal2 == true && person.goal2 != "false") {
                      <CardComponent person={person} />;
                    } else {
                      if (Goal3 == true && person.goal3 != "false") {
                        <CardComponent person={person} />;
                      } else {
                        if (Goal4 == true && person.goal4 != "false") {
                          <CardComponent person={person} />;
                        } else {
                          if (Goal5 == true && person.goal5 != "false") {
                            <CardComponent person={person} />;
                          } else {
                            if (Goal6 == true && person.goal6 != "false") {
                              <CardComponent person={person} />;
                            } else {
                              if (Goal7 == true && person.goal7 != "false") {
                                <CardComponent person={person} />;
                              } else {
                                return <></>;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                } else {
                  <CardComponent person={person} />;
                }
              }
            } else {
              if (
                Goal1 != "" ||
                Goal2 != "" ||
                Goal3 != "" ||
                Goal4 != "" ||
                Goal5 != "" ||
                Goal6 != "" ||
                Goal7 != ""
              ) {
                if (Goal1 == true && person.goal1 != "false") {
                  <CardComponent person={person} />;
                } else {
                  if (Goal2 == true && person.goal2 != "false") {
                    <CardComponent person={person} />;
                  } else {
                    if (Goal3 == true && person.goal3 != "false") {
                      <CardComponent person={person} />;
                    } else {
                      if (Goal4 == true && person.goal4 != "false") {
                        <CardComponent person={person} />;
                      } else {
                        if (Goal5 == true && person.goal5 != "false") {
                          <CardComponent person={person} />;
                        } else {
                          if (Goal6 == true && person.goal6 != "false") {
                            <CardComponent person={person} />;
                          } else {
                            if (Goal7 == true && person.goal7 != "false") {
                              <CardComponent person={person} />;
                            } else {
                              return <></>;
                            }
                          }
                        }
                      }
                    }
                  }
                }
              } else {
                <CardComponent person={person} />;
              }
            }
          }
        } else {
          if (
            Goal1 != "" ||
            Goal2 != "" ||
            Goal3 != "" ||
            Goal4 != "" ||
            Goal5 != "" ||
            Goal6 != "" ||
            Goal7 != ""
          ) {
            if (Goal1 == true && person.goal1 != "false") {
              <CardComponent person={person} />;
            } else {
              if (Goal2 == true && person.goal2 != "false") {
                <CardComponent person={person} />;
              } else {
                if (Goal3 == true && person.goal3 != "false") {
                  <CardComponent person={person} />;
                } else {
                  if (Goal4 == true && person.goal4 != "false") {
                    <CardComponent person={person} />;
                  } else {
                    if (Goal5 == true && person.goal5 != "false") {
                      <CardComponent person={person} />;
                    } else {
                      if (Goal6 == true && person.goal6 != "false") {
                        <CardComponent person={person} />;
                      } else {
                        if (Goal7 == true && person.goal7 != "false") {
                          <CardComponent person={person} />;
                        } else {
                          return <></>;
                        }
                      }
                    }
                  }
                }
              }
            }
          } else {
            <CardComponent person={person} />;
          }
        }
      }
    }
  } else {
    if (
      materialTree != "" ||
      materialPaper != "" ||
      materialCloth != "" ||
      materialPlastic != ""
    ) {
      if (
        materialTree != person.item &&
        materialPaper != person.item &&
        materialCloth != person.item &&
        materialPlastic != person.item
      ) {
        return <></>;
      } else {
        if (priceMin != "") {
          if (person.price < priceMin) {
            return <></>;
          } else {
            if (priceMax != "") {
              if (person.price > priceMax) {
                return <></>;
              } else {
                if (
                  Goal1 != "" ||
                  Goal2 != "" ||
                  Goal3 != "" ||
                  Goal4 != "" ||
                  Goal5 != "" ||
                  Goal6 != "" ||
                  Goal7 != ""
                ) {
                  if (Goal1 == true && person.goal1 != "false") {
                    <CardComponent person={person} />;
                  } else {
                    if (Goal2 == true && person.goal2 != "false") {
                      <CardComponent person={person} />;
                    } else {
                      if (Goal3 == true && person.goal3 != "false") {
                        <CardComponent person={person} />;
                      } else {
                        if (Goal4 == true && person.goal4 != "false") {
                          <CardComponent person={person} />;
                        } else {
                          if (Goal5 == true && person.goal5 != "false") {
                            <CardComponent person={person} />;
                          } else {
                            if (Goal6 == true && person.goal6 != "false") {
                              <CardComponent person={person} />;
                            } else {
                              if (Goal7 == true && person.goal7 != "false") {
                                <CardComponent person={person} />;
                              } else {
                                return <></>;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                } else {
                  <CardComponent person={person} />;
                }
              }
            } else {
              if (
                Goal1 != "" ||
                Goal2 != "" ||
                Goal3 != "" ||
                Goal4 != "" ||
                Goal5 != "" ||
                Goal6 != "" ||
                Goal7 != ""
              ) {
                if (Goal1 == true && person.goal1 != "false") {
                  <CardComponent person={person} />;
                } else {
                  if (Goal2 == true && person.goal2 != "false") {
                    <CardComponent person={person} />;
                  } else {
                    if (Goal3 == true && person.goal3 != "false") {
                      <CardComponent person={person} />;
                    } else {
                      if (Goal4 == true && person.goal4 != "false") {
                        <CardComponent person={person} />;
                      } else {
                        if (Goal5 == true && person.goal5 != "false") {
                          <CardComponent person={person} />;
                        } else {
                          if (Goal6 == true && person.goal6 != "false") {
                            <CardComponent person={person} />;
                          } else {
                            if (Goal7 == true && person.goal7 != "false") {
                              <CardComponent person={person} />;
                            } else {
                              return <></>;
                            }
                          }
                        }
                      }
                    }
                  }
                }
              } else {
                <CardComponent person={person} />;
              }
            }
          }
        } else {
          if (
            Goal1 != "" ||
            Goal2 != "" ||
            Goal3 != "" ||
            Goal4 != "" ||
            Goal5 != "" ||
            Goal6 != "" ||
            Goal7 != ""
          ) {
            if (Goal1 == true && person.goal1 != "false") {
              <CardComponent person={person} />;
            } else {
              if (Goal2 == true && person.goal2 != "false") {
                <CardComponent person={person} />;
              } else {
                if (Goal3 == true && person.goal3 != "false") {
                  <CardComponent person={person} />;
                } else {
                  if (Goal4 == true && person.goal4 != "false") {
                    <CardComponent person={person} />;
                  } else {
                    if (Goal5 == true && person.goal5 != "false") {
                      <CardComponent person={person} />;
                    } else {
                      if (Goal6 == true && person.goal6 != "false") {
                        <CardComponent person={person} />;
                      } else {
                        if (Goal7 == true && person.goal7 != "false") {
                          <CardComponent person={person} />;
                        } else {
                          return <></>;
                        }
                      }
                    }
                  }
                }
              }
            }
          } else {
            <CardComponent person={person} />;
          }
        }
      }
    } else {
      if (priceMin != "") {
        if (person.price < priceMin) {
          return <></>;
        } else {
          if (priceMax != "") {
            if (person.price > priceMax) {
              return <></>;
            } else {
              if (
                Goal1 != "" ||
                Goal2 != "" ||
                Goal3 != "" ||
                Goal4 != "" ||
                Goal5 != "" ||
                Goal6 != "" ||
                Goal7 != ""
              ) {
                if (Goal1 == true && person.goal1 != "false") {
                  <CardComponent person={person} />;
                } else {
                  if (Goal2 == true && person.goal2 != "false") {
                    <CardComponent person={person} />;
                  } else {
                    if (Goal3 == true && person.goal3 != "false") {
                      <CardComponent person={person} />;
                    } else {
                      if (Goal4 == true && person.goal4 != "false") {
                        <CardComponent person={person} />;
                      } else {
                        if (Goal5 == true && person.goal5 != "false") {
                          <CardComponent person={person} />;
                        } else {
                          if (Goal6 == true && person.goal6 != "false") {
                            <CardComponent person={person} />;
                          } else {
                            if (Goal7 == true && person.goal7 != "false") {
                              <CardComponent person={person} />;
                            } else {
                              return <></>;
                            }
                          }
                        }
                      }
                    }
                  }
                }
              } else {
                <CardComponent person={person} />;
              }
            }
          } else {
            if (
              Goal1 != "" ||
              Goal2 != "" ||
              Goal3 != "" ||
              Goal4 != "" ||
              Goal5 != "" ||
              Goal6 != "" ||
              Goal7 != ""
            ) {
              if (Goal1 == true && person.goal1 != "false") {
                <CardComponent person={person} />;
              } else {
                if (Goal2 == true && person.goal2 != "false") {
                  <CardComponent person={person} />;
                } else {
                  if (Goal3 == true && person.goal3 != "false") {
                    <CardComponent person={person} />;
                  } else {
                    if (Goal4 == true && person.goal4 != "false") {
                      <CardComponent person={person} />;
                    } else {
                      if (Goal5 == true && person.goal5 != "false") {
                        <CardComponent person={person} />;
                      } else {
                        if (Goal6 == true && person.goal6 != "false") {
                          <CardComponent person={person} />;
                        } else {
                          if (Goal7 == true && person.goal7 != "false") {
                            <CardComponent person={person} />;
                          } else {
                            return <></>;
                          }
                        }
                      }
                    }
                  }
                }
              }
            } else {
              <CardComponent person={person} />;
            }
          }
        }
      } else {
        if (
          Goal1 != "" ||
          Goal2 != "" ||
          Goal3 != "" ||
          Goal4 != "" ||
          Goal5 != "" ||
          Goal6 != "" ||
          Goal7 != ""
        ) {
          if (Goal1 == true && person.goal1 != "false") {
            <CardComponent person={person} />;
          } else {
            if (Goal2 == true && person.goal2 != "false") {
              <CardComponent person={person} />;
            } else {
              if (Goal3 == true && person.goal3 != "false") {
                <CardComponent person={person} />;
              } else {
                if (Goal4 == true && person.goal4 != "false") {
                  <CardComponent person={person} />;
                } else {
                  if (Goal5 == true && person.goal5 != "false") {
                    <CardComponent person={person} />;
                  } else {
                    if (Goal6 == true && person.goal6 != "false") {
                      <CardComponent person={person} />;
                    } else {
                      if (Goal7 == true && person.goal7 != "false") {
                        <CardComponent person={person} />;
                      } else {
                        return <></>;
                      }
                    }
                  }
                }
              }
            }
          }
        } else {
          return (
            <div
              className={`d-flex flex-column align-items-center justify-content-center ${style.boxSize}`}
            >
              <div className="d-flex align-items-center">
                {file.map((item) => {
                  if (item.prodId == item.person.id && x == 0) {
                    x++;
                    return (
                      <div key={item.id}>
                        <Link
                          className={`navbar-brand ${style.linkStyle}`}
                          to={`/toy/${item.person.id}`}
                          state={{ from: item.person.id }}
                        >
                          <div
                            className={`${style.box} container`}
                            style={{
                              backgroundImage: `url("http://barmatoys.loc/storage/uploads/${item.image}")`,
                              bgPosition: "center",
                              backgroundRepeat: "no-repeat",
                              backgroundSize: "cover",
                            }}
                          ></div>
                        </Link>
                      </div>
                    );
                  }
                })}
              </div>
        
              <Link
                className={`navbar-brand ${style.linkStyle}`}
                to={`/toy/${item.person.id}`}
                state={{ from: item.person.id }}
              >
                <h2 className={style.boxH2}>{item.person.name}</h2>
                <p className={style.boxP}>
                  {item.person.price}
                  {t("taradram")}
                </p>
              </Link>
            </div>
          );
        }
      }
    }
  }
}

export default CategoryCard;
