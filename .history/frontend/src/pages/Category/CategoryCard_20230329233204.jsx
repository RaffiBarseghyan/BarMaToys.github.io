import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();

  let x = 0;

  const [file, setFile] = useState([]);

  useEffect(() => {
    axios.get(`http://barmatoys.loc/api/get/files`).then((res) => {
      const persons = res.data;
      setFile(persons.file);
    });
  }, []);
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
                    <CardComponen{file} person={person} />;
                  } else {
                    if (Goal2 == true && person.goal2 != "false") {
                      <CardComponent file={file} person={person} />;
                    } else {
                      if (Goal3 == true && person.goal3 != "false") {
                        <CardComponent file={file} person={person} />;
                      } else {
                        if (Goal4 == true && person.goal4 != "false") {
                          <CardComponent file={file} person={person} />;
                        } else {
                          if (Goal5 == true && person.goal5 != "false") {
                            <CardComponent file={file} person={person} />;
                          } else {
                            if (Goal6 == true && person.goal6 != "false") {
                              <CardComponent file={file} person={person} />;
                            } else {
                              if (Goal7 == true && person.goal7 != "false") {
                                <CardComponent file={file} person={person} />;
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
                      <CardComponent file={file} person={person} />;
                    } else {
                      if (Goal2 == true && person.goal2 != "false") {
                        <CardComponent file={file} person={person} />;
                      } else {
                        if (Goal3 == true && person.goal3 != "false") {
                          <CardComponent file={file} person={person} />;
                        } else {
                          if (Goal4 == true && person.goal4 != "false") {
                            <CardComponent file={file} person={person} />;
                          } else {
                            if (Goal5 == true && person.goal5 != "false") {
                              <CardComponent file={file} person={person} />;
                            } else {
                              if (Goal6 == true && person.goal6 != "false") {
                                <CardComponent file={file} person={person} />;
                              } else {
                                if (Goal7 == true && person.goal7 != "false") {
                                  <CardComponent file={file} person={person} />;
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
                    <CardComponent file={file} person={person} />;
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
                <CardComponent file={file} person={person} />;
              } else {
                if (Goal2 == true && person.goal2 != "false") {
                  <CardComponent file={file} person={person} />;
                } else {
                  if (Goal3 == true && person.goal3 != "false") {
                    <CardComponent file={file} person={person} />;
                  } else {
                    if (Goal4 == true && person.goal4 != "false") {
                      <CardComponent file={file} person={person} />;
                    } else {
                      if (Goal5 == true && person.goal5 != "false") {
                        <CardComponent file={file} person={person} />;
                      } else {
                        if (Goal6 == true && person.goal6 != "false") {
                          <CardComponent file={file} person={person} />;
                        } else {
                          if (Goal7 == true && person.goal7 != "false") {
                            <CardComponent file={file} person={person} />;
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
              <CardComponent file={file} person={person} />;
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
                    <CardComponent file={file} person={person} />;
                  } else {
                    if (Goal2 == true && person.goal2 != "false") {
                      <CardComponent file={file} person={person} />;
                    } else {
                      if (Goal3 == true && person.goal3 != "false") {
                        <CardComponent file={file} person={person} />;
                      } else {
                        if (Goal4 == true && person.goal4 != "false") {
                          <CardComponent file={file} person={person} />;
                        } else {
                          if (Goal5 == true && person.goal5 != "false") {
                            <CardComponent file={file} person={person} />;
                          } else {
                            if (Goal6 == true && person.goal6 != "false") {
                              <CardComponent file={file} person={person} />;
                            } else {
                              if (Goal7 == true && person.goal7 != "false") {
                                <CardComponent file={file} person={person} />;
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
                  <CardComponent file={file} person={person} />;
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
                  <CardComponent file={file} person={person} />;
                } else {
                  if (Goal2 == true && person.goal2 != "false") {
                    <CardComponent file={file} person={person} />;
                  } else {
                    if (Goal3 == true && person.goal3 != "false") {
                      <CardComponent file={file} person={person} />;
                    } else {
                      if (Goal4 == true && person.goal4 != "false") {
                        <CardComponent file={file} person={person} />;
                      } else {
                        if (Goal5 == true && person.goal5 != "false") {
                          <CardComponent file={file} person={person} />;
                        } else {
                          if (Goal6 == true && person.goal6 != "false") {
                            <CardComponent file={file} person={person} />;
                          } else {
                            if (Goal7 == true && person.goal7 != "false") {
                              <CardComponent file={file} person={person} />;
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
                <CardComponent file={file} person={person} />;
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
              <CardComponent file={file} person={person} />;
            } else {
              if (Goal2 == true && person.goal2 != "false") {
                <CardComponent file={file} person={person} />;
              } else {
                if (Goal3 == true && person.goal3 != "false") {
                  <CardComponent file={file} person={person} />;
                } else {
                  if (Goal4 == true && person.goal4 != "false") {
                    <CardComponent file={file} person={person} />;
                  } else {
                    if (Goal5 == true && person.goal5 != "false") {
                      <CardComponent file={file} person={person} />;
                    } else {
                      if (Goal6 == true && person.goal6 != "false") {
                        <CardComponent file={file} person={person} />;
                      } else {
                        if (Goal7 == true && person.goal7 != "false") {
                          <CardComponent file={file} person={person} />;
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
            <CardComponent file={file} person={person} />;
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
                    <CardComponent file={file} person={person} />;
                  } else {
                    if (Goal2 == true && person.goal2 != "false") {
                      <CardComponent file={file} person={person} />;
                    } else {
                      if (Goal3 == true && person.goal3 != "false") {
                        <CardComponent file={file} person={person} />;
                      } else {
                        if (Goal4 == true && person.goal4 != "false") {
                          <CardComponent file={file} person={person} />;
                        } else {
                          if (Goal5 == true && person.goal5 != "false") {
                            <CardComponent file={file} person={person} />;
                          } else {
                            if (Goal6 == true && person.goal6 != "false") {
                              <CardComponent file={file} person={person} />;
                            } else {
                              if (Goal7 == true && person.goal7 != "false") {
                                <CardComponent file={file} person={person} />;
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
                  <CardComponent file={file} person={person} />;
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
                  <CardComponent file={file} person={person} />;
                } else {
                  if (Goal2 == true && person.goal2 != "false") {
                    <CardComponent file={file} person={person} />;
                  } else {
                    if (Goal3 == true && person.goal3 != "false") {
                      <CardComponent file={file} person={person} />;
                    } else {
                      if (Goal4 == true && person.goal4 != "false") {
                        <CardComponent file={file} person={person} />;
                      } else {
                        if (Goal5 == true && person.goal5 != "false") {
                          <CardComponent file={file} person={person} />;
                        } else {
                          if (Goal6 == true && person.goal6 != "false") {
                            <CardComponent file={file} person={person} />;
                          } else {
                            if (Goal7 == true && person.goal7 != "false") {
                              <CardComponent file={file} person={person} />;
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
                <CardComponent file={file} person={person} />;
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
              <CardComponent file={file} person={person} />;
            } else {
              if (Goal2 == true && person.goal2 != "false") {
                <CardComponent file={file} person={person} />;
              } else {
                if (Goal3 == true && person.goal3 != "false") {
                  <CardComponent file={file} person={person} />;
                } else {
                  if (Goal4 == true && person.goal4 != "false") {
                    <CardComponent file={file} person={person} />;
                  } else {
                    if (Goal5 == true && person.goal5 != "false") {
                      <CardComponent file={file} person={person} />;
                    } else {
                      if (Goal6 == true && person.goal6 != "false") {
                        <CardComponent file={file} person={person} />;
                      } else {
                        if (Goal7 == true && person.goal7 != "false") {
                          <CardComponent file={file} person={person} />;
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
            <CardComponent file={file} person={person} />;
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
                  <CardComponent file={file} person={person} />;
                } else {
                  if (Goal2 == true && person.goal2 != "false") {
                    <CardComponent file={file} person={person} />;
                  } else {
                    if (Goal3 == true && person.goal3 != "false") {
                      <CardComponent file={file} person={person} />;
                    } else {
                      if (Goal4 == true && person.goal4 != "false") {
                        <CardComponent file={file} person={person} />;
                      } else {
                        if (Goal5 == true && person.goal5 != "false") {
                          <CardComponent file={file} person={person} />;
                        } else {
                          if (Goal6 == true && person.goal6 != "false") {
                            <CardComponent file={file} person={person} />;
                          } else {
                            if (Goal7 == true && person.goal7 != "false") {
                              <CardComponent file={file} person={person} />;
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
                <CardComponent file={file} person={person} />;
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
                <CardComponent file={file} person={person} />;
              } else {
                if (Goal2 == true && person.goal2 != "false") {
                  <CardComponent file={file} person={person} />;
                } else {
                  if (Goal3 == true && person.goal3 != "false") {
                    <CardComponent file={file} person={person} />;
                  } else {
                    if (Goal4 == true && person.goal4 != "false") {
                      <CardComponent file={file} person={person} />;
                    } else {
                      if (Goal5 == true && person.goal5 != "false") {
                        <CardComponent file={file} person={person} />;
                      } else {
                        if (Goal6 == true && person.goal6 != "false") {
                          <CardComponent file={file} person={person} />;
                        } else {
                          if (Goal7 == true && person.goal7 != "false") {
                            <CardComponent file={file} person={person} />;
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
              <CardComponent file={file} person={person} />;
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
            <CardComponent file={file} person={person} />;
          } else {
            if (Goal2 == true && person.goal2 != "false") {
              <CardComponent file={file} person={person} />;
            } else {
              if (Goal3 == true && person.goal3 != "false") {
                <CardComponent file={file} person={person} />;
              } else {
                if (Goal4 == true && person.goal4 != "false") {
                  <CardComponent file={file} person={person} />;
                } else {
                  if (Goal5 == true && person.goal5 != "false") {
                    <CardComponent file={file} person={person} />;
                  } else {
                    if (Goal6 == true && person.goal6 != "false") {
                      <CardComponent file={file} person={person} />;
                    } else {
                      if (Goal7 == true && person.goal7 != "false") {
                        <CardComponent file={file} person={person} />;
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
          <CardComponent key={person.id} file={file} person={person} />;
        }
      }
    }
  }
}

export default CategoryCard;
