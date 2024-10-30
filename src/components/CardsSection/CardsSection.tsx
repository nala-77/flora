import Card from "../Card/Card";
import Title from "../Title/Title";

const cardInfo = [
  {
    image: (
      <svg
        width="41"
        height="40"
        viewBox="0 0 41 40"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M34.3218 1.99558H31.4021C30.0771 1.99707 29.0034 3.01711 29.0019 4.27584V6.70941L22.3078 0.662069C21.344 -0.22069 19.8178 -0.22069 18.854 0.662069L1.47667 16.3606C0.688835 17.0717 0.440122 18.1688 0.849955 19.1249C1.21875 20.0545 2.15685 20.6684 3.20253 20.6644H3.73589V37.6663C3.74905 38.9656 4.86678 40.0096 6.23445 40H34.9255C36.2932 40.0096 37.4109 38.9656 37.424 37.6663V20.6644H37.9574C39.0031 20.6684 39.9412 20.0545 40.31 19.1249C40.7198 18.1687 40.4711 17.0717 39.6833 16.3606L36.7222 13.685V4.27584C36.7205 3.01711 35.6468 1.99707 34.3218 1.99558ZM30.4056 4.27584C30.4063 3.75328 30.8521 3.3298 31.4021 3.32909H34.3218C34.8719 3.3298 35.3176 3.75328 35.3184 4.27584V12.4168L30.4056 7.9776V4.27584ZM39.0059 18.6309C38.8446 19.0494 38.4265 19.3286 37.9573 19.3309H36.7221C36.3344 19.3309 36.0203 19.6295 36.0203 19.9977V37.6663C36.0076 38.2293 35.5181 38.6765 34.9254 38.6664H6.23437C5.6417 38.6765 5.15217 38.2293 5.13951 37.6663V19.9977C5.13951 19.6294 4.82525 19.3309 4.4377 19.3309H3.20244C2.73331 19.3286 2.31517 19.0494 2.15389 18.6309C1.95543 18.1812 2.07082 17.6618 2.44372 17.3267L19.8233 1.62288C20.2431 1.22877 20.9186 1.22877 21.3385 1.62288L38.7166 17.3247C39.0901 17.6604 39.2052 18.1807 39.0059 18.6309Z" />
        <path d="M10.0523 23.9982C10.0494 27.6801 12.1784 31.0653 15.5927 32.8078C19.007 34.5502 23.1533 34.3676 26.3833 32.3325L31.0252 36.743C31.5562 37.2473 32.33 37.4442 33.0551 37.2595C33.7803 37.0747 34.3466 36.5366 34.5409 35.8476C34.7352 35.1587 34.5278 34.4237 33.9968 33.9194L29.3527 29.5115C31.8445 25.943 31.6681 21.2633 28.9142 17.8732C26.1603 14.483 21.44 13.1346 17.1746 14.5196C12.9092 15.9047 10.0456 19.7159 10.0523 23.9982ZM33.008 34.8661C33.1408 34.9886 33.2157 35.1569 33.2157 35.3327C33.2157 35.5085 33.1408 35.6769 33.008 35.7994C32.7345 36.0567 32.294 36.0567 32.0206 35.7994L27.5064 31.511C27.8567 31.2195 28.1863 30.9064 28.4932 30.5735L33.008 34.8661ZM29.7038 23.9982C29.7038 28.7852 25.6188 32.6658 20.5799 32.6658C15.541 32.6658 11.456 28.7852 11.456 23.9982C11.456 19.2111 15.5409 15.3305 20.5798 15.3305C25.6164 15.336 29.6979 19.2134 29.7038 23.9982Z" />
        <path
          d="M17.4434 17.2967C14.6586 18.4769 12.8636 21.1012 12.8597 23.9981C12.8597 24.3664 13.174 24.6648 13.5615 24.6648C13.9492 24.6648 14.2634 24.3663 14.2634 23.9981C14.2671 21.6274 15.7364 19.48 18.0154 18.5141C18.2493 18.4201 18.4114 18.2133 18.4393 17.9735C18.4673 17.7337 18.3567 17.4982 18.1501 17.3579C17.9436 17.2175 17.6733 17.1941 17.4434 17.2967Z"
        />
        <path
          d="M20.5799 17.9975C20.9675 17.9975 21.2817 17.699 21.2817 17.3308C21.2817 16.9626 20.9675 16.6641 20.5799 16.6641C20.1923 16.6641 19.8781 16.9626 19.8781 17.3308C19.8781 17.699 20.1923 17.9975 20.5799 17.9975Z"
        />
      </svg>
    ),
    title: "Search Apartment",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae.",
  },
  {
    image: (
      <svg
        width="42"
        height="40"
        viewBox="0 0 42 40"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M35.4832 1.99558H32.406C31.0095 1.99707 29.8779 3.01711 29.8762 4.27585V6.70941L22.821 0.662069C21.8052 -0.22069 20.1967 -0.22069 19.1809 0.662069L0.866098 16.3606C0.035758 17.0717 -0.226372 18.1688 0.205571 19.1249C0.594259 20.0545 1.58297 20.6684 2.68506 20.6644H3.2472V37.6663C3.26107 38.9656 4.4391 40.0096 5.88056 40H36.1194C37.5609 40.0096 38.7389 38.9656 38.7528 37.6663V20.6644H39.3149C40.417 20.6684 41.4057 20.0545 41.7944 19.1249C42.2264 18.1687 41.9642 17.0717 41.1339 16.3606L38.0131 13.685V4.27585C38.0113 3.01711 36.8797 1.99707 35.4832 1.99558ZM31.3557 4.27585C31.3565 3.75328 31.8263 3.3298 32.406 3.3291H35.4832C36.0629 3.3298 36.5327 3.75328 36.5335 4.27585V12.4168L31.3557 7.9776V4.27585ZM40.42 18.6309C40.25 19.0494 39.8093 19.3286 39.3149 19.3309H38.013C37.6044 19.3309 37.2733 19.6295 37.2733 19.9977V37.6663C37.2599 38.2293 36.744 38.6765 36.1194 38.6665H5.88047C5.25583 38.6765 4.73989 38.2293 4.72654 37.6663V19.9977C4.72654 19.6294 4.39532 19.3309 3.98687 19.3309H2.68498C2.19053 19.3286 1.74983 19.0494 1.57985 18.6309C1.37068 18.1812 1.4923 17.6618 1.88532 17.3267L20.2025 1.62288C20.645 1.22877 21.3569 1.22877 21.7994 1.62288L40.1151 17.3247C40.5087 17.6604 40.6301 18.1807 40.42 18.6309Z" />
        <path d="M28.7951 20.8046C28.3519 20.8046 27.9388 20.9261 27.5959 21.1331C27.3004 20.3769 26.4991 19.8325 25.5598 19.8325C25.1165 19.8325 24.7035 19.954 24.3605 20.1611C24.0651 19.4048 23.2638 18.8604 22.3244 18.8604C21.9319 18.8604 21.5631 18.9557 21.246 19.1219V15.9442C21.246 14.872 20.2786 14 19.0891 14C17.8995 14 16.9322 14.872 16.9322 15.9442V27.3088L13.9675 25.9722C13.5211 25.7709 13.0206 25.665 12.5213 25.665C11.3847 25.665 10.4615 26.4981 10.4615 27.5275C10.4615 28.0242 10.6761 28.4899 11.0654 28.8408L18.0387 35.1263C19.6143 36.5475 21.7119 37.33 23.9421 37.33C27.8073 37.33 30.9521 34.4954 30.9521 31.0114V22.7487C30.9521 21.6765 29.9847 20.8046 28.7951 20.8046ZM29.8736 31.0114C29.8736 33.9598 27.2119 36.3579 23.941 36.3579C21.9987 36.3579 20.174 35.6764 18.8022 34.438L11.8279 28.1526C11.6424 27.9863 11.54 27.7637 11.54 27.5217C11.54 27.0337 11.98 26.6371 12.5213 26.6371C12.8546 26.6371 13.1868 26.7081 13.4855 26.8422L17.2309 28.5298C17.3981 28.6046 17.5976 28.5968 17.7551 28.5084C17.9136 28.4199 18.0107 28.2634 18.0107 28.0952V15.9442C18.0107 15.4085 18.4938 14.9721 19.0891 14.9721C19.6844 14.9721 20.1675 15.4086 20.1675 15.9442V25.179C20.1675 25.4473 20.4091 25.665 20.7068 25.665C21.0044 25.665 21.246 25.4473 21.246 25.179V20.8046C21.246 20.269 21.7291 19.8325 22.3244 19.8325C22.9197 19.8325 23.4029 20.269 23.4029 20.8046V25.179C23.4029 25.4473 23.6445 25.665 23.9421 25.665C24.2398 25.665 24.4814 25.4473 24.4814 25.179V21.7767C24.4814 21.241 24.9645 20.8046 25.5598 20.8046C26.1551 20.8046 26.6382 21.2411 26.6382 21.7767V25.179C26.6382 25.4473 26.8798 25.665 27.1775 25.665C27.4751 25.665 27.7167 25.4473 27.7167 25.179V22.7487C27.7167 22.2131 28.1998 21.7767 28.7951 21.7767C29.3904 21.7767 29.8736 22.2132 29.8736 22.7487V31.0114Z" />
      </svg>
    ),
    title: "Select Apartment",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae.",
  },
  {
    image: (
      <svg
        width="43"
        height="40"
        viewBox="0 0 43 40"
        xmlns="http://www.w3.org/2000/svg"
      >
          <path d="M34.7953 1.99558H31.8756C30.5506 1.99707 29.4769 3.01711 29.4753 4.27584V6.70941L22.7812 0.662069C21.8175 -0.22069 20.2912 -0.22069 19.3274 0.662069L1.95011 16.3606C1.16228 17.0717 0.913564 18.1688 1.3234 19.1249C1.69219 20.0545 2.63029 20.6684 3.67597 20.6644H4.20934V37.6663C4.2225 38.9656 5.34023 40.0096 6.7079 40H35.399C36.7666 40.0096 37.8844 38.9656 37.8975 37.6663V20.6644H38.4309C39.4766 20.6684 40.4147 20.0545 40.7835 19.1249C41.1933 18.1687 40.9446 17.0717 40.1567 16.3606L37.1957 13.685V4.27584C37.194 3.01711 36.1203 1.99707 34.7953 1.99558ZM30.879 4.27584C30.8798 3.75328 31.3255 3.3298 31.8756 3.32909H34.7953C35.3453 3.3298 35.7911 3.75328 35.7918 4.27584V12.4168L30.879 7.9776V4.27584ZM39.4794 18.6309C39.3181 19.0494 38.8999 19.3286 38.4308 19.3309H37.1955C36.8079 19.3309 36.4937 19.6295 36.4937 19.9977V37.6663C36.4811 38.2293 35.9915 38.6765 35.3989 38.6664H6.70782C6.11515 38.6765 5.62562 38.2293 5.61295 37.6663V19.9977C5.61295 19.6294 5.29869 19.3309 4.91115 19.3309H3.67589C3.20676 19.3286 2.78862 19.0494 2.62733 18.6309C2.42887 18.1812 2.54426 17.6618 2.91717 17.3267L20.2967 1.62288C20.7166 1.22877 21.3921 1.22877 21.8119 1.62288L39.1901 17.3247C39.5636 17.6604 39.6787 18.1807 39.4794 18.6309Z" />
          <path
            d="M9.29858 24.7083C9.29858 30.6038 14.3482 35.4007 20.554 35.4007C26.7598 35.4007 31.8092 30.6038 31.8092 24.7083C31.8092 24.3564 31.7918 24.0084 31.7571 23.6653C31.7161 23.2648 31.3427 22.9731 30.9191 23.0101C30.4975 23.0489 30.1886 23.4047 30.2294 23.8062C30.259 24.1026 30.2744 24.4039 30.2744 24.7083C30.2744 29.7998 25.9135 33.9426 20.554 33.9426C15.1943 33.9426 10.8334 29.7998 10.8334 24.7083C10.8334 19.6166 15.1943 15.4737 20.554 15.4737C22.4172 15.4737 24.2303 15.9781 25.7958 16.9337C26.1529 17.1514 26.6268 17.0533 26.8568 16.7141C27.0862 16.3749 26.9818 15.9238 26.6256 15.706C24.8115 14.5998 22.712 14.0156 20.554 14.0156C14.3482 14.0156 9.29858 18.8128 9.29858 24.7083ZM21.2907 26.9242C21.44 27.0669 21.6365 27.138 21.8329 27.138C22.0294 27.138 22.2258 27.0669 22.3762 26.9251L33.6316 16.2324C33.9314 15.9477 33.9314 15.486 33.6316 15.2012C33.3319 14.9164 32.8459 14.9164 32.5459 15.2012L21.834 25.3777L17.7718 21.5185C17.472 21.2337 16.986 21.2337 16.6862 21.5185C16.3864 21.8033 16.3864 22.265 16.6862 22.55L21.2907 26.9242Z"
          />
      </svg>
    ),
    title: "Confirm Apartment",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae.",
  },
];

function CardsSection() {
  return (
    <section className="py-12 px-70">
      <Title
        mainTitle="How it Works"
        subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing eli"
      />
      <div className="flex justify-between items-center gap-11 mt-14 flex-wrap max-950:justify-center max-500:mt-11">
        {cardInfo.map((element, index) => {
          return (
            <Card
              key={index}
              image={element.image}
              title={element.title}
              desc={element.desc}
            />
          );
        })}
      </div>
    </section>
  );
}

export default CardsSection;
