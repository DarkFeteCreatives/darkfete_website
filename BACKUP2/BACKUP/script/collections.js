

/* shirts */
/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'dark-fete-creatives.myshopify.com',
      storefrontAccessToken: '9375e6c598215dedb9ce61fb7b382226',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('collection', {
        id: '460786565432',
        node: document.getElementById('collection-component-1694821327698'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px",
          "width": "calc(25% - 20px)"
        },
        "img": {
          "height": "calc(100% - 15px)",
          "position": "absolute",
          "left": "0",
          "right": "0",
          "top": "0"
        },
        "imgWrapper": {
          "padding-top": "calc(75% + 15px)",
          "position": "relative",
          "height": "0"
        }
      },
      "title": {
        "font-family": "Josefin Slab, sans-serif"
      },
      "button": {
        "font-family": "Josefin Slab, sans-serif",
        "font-weight": "bold",
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        "color": "#f9f7f7",
        ":hover": {
          "color": "#f9f7f7",
          "background-color": "#111111"
        },
        "background-color": "#0a0a0a",
        ":focus": {
          "background-color": "#111111"
        },
        "border-radius": "10px"
      },
      "quantityInput": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px"
      },
      "price": {
        "font-family": "Josefin Slab, sans-serif",
        "font-weight": "bold"
      },
      "compareAt": {
        "font-family": "Josefin Slab, sans-serif",
        "font-weight": "bold"
      },
      "unitPrice": {
        "font-family": "Josefin Slab, sans-serif",
        "font-weight": "bold"
      }
    },
    "buttonDestination": "modal",
    "contents": {
      "options": false
    },
    "text": {
      "button": "View product"
    },
    "googleFonts": [
      "Josefin Slab"
    ]
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-family": "Josefin Slab, sans-serif",
        "font-weight": "bold",
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        "color": "#f9f7f7",
        ":hover": {
          "color": "#f9f7f7",
          "background-color": "#111111"
        },
        "background-color": "#0a0a0a",
        ":focus": {
          "background-color": "#111111"
        },
        "border-radius": "10px"
      },
      "quantityInput": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px"
      },
      "title": {
        "font-family": "Josefin Slab, sans-serif",
        "font-weight": "bold",
        "font-size": "26px",
        "color": "#4c4c4c"
      },
      "price": {
        "font-family": "Josefin Slab, sans-serif",
        "font-weight": "bold",
        "font-size": "18px",
        "color": "#4c4c4c"
      },
      "compareAt": {
        "font-family": "Josefin Slab, sans-serif",
        "font-weight": "bold",
        "font-size": "15.299999999999999px",
        "color": "#4c4c4c"
      },
      "unitPrice": {
        "font-family": "Josefin Slab, sans-serif",
        "font-weight": "bold",
        "font-size": "15.299999999999999px",
        "color": "#4c4c4c"
      },
      "description": {
        "font-family": "Josefin Slab, sans-serif",
        "font-weight": "bold",
        "font-size": "15px"
      }
    },
    "googleFonts": [
      "Josefin Slab"
    ],
    "text": {
      "button": "Add to cart"
    }
  },
  "modal": {
    "styles": {
      "modal": {
        "background-color": "#cecece"
      }
    }
  },
  "option": {
    "styles": {
      "label": {
        "font-family": "Josefin Slab, sans-serif",
        "font-weight": "bold"
      },
      "select": {
        "font-family": "Josefin Slab, sans-serif",
        "font-weight": "bold"
      }
    },
    "googleFonts": [
      "Josefin Slab"
    ]
  },
  "cart": {
    "styles": {
      "button": {
        "font-family": "Josefin Slab, sans-serif",
        "font-weight": "bold",
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        "color": "#f9f7f7",
        ":hover": {
          "color": "#f9f7f7",
          "background-color": "#111111"
        },
        "background-color": "#0a0a0a",
        ":focus": {
          "background-color": "#111111"
        },
        "border-radius": "10px"
      },
      "title": {
        "color": "#f4f4f4"
      },
      "header": {
        "color": "#f4f4f4"
      },
      "lineItems": {
        "color": "#f4f4f4"
      },
      "subtotalText": {
        "color": "#f4f4f4"
      },
      "subtotal": {
        "color": "#f4f4f4"
      },
      "notice": {
        "color": "#f4f4f4"
      },
      "currency": {
        "color": "#f4f4f4"
      },
      "close": {
        "color": "#f4f4f4",
        ":hover": {
          "color": "#f4f4f4"
        }
      },
      "empty": {
        "color": "#f4f4f4"
      },
      "noteDescription": {
        "color": "#f4f4f4"
      },
      "discountText": {
        "color": "#f4f4f4"
      },
      "discountIcon": {
        "fill": "#f4f4f4"
      },
      "discountAmount": {
        "color": "#f4f4f4"
      },
      "cart": {
        "background-color": "#616161"
      },
      "footer": {
        "background-color": "#616161"
      }
    },
    "text": {
      "total": "Subtotal",
      "empty": "Add Items to Cart!",
      "notice": "Shipping Taxes and discount codes are added at checkout.",
      "button": "Ring Me Up!",
      "noteDescription": ""
    },
    "googleFonts": [
      "Josefin Slab"
    ]
  },
  "toggle": {
    "styles": {
      "toggle": {
        "font-family": "Josefin Slab, sans-serif",
        "font-weight": "bold",
        "background-color": "#0a0a0a",
        ":hover": {
          "background-color": "#111111"
        },
        ":focus": {
          "background-color": "#111111"
        }
      },
      "count": {
        "font-size": "13px",
        "color": "#f9f7f7",
        ":hover": {
          "color": "#f9f7f7"
        }
      },
      "iconPath": {
        "fill": "#f9f7f7"
      }
    },
    "googleFonts": [
      "Josefin Slab"
    ]
  },
  "lineItem": {
    "styles": {
      "variantTitle": {
        "color": "#f4f4f4"
      },
      "title": {
        "color": "#f4f4f4"
      },
      "price": {
        "color": "#f4f4f4"
      },
      "fullPrice": {
        "color": "#f4f4f4"
      },
      "discount": {
        "color": "#f4f4f4"
      },
      "discountIcon": {
        "fill": "#f4f4f4"
      },
      "quantity": {
        "color": "#f4f4f4"
      },
      "quantityIncrement": {
        "color": "#f4f4f4",
        "border-color": "#f4f4f4"
      },
      "quantityDecrement": {
        "color": "#f4f4f4",
        "border-color": "#f4f4f4"
      },
      "quantityInput": {
        "color": "#f4f4f4",
        "border-color": "#f4f4f4"
      }
    }
  }
},
      });
    });
  }
})();
/*]]>*/


