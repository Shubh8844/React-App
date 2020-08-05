import React from "react";
import "./Home.css";
import Product from "./Product";

export default function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Events/Pug/Leadup/GW/3000x1200_main_1x._CB409438475_.jpg"
      />
    {/* Product will have id,title,price,rating,image */}
    <div className="home__row">
    <Product 
    id={1}
    title={"Lord of The Ring"}
    price={19.8}
    rating={5}
    image="https://images-na.ssl-images-amazon.com/images/I/51zqvMFEy7L._SX373_BO1,204,203,200_.jpg"
    />
    <Product 
    id={2}
    title={"Apple Mackbook Pro|15 inch (2019)"}
    price={1200}
    rating={4}
    image="data:image/jpeg;base64,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"
    />
    </div>
    <div className="home__row">
    <Product 
    id={3}
    title={"Fossil Smart Watch "}
    price={979}
    rating={5}
    image="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJ8AnwMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABgMEBQcIAgH/xABEEAABAwMCAwQHBQQHCQEAAAABAAIDBAURBiESEzEHQVFhFCIycYGRwRVScqGxI9Hh8CQzQkNigpI0RFNUc3aisvEX/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAEDAv/EABwRAQEBAQEAAwEAAAAAAAAAAAABAhExAyEiEv/aAAwDAQACEQMRAD8A3iiIgIiICIiC3uFS2ioKmrf7METpD7mgn6LmCPUt+9s3q5Ne7dxZVyN379gV0N2hTGDQ19e04JopGA/iHD9VzHnwQZ9usNRM2F8uXxqnn9Svp1lqM9b5cfhUu/eo9lMoM4/VeoXdb7dPhWyD6q705qm8U+o7ZPU3WumibVRiVktU9zSwuAdkE+BKjPEvjieBxacOxsUHXyKjRzCopIJx0kja/wCYyqyAiIgIiICIiAiIgIiICIiCHdr03I7PboR1eYWf6pWD9FzktqdpfaDar7ZLlYqaKqiqIaxrA+Rg4JhG/wBYtIJxu3vxkflqriHiEBF542+ITjb4hB6X1eOIeIXoOHiEHU2jJ/SdIWSc9ZLfA4+/lhZlav7P+0Ozim0/plrKmSrNOyF8wYBHG8DZpJOT0HQEbj4bQQEREBERAREQEREBERAVCuqG0dFUVUmzIY3SOz4AZ+irqDdsWoaeyaKrad8jfSrlG6lgjzu4OGHux4BpPxwO9BpbTenWakbwVl2htnBA6qlqqhoLeoyDuMZ4s5z3LCXe20tLVcm2XltxYNnTNpnRM+HEcn5Y81Zz1LqlzSQAxnst7h/FW765kezBxn8kGRprex4/aSyO/Dt+9ZCK0UL9nSSA/wDU/govJcJ3nq0fDP6ryK6pH96fdgIJZLpuJzeKGrlZ4cYBH0S3aUnqakxVV3o6KPO0szJC0+/APD7zgeajVPd6iB3E3A/AeA/ks/btTcRDJvW8iAHfAjY/zugzjbKdLajjbHVCtdQz084nhG0h9ST1euRvjzXTAORkdFzNHNHPA91K4Ncd8jYh3j7/ANfNb40Jfo7/AKbpajiHpUTBDVxjqyVoGdvA9R5EIJCiIgIiICIiAiIgIiIMVqi/0WmbHU3a4uIhgbsxvtSOOzWjzJ/f0XKep9RV+qrzNdbpJ6zto2A+rCzuY3y/U796nHb9qV1z1JFYad5NNbgHSgdHTOH0aQPeXLVlQ/H7NvQdUHyacyeqNmeHiqKLNwR28aQqZJbfVGvNa1sNaD+ya0NyYyM9Tknp3BBhEVakEJqYRUuLYC9vMI6hud/yUwv9osdRHH9kT08boY3Szcl/MzE3Gds+1vtkjPeVpn4+/HrfZ9Of6/cxJ6hKKpA1jp42yuLYy4Bx8B3lZeqoKeOGV3BG0sYS4tlJLXf2RgjvGN+/ORsFla0zi2dW1suktLI0OceHoD1x5eY8lP8ASWq59PXNlypQZIngMqYA7+tZ1x7xuWn3j7y1csrZqzlu5MhJZ3DPd3j6/wD1Vy39c+2G202oaelpYo57SWNdPWEuDmk9zWkD2e/r1xthbPa4PaHNILSMgg7Fc76B0rYdT3qroLjPXNdyg+HlvawPAcOLuJ6fkT34K6DoqWKio4KSmaWwwRtjjBcXENaMDc7nYdSgrIiICIiAiIgKlV1EdJSzVMxxHDG6R58ABkqqo72iymHQd/eDg+gTN+bSPqg5Ora2W5XKsuVScy1Er5pPxOJJ/VWBOSSepVy4cNK/8WFaoLmloKysjnko6SonZTsMkzooi4RM+84joPMq8s8F5usUlos9NPVNkdzXwwQ8btsbkgZA6d+FJezy6Vz6C/2s1LxQx2OulEDdml5YPWOPaPgTnHcrankfSdk876Z7on1d7ENQ5hwZY2w8TWu8WguJwgi9woKy2VTqW40s9LUM9qKaMscPgVcWa53O3yTQ2mWRslbH6O9jGBxkDtuEAg7+7dZ7Us0lXoLSlTVPdLO2WsgEjzl3La6MtbnrgcTseGV4tv2D9q6R+xzWenekRfaPPxw8zmtxwY7uvwx35U1manLFl54xs2ktS08L5p9PXeKKNpc976GUNa0bkkluwVlQ0tyu80VDQQ1VZKM8uCJrpCB34A6BTHXNj1Yy6X65mnuAtRrqg8fMPDyzI4A8Oc8J8cYXjQlHcazSGqYbJHI6vmko4QYjwu5ZMrnji2w08AzvjA3VRDbhb6y2VTqW40k9LUM9qKeMscPgVQjcWPa4dQcqT6zmusNFZrNfrfLBXW6GQNqZZeMzwvdxMAI2LW+sAQSNyNsKLIJnpe+zWm/2itbMWRU88fHvtyy71wf8pK6wXFQdxUrBnqCP5+S2zN2s3Savpq6CY09FDHHzaRpbI2TG7su4QRnOPLCDfiLxDI2aFkrN2PaHN9xXtAREQEREBR7tDhdUaFv8bQS70CZwA78NJ+ikK8TxMnhkhlbxRyNLXDxBGCg4umZ/Q3kfeyrBSS42uS3Vlfa5weZTSvhJIxngJGfiN1HHAtJB6jYoJb2c/wBbqP8A7frf/UL6d+yQY/s6gOfLNOMfofko5bbpWWs1JoZeWamnfTS+qHcUbxhw3G2fEbrL6Sqr/RsqjZIY6mmmwyqppo45Y5QNxxMd4dxxt4qWyfdF1fQW9nWleIEcVVXub5jMQz8wfkrSW201vOnauy3uCpuFWRJJHwcPocoeOEOJyDv4j+znoQq9+pdU3uRlTcqVzmwxBsMcTWMZFHvhrGNwANjsBv71g6q1V1HJLHU05jdDHzJASPVbxcGev3jhSbzfKcTbSX2p/wDqVdBqCV0tRIytiujney9vKfxZ7uHIGO7pjuWN01LKzs61k2FxHFJQcwA9Wccmfhkt+aua2564qaCppZ4QXSQ8mpqGQRekzRAey+QDjc3bHXfpusFRVN70pKKmINiZVxujc2RrJYqiPYlrmnIcNwk3m+UZG+8R7OdKmbPGKmubDt1j4oyf/Iu+ZURWSvd8uF8mikuErC2BnLgiiibHHCz7rWNAACx7G8Tg0d66Fwc8mJrQS49APFb0rexuoNzp4qGqhbaHNjFTzpCZvCThw3G46brVmgLW6965s1CxuWCpbJJtkcDPXd+QI+IXXCDyxrWMaxgAa0YAHcF6REBERAREQEREGk+2zTTqS7w6hpWfsavEVTts2Vo9Unyc0Y/y+a03eaMwy81gPLfv/P6LsS8WykvNsqLdXx8ymqGcL29D5EHuIOCD3ELnfVelp7HcpLVXeu1zeOnn4dpmdOIeY2Dh3bf4Sg1gqkU80IIilewHrwuIyry52uahkOWkx9x8B+7zWPQXP2hW7n0yo3OT+1dv+fmVSdPM7i4pXnibwuy4nIznB8s7q7tF2qrRNLLR8vjlj5buNgcOHia7ofHhA9xKzDtcXNzWAwUZDCC3iY5x2e1wyS4k7sG533PecqcGB+0K3/nKjc5/rXdfmqUk0sjWNkke5rBhoc7Ib7vBVbjVur66arkjjjfM7jc2PPDk9SMk9+6tk4CuIWcDDKR5NXqmpS8cyX1Yx+amnZ5oer1pd25a6G00zx6TP5deW3xefyBz4A0Veyy/RaSq6m6T0UU89RFy4XTTGINYHAvweEgk4+HD4FdNUVR6XRQVPKfFzo2ycuT2mZGcHzCitf2c2KsuFPOIRDSxBgfRRsaIpAz2c7Z7gDvuBhTBAREQEREBERAREQFEO1S1Q3HRtdUOb/SLfG6rgeNi0sGXDPgW5Hx8lL1RrKdlXST00nsTRujd7iMFBzaIo6uNzHsdKGNL3uDSQ1owOIkdOo326geSwNw0wx5L6V3D/hO38P0V3adSXjS1xfLbjGyu9HNNJzG8Qb6zC7bxyzHxKtK3Ul4q6jnvbRxu34mwUzY2u94b3+aDDTWGuiyeUXDxAP69PzVr9nVecck/NSWPUM/9/RMJ+8x2P1C+yX3iG1NL7uYgwDLNVneRnLb4u2H5q4ZQQUw4pDxuHwA+P8+9XE9wmkJMdO1hPeTlXdhv9fZKn0qnordNUg5ZLVU/MLPw5OB7wM+aC1npJo4pJauKSIRs4mse0sJyMjAPcdt+9dVaSskGntOUFrp2BogiHMPe953c4+ZOSue6W5VettY22WujjFRWVtOyZkYIbwsLQ4gfhYThdNoCIiAiIgIiICIiAiIgIiINW9qmkrJa9L3S72+3xRVs9TFJNNkknikAIGT6oJdkgYC0mfgule1Gn9J0DeGfdibJ/oe130XNJQMZXrDQvC+oPu3ggx5L4hOAT4boOg+zvSlkFl0/f/s+Nt0FCxwnaSMlzepAOCcEjJGVPFi9K03oemLRS/8ABoYY/kwBZRAREQEREBERAREQEREBERBi9VUvpumbtSgZM1FMwe8sOFymDkZXX7gHNLXDIIwQudJOy7VTKuaCC1F0EcjmxzOqYQHtB2djjzuMHcIIWvqnbeyfVRH+y0w99Q1HdlOqh/ulO73VDUEETlPnHJj9uT1G+87BTV/Zfq5vs2oP/DUxfVyutO9m+pW6jtrrha3U9LFUxyzSmohcA1rg4jDXk74x070G/omCONkbfZaAB8F6REBERAREQEREH//Z"
    />
    <Product 
    id={4}
    title={"Amazon Alexa"}
    price={179}
    rating={5}
    image="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUTExMWFhUWGBcXGBYXFxoZFxYYFxgYFhYSGBgaHSggGholGxcYITEiJSkrLjAuGB8zODMuNygtLisBCgoKDQ0NFQ8PGi0lIB03NDcrKzc3NzcxLjMrLjcsKzcrNzArNzcrMjc2OC03LTI3NzctNzcrNy03KysrKzctNP/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEBAAIDAQEAAAAAAAAAAAAAAwECBAcIBgX/xABHEAABAgMFBQQHBAcHBAMAAAABABECITEDQVFhcQSBobHwBRKRwQYiMlLR4fEHExRCI2JygpKishYzQ1OTwtIkNERUFWNz/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECBAP/xAAoEQEAAgAEAwgDAAAAAAAAAAAAAQIDEhMxQXGRBBQhMkJRUtERwfH/2gAMAwEAAhEDEQA/AO8UREBERAREQERfhduelez7K8MUXetB+SGZH7RpDzyQfuouru0ftDto3+77tmMh3ovE+QC+f2vt61tPbtI4sjETwQdz23aNjB7VrBDrEAea4Vr6TbJDW2h3CI8gunIdoMV4GpA4KUe1MWfwLojuGP0w2Qf4hOkEXmFGL022UXx/w/NdR/iViHaGpJU/Lt0em2y4x/w/NUh9MtkP54hrBF5BdOx7UYpkme6vJPxKDumz9KdkipbDeIhzC5tj2rYR+zbWZyEcL+Drof8AFre02kw1I3RA8ioPQIKLoTZe2rSznZ2kUP7MRHIr9zs/7Rdps275htRhGGP8QY+LoO30Xyno/wCn2y7SRBEfubUyEMZHdiOEMdCcixOC+rRRERAREQEREBERAREQEREBERB8j9oPpFFs1nDZWUXdtLSsV8EE5j9YkMN97LpLbra0hPrPO/3s3vX2npjtptdst3pDEbMC71GBGkn/AHtF+RFs4IN492KYo9c8CCV04elamS/hPv8Ablxdat89PGOMbdHzMO3kVVoO0Riv0LXsmzi/LFD+zO9qTluC459HBEfVtYXwikefkk9lv6JieU/bPfKR54mvOP3DSHbQVSHags/2N2r8sMMWkYH9TLX+yG3D/wAePdFBFyiK87YWJXeJbr2rAtteOrcW4xWYbUXnw+aifRrbR/49tus4jyC1/wDgts/9faP9G0/4rGWXpqUnaYXithc+9lqbcYqB7D2z/wBfaP8ARtP+K1/s3txps1vvs4hzCZZNSvGVYtqAvUY9uhF6wfQ7tE02a03mCH+qIJ/YLbj7UMMH7VoD/R3lquFe20SxbtOBXe8dXHte1AL1wrXtbBfpRehvc/vdos4cQJniRyVbHsTZoPftTnIYfqg+JXrHZb+qYjnLz75hz5Im3KJ/j8bZo7S2i7sIMRvwAxJuC71+zL0kjjP4O3jMccEEJgjNYmDRQE1JAAiDzYl7l1rZS9WAQwQ/qj5MDu3rm9gbV9xtFlaD8toCTiHHenWcJMyl9GlJrWc0zx4Ryaw9a94veMsRw3mebv8AREXM6hERAREQEREBERAREQEREHQna0ZO0WxoTbW1b3jJGmvNlmC3ABAnfVySad15gmc/qJdpxNb2k2H3trEf9SINx81gGjSd6uBdJ7tRW7BVF4XL3zqHAHdlWTtMa5j1ZRTkGrQAAYEGTNSHTvSmITgRYAVvl3e65ZiJMBfRnPshzYSwwJkG7oJIIeGRqYgKxRMGIHhkCzXwvDe/tby9fzXwuL2Ha1vCzW1oCaA2kUR/h736pwdohSZ4htZtOcrmE6OCHmBldKGIk4tC7iRx7tS7GpYESEzUQiKkJe5pYth0tvEP1R6U7RDS3iIZ5gHiROU3lURUkaf2x2sA/pKYwQ+Ps9UqQvnLWN6EgTcgAH3qGlTU/mL/AJQomhIzNRQh+85mzYsWmWiACuefdnQwvjHR9Laemm1/5v8AJD/xfd5grjR+l+1n/HOFIRxbCb4OaL5t/Gcnuwq4JyuZpmJax2xDVuwcnBsXaQvHugpnn3NDC+MdH7W0dv7TFW3tf3YzDqGBrPxIGJXFttoijnFFEX97vRXnE6fy3lfmQ2jk8bpXzwbm96tAXLGVzPRi1bpv0ApmlqMOldohaESkwxwozDxb+E6Whm1740LjF5GINocb+MI3pV86Tu8ZVkRUB7QReY+txz1cVlG1oQ1DvyzxbF1SMMDdz38OCmIuV2d86jNLSKR0l1v4oPRcBkNFstLH2RoOS3UUREQEREBERAREQEREBERB587SP6e2LzFraOJ078TCXLNYhEwWrN6VucSAAGdHFE7VH6e2b/MtNT68T8iNy02ergE3mcqVNQBe+TihVRSOQxudg0y4kwal+plDM7GtH9p3m9L/AMxDAue81Y5TtouFS0rqDFg/7lwhWYiGiDh72mWxat9a+tjFIJbVIGVb4ryXkwqTTA09kwrEFvIFySWpVzMToTe5kXctCWWtruBvxcyaVcGGDCQDzt8RlO7QAyIJJyJmfVYANLRwLwwGF5lW/XexEIUSK3OMTT2p35v+9WSyfZLMKETniROriF82c+yAZ2wL1DyOdHc43xfzZINIqCeLuSGqdzVlMCYmSFoYje+DSvIFBIXS3CTqZE24m4NUk0rucn8zBFMTb4NVmF1GGOZQbQxZt8qB/E4CtGVbCJzTcJcKUlkzUBUoY3OH14F/DRltCzgtjSV9G8txdyg5EJBwcbjVmxoNZYwztZxT82wnMb63PgVxYYn6IOuPnLEK8B51v4a7tCg5MBbHH5jq/NIr+m+Dea1hOB694PrxxKzaGW6nXU0Ho2w9mHQclRTsPZh0HJUUUREQEREBERAREQEREBERB577Ria3tmvtbSRFT34uDqVjHR97HCTl7pGeV7F69qRfp7d6feRi5vbiDTvXHiMhxD+Jnc7T+BVRa2ji70spsHNHZ6Uvl6ouhnOKRwGpeYN4oZzv3xS3jM/BzQkylPSpwwhKl3ou8agz319Yk0ABd6zMu8QEEdoiYUZ2YGZahdi9zNSXdEoQ+gGTkuBQzfKRc7jRhCyzGSJAUNz3SYtSjMMCB7LqVrPNxeHyJIFXdmvZvZAKCQIqJmvvSIe/Q6s9zLS0IqTLENQThLgYTf8AewCxaxljMm+btNhW+4vexNAQYRRibF98/HB8NaEIMiKs2rQF6u85jHJ3vCxEAADLO5m0obsnafeWkJqKeHiTi+NHejLNmMyJ4HGr0HWIQYswzynMM2GVw+DUC5EBEvhqAJjd4A1XHYUbwbk9RTc0wHVIA0tfgZE7t7GsgtD0NMD1R6grkCN76eIbSX1wK48B6wvLcOdXVQZ/KY00ypoUHIhEj8qe8Oua2eXDrx4rFnTxPjf1jmtYiw3bh05QekrD2YdByVFOw9mHQclRRRERAREQEREBERAREQEREHnrtaL9NbBq2tocH9eL4cVJnEmNanjuauT3LftYn8Rb3/pLT+ouOSnAHoJFtPr9clUbwZGbOZM9GL4Nde2EMTxjJcUk5lNqmcXjPfVlQkGQHRAD6Ndk1ISTG3JM8M2FHmWpN30M5IJRRyuGQDMxnIYNS7utWEkxjqKObmDm5mFZBmDU7okHW0VpIu0smAZg2TSGUgJglR7wd3aR1wxrUED9kUdBpE5dmAlmIga0qOdzAFQiiGM2uIngdfj7q2tTWtZzqS1WzHwk60ji1vr4CF6XNg8qTQaHjWdX6fzky1eXxPhdnxxIWsLXOb/LrjIBZoA05eDX5799Qg3hhM+sJMdG3NiVSGLIz3tNr6u+98SpwGu7XTjvpitrK7k7hvO/XUhBSANze4316xxXIs6scfBi0sh8qMoAjTfJpkc343lWswevDz8sEFoYuvPrHNbRkz0WsMWM7978Pm6EvTA9cUHpaw9mHQclRTsPZh0HJUUUREQEREBERAREQEREBERB567Wge1tpBjaWtJl++XzdoemKheC7MavQCTm5w1+AOKt2nF/1FriLS0lO6M/PxdRiLMZO76z9Y4A0ulW4qo0MUzfllKvETwajrFqQMMahriCH35VM5PvEQZYSNSJgTd51HEe8VC0jJeZrXeTJ7r8KkyQSjIumWrQAi4YGhxxm6hFEX0kwDDB9zXUAYTBKraY1ed4bOdN9xxMSlFG1HNWIeWjezuo3vOg49tA85gXGWNZDPoKUcAnMNnXB9btzUDqloWBoBKbM5kKY6Sm15KjERVg0hlVjfLD+VBqNN8iJFs8GzZistlzL3GR899AhOGMyzvdvn4s1y0Iv0Mp9U4ZBBWzHHfq2OHgKrbvY33VfPPz8FpZmVK0m9R58dTLcZz+Zxvl41E2QUhi8883l4/VWgiuN9B1f9Dco2UX1wpX45vQq1iJu3ww3dDBBaTHrfljh4rBJY+HwHWKyIj11X63hTeR0+YQenNn9mHQclRT2f2YdByVFFEREBERAREQEREBERAREQed+2QfxFrP/EjfTvli3VylCHmDSeNCZ1Y4z1xVu1oz+ItWB/vbQb+/EMHaa41pGZCocCWdzUfhxVRmIDvNywkBStw8AKkqUV5kXN5c4mga7S8yC2cNoDIOzMBU1mZnNqklStXZ3YvN77r5A+ApcEE44pOOJL3ERTpV54i8lQtBhdmQJH+VgxybF1U0l4PPEFzmXn7zmsuKSQXNcXowYRZM40kSHJQSiBBM5A4NN6DDQUdr1EGtZ00BAZq5cJFXMcxhdcNKywydqlaRiTPkBuM55XZ4oJxTMg3UvHyaTLBEx1WuvWCyJ3NKuunh83bAmNcvhX5DAoMhne7z3V+b1KpBToXPXd5i5ShGbvfN8bt54iZZWhMvOjB3d/hqKIKwTPT58+OBVjM5H6Tw6GCjZYz0kMvPjgZbQxdcJ8uFWQciDxoPPx4cFpEGBP00C2gi+PXx+S1jMj1myD07YezDoOSop7P7MOg5KiiiIiAiIgIiICIiAiIgIiIPOnbH/c2zf5tpWh9aK5t25TJdud7muRLt9Hana5baLb/9LQ1wj+eTGa48DjxEjfV758BxVRtFJ+WeTV+oEyWlamVZHAvINWTEu3hgCqWkTPLOVCWGT3jRxeS0I4b2PDQOxrppQFBpoRQF75zM8b3P7TTDce0iaelW1qcjfi5qyoIswdAGuNb8c60IULQZ4EkZl78QxnregjaB6uKai6h6xmzSN0zfU9Njv95UNTl4Sm1KZZTmynG0xuk+o6wnWSDThLk1R1XElbMQGGLO29pdYUKkGuuH10x3vUrYm8y39cMZXoNzE5nx1d6b+IuW4IxMuGIyp5iixZwy8sGnXpq0ZbQ+G9tTl5NgEG8EVzGXxbS+nkQuRZ9HXHq7EBQAc+R4N1lRWgPDx65tiEFCOsOurktIZGlE73w0nTr4LEQkdPFB6e2f2YdByVFPZ/Zh0HJUUUREQEREBERAREQEREBERB5z7Z/7i1Id/vbSX7534081xe6IpDCjiobyrdPMrldtQD7+2k5+9tZYetE8Xh4Lj2Zk0XKokWiF9Wam4yqNTCdX1cSADAXMTPOUytozKQngZSoHzcNWdKOsWkTCVbzpgR8q4xBTtAwmGD6C4GQrfLNhUlBxrQgzYFyA1XqAKTxwOjKUVr41kH+pvzrRlW0mbtK1va8nG+6QChFDNnNWYTFZsb3nrizIJGkuZeZd51o+51Im+7Wl9/QqtzBLfmedzCt9bmUu9Uac6u0+jRAELGvMMQXzZvnekJzyyl9d28p3BIvIYSpN50Pxe9awxbn3dV6dBWGvjwM2am6laLLZUbL6M25sHWsOQ35iT5N1JbA1a7dTkeTYOgpBPqWnWmCrZ8uUjddzbELWyLbhpRgxHzywW4Y3fHrqoQUgHXjJ+uS2iEm639XrSEmnWj9cktKHT4oPUGz+zDoOSop7P7MOg5KiiiIiAiIgIiICIiAiIgIiIPOvbcQ/EW1/6S0P85Z5UquFAC4xALidSzjxOk8CuZ2tLaLa4/e2s/3y0+HRXChkGFL8LpSL8xNr5VGbQlnnLx1LBmALu0tSFO1iZzfvkzAhhO8AtiwmSqxEkHcbi7ByXulOVK1YKUcLesMa6BpDH1mvM2dyUECZ5mdzzwAN+VWlIBTtYwWBGFL3E3lNzJrzky2tPafV8S9XaV1B7rCinakEzqPP1SGvnKV8qMUEI23V+HLe2U596Z8ZHd0d9FtHFnUNiLpyM+HBTtNJyelRXryQCcZ/Vy2YJv5MtIIcMxOTeOtM81mEzvlfyE+fkyyTfype3Np+YQbD6XNUbqeVFSGnwkOq9FTgyGXjLHJuBojdcPgJ4sUFYYxx+QDcMfBXgLXdGYL8d2RChZHrDi5prvCsMcz8R8eOKCojZsuusPBaxGR0NFjT6eNKUyyWbW/Tnqg9RbP7MOg5Kins/sw6DkqKKIiICIiAiIgIiICIiAiIg85duxf9RbQ3i2tZl/fiNL2ZpZLhmRLzY9AtPLhev2fTXY/u9v2mEiRtDGJkOLQd+Wne3L8Yw0oSaZnFhM4783VRsb6SLzOAvN054NPBSLibNg4yYQ1ce1rPEypaXjR7mvd9HPHAKRJvlWl+dXHFpXmQQjE7pnwm1aDCVKCjqDvv0M6N8hoMVS2iYh7jkGI5YEVDMKKTN8cB04loEE4jlnrSefTSdStNCw8Zyn48QKTVDDw59c8yp2u4nwNGEuHBBMmfR49O2AWIRlf8W6z0QQyu6unXTJrnVIS/T9UNfIIEJ5YcC/hPQqkEL9fHPxvrKYZ2fL/aPHjSrraBtd7u8r9d75oN4NeOPOW/eFY+Qvn1fxxUoZ0v6fH46qsEVenafj0L0FYPlLl9fgsxFwcWvn06m8j11S/yXM7F2U220WVkB/eWkEEsDEHJ0AJ3IPTVkPVGgW6IooiIgIiICIiAiIgIiICIiDqn7YOxo4Y4drgBMEUIsoyPyxB+5EciC2DgYrriCM5TN3gIWk+nxC9L7ZssFrBFZ2kIigjBEUJoQbl0l6Z+gtrsRitLMG02eoimTZNdaAXN+cSxa8PliTezNMkSd3d3YkM+F+C0wAd8GIaTzwHJ39pgsEkCYcSnduPV2CmbQzLjV5l73Z5Z61ZVGkUUzJmN0iG3y8txUrQtukwAaUmyFNKVW0dGMhfT1W8t0mxUzMzyDXSHDyEplBIxYi8kO10rqeW9TNowYTbXMb8OGarbRBpijNJsm48byVJ+tzeEuig1qXavW96cLiskAG643HTlvbEBaRHo+DZhbGPPq/I/XBBtCAbvPJm3081u/VXr4vPXVlIn5DXn56reGIefzz80G8L0rpfeCD1jV1bvb+uf1xXHNr18x0a1dbQmvP59cUHIhLPjp1h0y+9+yDsKK22r8SR+jsHn71pFCYRDmwi7x/dxX4foX6G2/aEQMINns4PrW5DCVYbIH+8iqH9kTdz6p7+7I7MstmsobGxh7sEAYC84xE3kmZKiuYiIgIiICIiAiIgIiICIiAiIgIURB8V6RfZts20Ex2JOz2hqYA9nEf1rOQ/hI3rrbtv0A2/Z3P3At4Q/r2Bctc9nKJ7/AGYtV38iDyhb2ohi7kXegjhLmGINEMAQWI6vmpi1HveXTdYr1Vt/Z9jbw922srO1h920ghjHhECvl9u+zDsq1rsogP8A9UcdmP4YIhDwQed4yLiBpLqS0MfTjrreu79p+xLYIi8NttUGQtICP5rMniuFH9hWzXbXtA1Fmf8AaEHTUUWl9/XXHUWmJHXXTBdzQfYTs1+2bQdBZj/aVyrD7DdgBBittqjy79mAfCzfig6O+/GPXXWKDahFEIQ8URpCJxE4ACZK9GbD9lHZNkQfwvfIvtLSOP8AlMXd4L6ns3sjZ9nHdsLCyshhZwQwf0gIPO/YXoB2ltTGHZjZQn8+0fox/CQY/CFdm+jX2R7NYtHtcZ2qMflI7tiMu45Mf7xY4LshEGtnAIQBCAAAwADAAUAFwWyIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIP//Z"
    />
    <Product 
    id={5}
    title={"One Plus"}
    price={300}
    rating={5}
    image="data:image/jpeg;base64,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"
    />
    </div>
    <div className="home__row">
    <Product 
    id={6}
    title={"Dyne|Soft Blanket"}
    price={49}
    rating={3}
    image="https://m.media-amazon.com/images/I/516q9yRVy5L.__AC_SY200_.jpg"
    />
    <Product 
    id={7}
    title={"Intel SmartPhone|16 GB"}
    price={100}
    rating={5}
    image="https://m.media-amazon.com/images/I/31r5+bXhl0L.__AC_SY200_.jpg"
    />
    <Product 
    id={8}
    title={"Dress"} 
    price={40}
    rating={4}
    image="https://m.media-amazon.com/images/I/31k2FlXs0OL.__AC_SY200_.jpg"
    />
    <Product 
    id={9}
    title={"Mens| T-shirt"}
    price={10}
    rating={3}
    image="https://m.media-amazon.com/images/I/31dLfbWuTtL.__AC_SY200_.jpg"
    />
    <Product 
    id={10}
    title={"Boat| Power Bank"}
    price={75}
    rating={5}
    image="https://m.media-amazon.com/images/I/41OC20VDxUL.__AC_SY200_.jpg"
    />
    
    </div>

    <div className="home__row">
    <Product 
    id={6}
    title={"Samsung C4956Ho QLED|Ultra HD|Gaming Monitor"}
    price={450}
    rating={5}
    image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT98p8OCd5GmygiUMC8hOx78q8xl7BaX8G_GA&usqp=CAU"
    />
    </div>

                   

    </div>
  );
}
