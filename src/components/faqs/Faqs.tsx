import React, { useRef, useState } from "react";
import { PlusCircle, MinusCircle } from "lucide-react";
import faqImage from "../../assets/images/faqImage.png";

const AccordionItem = ({ id, title, content, openList, toggleOpen }) => {
  const isOpen = openList.includes(id);
  const contentRef = useRef(null);

  const maxHeight =
    isOpen && contentRef.current
      ? `${contentRef.current.scrollHeight}px`
      : "0px";

  return (
    <div className="mb-5">
      <div className="border border-[#E6E6E6] rounded-xl bg-white overflow-hidden transition-all">
        <button
          type="button"
          onClick={() => toggleOpen(id)}
          className="w-full flex items-center justify-between px-5 py-4 focus:outline-none cursor-pointer"
        >
          <span className="text-sm md:text-lg font-urbanist font-semibold text-[#1b1b1b] ">
            {title}
          </span>

          <span className="ml-4 text-[#1b1b1b]">
            {isOpen ? (
              <MinusCircle className="w-5 h-5 text-[#1b1b1b]" />
            ) : (
              <PlusCircle className="w-5 h-5 text-[#1b1b1b]" />
            )}
          </span>
        </button>

        {isOpen && <div className="border-t mx-5 border-[#e6e6e6]" />}

        <div
          style={{ maxHeight }}
          className="overflow-hidden transition-all duration-500 ease-in-out"
        >
          <div
            ref={contentRef}
            className="px-5 pt-4 pb-6 text-base text-[#565656] font-medium font-urbanist"
          >
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};

const AccordionGroup = ({ heading, items, openMap, setOpenMap, groupKey }) => {
  const openList = openMap[groupKey] || [];

  const toggleOpen = (id) => {
    setOpenMap((prev) => {
      const currentList = prev[groupKey] || [];
      const updatedList = currentList.includes(id)
        ? currentList.filter((item) => item !== id)
        : [...currentList, id];
      return { ...prev, [groupKey]: updatedList };
    });
  };

  return (
    <div className="mb-6">
      <h3 className="font-cormorant text-xl font-medium md:text-[24px] tracking-wide mb-6 text-[#111111]">
        {heading}
      </h3>

      {items.map((item, index) => (
        <AccordionItem
          key={index}
          id={`${groupKey}-${index}`}
          title={item.title}
          content={item.content}
          openList={openList}
          toggleOpen={toggleOpen}
        />
      ))}
    </div>
  );
};

const Faqs = () => {
  const [openMap, setOpenMap] = useState({});

  const faqData = [
    {
      key: "product",
      heading: "PRODUCT RELATED",
      items: [
        {
          title: 'What does "<0.5% ABV" mean?',
          content:
            "This indicates the beverage contains less than 0.5% alcohol by volume and is considered non-alcoholic in most regions.",
        },
        {
          title: "Storage & serving",
          content:
            "Store in a cool, dry place. Serve chilled or at recommended temperature depending on the variety.",
        },
      ],
    },
    {
      key: "shipments",
      heading: "SHIPMENTS",
      items: [
        {
          title: "How Long Is The Delivery Time?",
          content:
            "Orders usually leave our warehouse in 1–2 business days. Transit time is typically 2–5 business days depending on destination.",
        },
        {
          title: "Which Countries Do You Ship To?",
          content:
            "We ship to multiple countries worldwide. If your country isn't available at checkout, contact support.",
        },
        {
          title: "Which Shipping Provider Do You Use?",
          content:
            "We work with major national and international courier partners for reliable shipping.",
        },
        {
          title: "How Can I Track My Delivery?",
          content:
            "Once shipped, you will receive a tracking link via email to follow your order.",
        },
        {
          title: "Do you ship to PO boxes?",
          content:
            "Some carriers cannot deliver to PO boxes. If needed, we will contact you for an alternate address.",
        },
      ],
    },
    {
      key: "orders",
      heading: "ORDERS & RETURNS",
      items: [
        {
          title: "Is There a Minimum Order Value?",
          content: "Minimum order value is $25 for most regions.",
        },
        {
          title: "How Can I Cancel An Order?",
          content:
            "If your order has not yet shipped, contact customer support immediately.",
        },
        {
          title: "My Order Arrived Damaged. What Can I Do?",
          content:
            "Please send photos of the damage within 48 hours. We will replace or refund your order.",
        },
      ],
    },
    {
      key: "contact",
      heading: "CONTACT",
      items: [
        {
          title: "How Can I Contact You?",
          content:
            "You can contact us through the Contact Us page or via email. Support replies within 24–48 hours.",
        },
      ],
    },
    {
      key: "payment",
      heading: "PAYMENT",
      items: [
        {
          title: "What Are The Payment Options?",
          content:
            "We accept major credit/debit cards, PayPal, and region-specific methods.",
        },
        {
          title: "When Will I Receive My Refund?",
          content:
            "Refunds take 3–10 business days to reflect depending on your bank.",
        },
      ],
    },
  ];

  return (
    <>
      <div className="bg-[url('/images/faqImages/faq.png')] h-[320px] lg:h-[340px] xl:h-[400px] bg-cover bg-center relative">
        <div className="absolute z-50 ps-3 md:ps-6 lg:ps-7 xl:ps-12 flex flex-col gap-1 mt-50 xl:mt-62 w-[95%] xl:w-[80%] mx-auto">
          <p className="font-urbanist font-semibold text-base text-white">
            Home <span className="mx-2 mr-3">&gt;</span>FAQs
          </p>

          <p className="font-cormorant font-bold text-[28px] md:text-[34px] lg:text-[48px] uppercase text-white">
            FAQS
          </p>
        </div>
      </div>

      <div className="w-[95%] mx-auto py-[50px] xl:py-[100px]">
        <div className="flex flex-col md:items-start md:flex-row gap-7 xl:gap-12">
          <div className="w-full flex justify-center md:w-[40%] xl:w-[30%] md:sticky md:top-0">
            <img
              src={faqImage}
              alt="FAQ"
              className="w-[280px] md:w-full lg:h-[480px] xl:h-[650px]"
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="w-full md:w-[60%] xl:w-[70%] md:min-h-screen md:overflow-y-auto">
            <h2 className="font-cormorant text-3xl md:sticky md:top-0 md:text-3xl xl:text-4xl mb-6 tracking-wide">
              FREQUENTLY ASKED QUESTIONS
            </h2>

            <div className="space-y-10">
              {faqData.map((group) => (
                <AccordionGroup
                  key={group.key}
                  heading={group.heading}
                  items={group.items}
                  openMap={openMap}
                  setOpenMap={setOpenMap}
                  groupKey={group.key}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faqs;
