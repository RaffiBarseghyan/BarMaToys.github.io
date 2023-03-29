import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import style from "./category.module.scss";
import AddBasket from "../Home/AddBasket";
import CardComponent from "./components/cardComponent";

function CategoryCard({
  person,
  file,
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
  const { t } = useTranslation();

  let x = 0;
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
                    return <CardComponent file={file} person={person} />;
                  } else {
                    if (Goal2 == true && person.goal2 != "false") {
                      return <CardComponent file={file} person={person} />;
                    } else {
                      if (Goal3 == true && person.goal3 != "false") {
                        return <CardComponent file={file} person={person} />;
                      } else {
                        if (Goal4 == true && person.goal4 != "false") {
                          return <CardComponent file={file} person={person} />;
                        } else {
                          if (Goal5 == true && person.goal5 != "false") {
                            return (
                              <CardComponent file={file} person={person} />
                            );
                          } else {
                            if (Goal6 == true && person.goal6 != "false") {
                              return (
                                <CardComponent file={file} person={person} />
                              );
                            } else {
                              if (Goal7 == true && person.goal7 != "false") {
                                return (
                                  <CardComponent file={file} person={person} />
                                );
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
                      return <CardComponent file={file} person={person} />;
                    } else {
                      if (Goal2 == true && person.goal2 != "false") {
                        return <CardComponent file={file} person={person} />;
                      } else {
                        if (Goal3 == true && person.goal3 != "false") {
                          return <CardComponent file={file} person={person} />;
                        } else {
                          if (Goal4 == true && person.goal4 != "false") {
                            return (
                              <CardComponent file={file} person={person} />
                            );
                          } else {
                            if (Goal5 == true && person.goal5 != "false") {
                              return (
                                <CardComponent file={file} person={person} />
                              );
                            } else {
                              if (Goal6 == true && person.goal6 != "false") {
                                return (
                                  <CardComponent file={file} person={person} />
                                );
                              } else {
                                if (Goal7 == true && person.goal7 != "false") {
                                  return (
                                    <CardComponent
                                      file={file}
                                      person={person}
                                    />
                                  );
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
                    return <CardComponent file={file} person={person} />;
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
                return <CardComponent file={file} person={person} />;
              } else {
                if (Goal2 == true && person.goal2 != "false") {
                  return <CardComponent file={file} person={person} />;
                } else {
                  if (Goal3 == true && person.goal3 != "false") {
                    return <CardComponent file={file} person={person} />;
                  } else {
                    if (Goal4 == true && person.goal4 != "false") {
                      return <CardComponent file={file} person={person} />;
                    } else {
                      if (Goal5 == true && person.goal5 != "false") {
                        return <CardComponent file={file} person={person} />;
                      } else {
                        if (Goal6 == true && person.goal6 != "false") {
                          return <CardComponent file={file} person={person} />;
                        } else {
                          if (Goal7 == true && person.goal7 != "false") {
                            return (
                              <CardComponent file={file} person={person} />
                            );
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
              return <CardComponent file={file} person={person} />;
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
                    return <CardComponent file={file} person={person} />;
                  } else {
                    if (Goal2 == true && person.goal2 != "false") {
                      return <CardComponent file={file} person={person} />;
                    } else {
                      if (Goal3 == true && person.goal3 != "false") {
                        return <CardComponent file={file} person={person} />;
                      } else {
                        if (Goal4 == true && person.goal4 != "false") {
                          return <CardComponent file={file} person={person} />;
                        } else {
                          if (Goal5 == true && person.goal5 != "false") {
                            return (
                              <CardComponent file={file} person={person} />
                            );
                          } else {
                            if (Goal6 == true && person.goal6 != "false") {
                              return (
                                <CardComponent file={file} person={person} />
                              );
                            } else {
                              if (Goal7 == true && person.goal7 != "false") {
                                return (
                                  <CardComponent file={file} person={person} />
                                );
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
                  return <CardComponent file={file} person={person} />;
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
                  return <CardComponent file={file} person={person} />;
                } else {
                  if (Goal2 == true && person.goal2 != "false") {
                    return <CardComponent file={file} person={person} />;
                  } else {
                    if (Goal3 == true && person.goal3 != "false") {
                      return <CardComponent file={file} person={person} />;
                    } else {
                      if (Goal4 == true && person.goal4 != "false") {
                        return <CardComponent file={file} person={person} />;
                      } else {
                        if (Goal5 == true && person.goal5 != "false") {
                          return <CardComponent file={file} person={person} />;
                        } else {
                          if (Goal6 == true && person.goal6 != "false") {
                            return (
                              <CardComponent file={file} person={person} />
                            );
                          } else {
                            if (Goal7 == true && person.goal7 != "false") {
                              return (
                                <CardComponent file={file} person={person} />
                              );
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
                return <CardComponent file={file} person={person} />;
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
              return <CardComponent file={file} person={person} />;
            } else {
              if (Goal2 == true && person.goal2 != "false") {
                return <CardComponent file={file} person={person} />;
              } else {
                if (Goal3 == true && person.goal3 != "false") {
                  return <CardComponent file={file} person={person} />;
                } else {
                  if (Goal4 == true && person.goal4 != "false") {
                    return <CardComponent file={file} person={person} />;
                  } else {
                    if (Goal5 == true && person.goal5 != "false") {
                      return <CardComponent file={file} person={person} />;
                    } else {
                      if (Goal6 == true && person.goal6 != "false") {
                        return <CardComponent file={file} person={person} />;
                      } else {
                        if (Goal7 == true && person.goal7 != "false") {
                          return <CardComponent file={file} person={person} />;
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
            return <CardComponent file={file} person={person} />;
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
                    return <CardComponent file={file} person={person} />;
                  } else {
                    if (Goal2 == true && person.goal2 != "false") {
                      return <CardComponent file={file} person={person} />;
                    } else {
                      if (Goal3 == true && person.goal3 != "false") {
                        return <CardComponent file={file} person={person} />;
                      } else {
                        if (Goal4 == true && person.goal4 != "false") {
                          return <CardComponent file={file} person={person} />;
                        } else {
                          if (Goal5 == true && person.goal5 != "false") {
                            return (
                              <CardComponent file={file} person={person} />
                            );
                          } else {
                            if (Goal6 == true && person.goal6 != "false") {
                              return (
                                <CardComponent file={file} person={person} />
                              );
                            } else {
                              if (Goal7 == true && person.goal7 != "false") {
                                return (
                                  <CardComponent file={file} person={person} />
                                );
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
                  return <CardComponent file={file} person={person} />;
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
                  return <CardComponent file={file} person={person} />;
                } else {
                  if (Goal2 == true && person.goal2 != "false") {
                    return <CardComponent file={file} person={person} />;
                  } else {
                    if (Goal3 == true && person.goal3 != "false") {
                      return <CardComponent file={file} person={person} />;
                    } else {
                      if (Goal4 == true && person.goal4 != "false") {
                        return <CardComponent file={file} person={person} />;
                      } else {
                        if (Goal5 == true && person.goal5 != "false") {
                          return <CardComponent file={file} person={person} />;
                        } else {
                          if (Goal6 == true && person.goal6 != "false") {
                            return (
                              <CardComponent file={file} person={person} />
                            );
                          } else {
                            if (Goal7 == true && person.goal7 != "false") {
                              return (
                                <CardComponent file={file} person={person} />
                              );
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
                return <CardComponent file={file} person={person} />;
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
              return <CardComponent file={file} person={person} />;
            } else {
              if (Goal2 == true && person.goal2 != "false") {
                return <CardComponent file={file} person={person} />;
              } else {
                if (Goal3 == true && person.goal3 != "false") {
                  return <CardComponent file={file} person={person} />;
                } else {
                  if (Goal4 == true && person.goal4 != "false") {
                    return <CardComponent file={file} person={person} />;
                  } else {
                    if (Goal5 == true && person.goal5 != "false") {
                      return <CardComponent file={file} person={person} />;
                    } else {
                      if (Goal6 == true && person.goal6 != "false") {
                        return <CardComponent file={file} person={person} />;
                      } else {
                        if (Goal7 == true && person.goal7 != "false") {
                          return <CardComponent file={file} person={person} />;
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
            return <CardComponent file={file} person={person} />;
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
                  return <CardComponent file={file} person={person} />;
                } else {
                  if (Goal2 == true && person.goal2 != "false") {
                    return <CardComponent file={file} person={person} />;
                  } else {
                    if (Goal3 == true && person.goal3 != "false") {
                      return <CardComponent file={file} person={person} />;
                    } else {
                      if (Goal4 == true && person.goal4 != "false") {
                        return <CardComponent file={file} person={person} />;
                      } else {
                        if (Goal5 == true && person.goal5 != "false") {
                          return <CardComponent file={file} person={person} />;
                        } else {
                          if (Goal6 == true && person.goal6 != "false") {
                            return (
                              <CardComponent file={file} person={person} />
                            );
                          } else {
                            if (Goal7 == true && person.goal7 != "false") {
                              return (
                                <CardComponent file={file} person={person} />
                              );
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
                return <CardComponent file={file} person={person} />;
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
                return <CardComponent file={file} person={person} />;
              } else {
                if (Goal2 == true && person.goal2 != "false") {
                  return <CardComponent file={file} person={person} />;
                } else {
                  if (Goal3 == true && person.goal3 != "false") {
                    return <CardComponent file={file} person={person} />;
                  } else {
                    if (Goal4 == true && person.goal4 != "false") {
                      return <CardComponent file={file} person={person} />;
                    } else {
                      if (Goal5 == true && person.goal5 != "false") {
                        return <CardComponent file={file} person={person} />;
                      } else {
                        if (Goal6 == true && person.goal6 != "false") {
                          return <CardComponent file={file} person={person} />;
                        } else {
                          if (Goal7 == true && person.goal7 != "false") {
                            return (
                              <CardComponent file={file} person={person} />
                            );
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
              return <CardComponent file={file} person={person} />;
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
            return <CardComponent file={file} person={person} />;
          } else {
            if (Goal2 == true && person.goal2 != "false") {
              return <CardComponent file={file} person={person} />;
            } else {
              if (Goal3 == true && person.goal3 != "false") {
                return <CardComponent file={file} person={person} />;
              } else {
                if (Goal4 == true && person.goal4 != "false") {
                  return <CardComponent file={file} person={person} />;
                } else {
                  if (Goal5 == true && person.goal5 != "false") {
                    return <CardComponent file={file} person={person} />;
                  } else {
                    if (Goal6 == true && person.goal6 != "false") {
                      return <CardComponent file={file} person={person} />;
                    } else {
                      if (Goal7 == true && person.goal7 != "false") {
                        return <CardComponent file={file} person={person} />;
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
          return <CardComponent file={file} person={person} />;
        }
      }
    }
  }
}

export default CategoryCard;