/* branded merch */
/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'dark-fete-creatives.myshopify.com',
      storefrontAccessToken: '9375e6c598215dedb9ce61fb7b382226',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('collection', {
        id: '460787220792',
        node: document.getElementById('collection-component-1694822764393'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px",
          "width": "calc(25% - 20px)"
        },
        "img": {
          "height": "calc(100% - 15px)",
          "position": "absolute",
          "left": "0",
          "right": "0",
          "top": "0"
        },
        "imgWrapper": {
          "padding-top": "calc(75% + 15px)",
          "position": "relative",
          "height": "0"
        }
      },
      "title": {
        "font-family": "Josefin Slab, sans-serif"
      },
      "button": {
        "font-family": "Josefin Slab, sans-serif",
        "font-weight": "bold",
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        "color": "#f9f7f7",
        ":hover": {
          "color": "#f9f7f7",
          "background-color": "#111111"
        },
        "background-color": "#0a0a0a",
        ":focus": {
          "background-color": "#111111"
        },
        "border-radius": "10px"
      },
      "quantityInput": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px"
      },
      "price": {
        "font-family": "Josefin Slab, sans-serif",
        "font-weight": "bold"
      },
      "compareAt": {
        "font-family": "Josefin Slab, sans-serif",
        "font-weight": "bold"
      },
      "unitPrice": {
        "font-family": "Josefin Slab, sans-serif",
        "font-weight": "bold"
      }
    },
    "buttonDestination": "modal",
    "contents": {
      "options": false
    },
    "text": {
      "button": "View product"
    },
    "googleFonts": [
      "Josefin Slab"
    ]
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-family": "Josefin Slab, sans-serif",
        "font-weight": "bold",
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        "color": "#f9f7f7",
        ":hover": {
          "color": "#f9f7f7",
          "background-color": "#111111"
        },
        "background-color": "#0a0a0a",
        ":focus": {
          "background-color": "#111111"
        },
        "border-radius": "10px"
      },
      "quantityInput": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px"
      },
      "title": {
        "font-family": "Josefin Slab, sans-serif",
        "font-weight": "bold",
        "font-size": "26px",
        "color": "#4c4c4c"
      },
      "price": {
        "font-family": "Josefin Slab, sans-serif",
        "font-weight": "bold",
        "font-size": "18px",
        "color": "#4c4c4c"
      },
      "compareAt": {
        "font-family": "Josefin Slab, sans-serif",
        "font-weight": "bold",
        "font-size": "15.299999999999999px",
        "color": "#4c4c4c"
      },
      "unitPrice": {
        "font-family": "Josefin Slab, sans-serif",
        "font-weight": "bold",
        "font-size": "15.299999999999999px",
        "color": "#4c4c4c"
      },
      "description": {
        "font-family": "Josefin Slab, sans-serif",
        "font-weight": "bold",
        "font-size": "15px"
      }
    },
    "googleFonts": [
      "Josefin Slab"
    ],
    "text": {
      "button": "Add to cart"
    }
  },
  "modal": {
    "styles": {
      "modal": {
        "background-color": "#cecece"
      }
    }
  },
  "option": {
    "styles": {
      "label": {
        "font-family": "Josefin Slab, sans-serif",
        "font-weight": "bold"
      },
      "select": {
        "font-family": "Josefin Slab, sans-serif",
        "font-weight": "bold"
      }
    },
    "googleFonts": [
      "Josefin Slab"
    ]
  },
  "cart": {
    "styles": {
      "button": {
        "font-family": "Josefin Slab, sans-serif",
        "font-weight": "bold",
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        "color": "#f9f7f7",
        ":hover": {
          "color": "#f9f7f7",
          "background-color": "#111111"
        },
        "background-color": "#0a0a0a",
        ":focus": {
          "background-color": "#111111"
        },
        "border-radius": "10px"
      },
      "title": {
        "color": "#f4f4f4"
      },
      "header": {
        "color": "#f4f4f4"
      },
      "lineItems": {
        "color": "#f4f4f4"
      },
      "subtotalText": {
        "color": "#f4f4f4"
      },
      "subtotal": {
        "color": "#f4f4f4"
      },
      "notice": {
        "color": "#f4f4f4"
      },
      "currency": {
        "color": "#f4f4f4"
      },
      "close": {
        "color": "#f4f4f4",
        ":hover": {
          "color": "#f4f4f4"
        }
      },
      "empty": {
        "color": "#f4f4f4"
      },
      "noteDescription": {
        "color": "#f4f4f4"
      },
      "discountText": {
        "color": "#f4f4f4"
      },
      "discountIcon": {
        "fill": "#f4f4f4"
      },
      "discountAmount": {
        "color": "#f4f4f4"
      },
      "cart": {
        "background-color": "#616161"
      },
      "footer": {
        "background-color": "#616161"
      }
    },
    "text": {
      "total": "Subtotal",
      "empty": "Add Items to Cart!",
      "notice": "Shipping Taxes and discount codes are added at checkout.",
      "button": "Ring Me Up!",
      "noteDescription": ""
    },
    "googleFonts": [
      "Josefin Slab"
    ]
  },
  "toggle": {
    "styles": {
      "toggle": {
        "font-family": "Josefin Slab, sans-serif",
        "font-weight": "bold",
        "background-color": "#0a0a0a",
        ":hover": {
          "background-color": "#111111"
        },
        ":focus": {
          "background-color": "#111111"
        }
      },
      "count": {
        "font-size": "13px",
        "color": "#f9f7f7",
        ":hover": {
          "color": "#f9f7f7"
        }
      },
      "iconPath": {
        "fill": "#f9f7f7"
      }
    },
    "googleFonts": [
      "Josefin Slab"
    ]
  },
  "lineItem": {
    "styles": {
      "variantTitle": {
        "color": "#f4f4f4"
      },
      "title": {
        "color": "#f4f4f4"
      },
      "price": {
        "color": "#f4f4f4"
      },
      "fullPrice": {
        "color": "#f4f4f4"
      },
      "discount": {
        "color": "#f4f4f4"
      },
      "discountIcon": {
        "fill": "#f4f4f4"
      },
      "quantity": {
        "color": "#f4f4f4"
      },
      "quantityIncrement": {
        "color": "#f4f4f4",
        "border-color": "#f4f4f4"
      },
      "quantityDecrement": {
        "color": "#f4f4f4",
        "border-color": "#f4f4f4"
      },
      "quantityInput": {
        "color": "#f4f4f4",
        "border-color": "#f4f4f4"
      }
    }
  }
},
      });
    });
  }
})();
/*]]>*/



