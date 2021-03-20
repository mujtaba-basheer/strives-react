import React, { useEffect } from "react";

const SizeChart = ({ setShowSizeChart }) => {
  function hideSizeChart() {
    setShowSizeChart("false");
    document.getElementsByTagName("body")[0].style.overflow = "auto";
  }

  function escFunction(e) {
    if (e.keyCode === 27) hideSizeChart();
  }

  function handleClickOutside(e) {
    console.log(e.target.className);

    if (e.target.className === "sizechartmodal") {
      hideSizeChart();
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);
    document.addEventListener("click", handleClickOutside, true);
    if (document.getElementById("sizechartmodal").display === "flex") {
      document.getElementsByTagName("body")[0].style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <div id="sizechartmodal" className="sizechartmodal">
      <div className="sizechartmodal__content flex">
        <span onClick={hideSizeChart} className="sizechartmodal__close">
          &times;
        </span>

        <div className="sizechart__container">
          <p className="main__heading">Size Chart</p>

          <p className="text">
            These are to-fit body measurements (not garment measurement). If you
            have already purchased an item from Strives, we recommend you select
            the same size.
          </p>

          <p className="secondary__heading">
            UPPER - Kurtas / Kurtis / Dresses / Tops
          </p>

          <div>
            <table>
              <tr>
                <th>Size</th>
                <th>XS</th>
                <th>S</th>
                <th>M</th>
                <th>L</th>
                <th>XL</th>
                <th>XXL</th>
                <th>3XL</th>
                <th>4XL</th>
                <th>5XL</th>
                <th>6XL</th>
              </tr>
              <tr>
                <td>BUST (inches)</td>
                <td>32"</td>
                <td>34"</td>
                <td>36"</td>
                <td>38"</td>
                <td>40"</td>
                <td>42"</td>
                <td>44"</td>
                <td>46"</td>
                <td>48"</td>
                <td>50"</td>
              </tr>
              <tr>
                <td>SHOULDER (inches)</td>
                <td>13.5"</td>
                <td>14"</td>
                <td>14.5"</td>
                <td>15"</td>
                <td>15.5"</td>
                <td>16"</td>
                <td>17"</td>
                <td>17"</td>
                <td>18"</td>
                <td>18"</td>
              </tr>
              <tr>
                <td>WAIST (inches)</td>
                <td>30"</td>
                <td>32"</td>
                <td>34"</td>
                <td>36"</td>
                <td>38"</td>
                <td>40"</td>
                <td>44"</td>
                <td>46"</td>
                <td>48"</td>
                <td>50"</td>
              </tr>
              <tr>
                <td>BUST (CM)</td>
                <td>81</td>
                <td>86</td>
                <td>91</td>
                <td>97</td>
                <td>102</td>
                <td>107</td>
                <td>112</td>
                <td>117</td>
                <td>123</td>
                <td>127</td>
              </tr>
              <tr>
                <td>SHOULDER (CM)</td>
                <td>34</td>
                <td>34</td>
                <td>37</td>
                <td>37</td>
                <td>41</td>
                <td>41</td>
                <td>44</td>
                <td>44</td>
                <td>48</td>
                <td>48</td>
              </tr>
              <tr>
                <td>WAIST (CM)</td>
                <td>76</td>
                <td>81</td>
                <td>86</td>
                <td>91</td>
                <td>97</td>
                <td>102</td>
                <td>107</td>
                <td>112</td>
                <td>117</td>
                <td>123</td>
              </tr>
            </table>
          </div>

          <p className="secondary__heading mt-3">
            LOWERS - Pajamas / Ghararas / Skirts / Trousers
          </p>

          <div>
            <table>
              <tr>
                <th>Size</th>
                <th>XS</th>
                <th>S</th>
                <th>M</th>
                <th>L</th>
                <th>XL</th>
                <th>XXL</th>
                <th>3XL</th>
                <th>4XL</th>
                <th>5XL</th>
                <th>6XL</th>
              </tr>
              <tr>
                <td>WAIST (inches)</td>
                <td>28"-32"</td>
                <td>30"-34"</td>
                <td>32"-36"</td>
                <td>34"-38"</td>
                <td>36"-40"</td>
                <td>38"-42"</td>
                <td>40"-44"</td>
                <td>42"-46"</td>
                <td>44"-48"</td>
                <td>46"-50"</td>
              </tr>
              <tr>
                <td>LENGTH (inches)</td>
                <td>39"</td>
                <td>39"</td>
                <td>39"</td>
                <td>39"</td>
                <td>39"</td>
                <td>39"</td>
                <td>39"</td>
                <td>39"</td>
                <td>39"</td>
                <td>39"</td>
              </tr>
              <tr>
                <td>WAIST (CM)</td>
                <td>71-81</td>
                <td>76-86</td>
                <td>81-91</td>
                <td>86-96</td>
                <td>91-101</td>
                <td>96-106</td>
                <td>101-111</td>
                <td>106-116</td>
                <td>111-121</td>
                <td>116-126</td>
              </tr>
              <tr>
                <td>LENGTH (CM)</td>
                <td>98</td>
                <td>98</td>
                <td>98</td>
                <td>98</td>
                <td>98</td>
                <td>98</td>
                <td>98</td>
                <td>98</td>
                <td>98</td>
                <td>98</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SizeChart;
