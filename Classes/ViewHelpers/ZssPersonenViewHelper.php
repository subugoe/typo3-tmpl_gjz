<?php
/*******************************************************************************
 * Copyright notice
 *
 * Copyright 2015 Marcus Hellmann, Göttingen Academy of Sciences and Humanities
 *                <mhellma1@gwdg.de>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 ******************************************************************************/
 
 
/**
 * View Helper to return complete names and roles of persons
 */
namespace Gjz18\TmplGjz\ViewHelpers;
class ZssPersonenViewHelper extends \TYPO3Fluid\Fluid\Core\ViewHelper\AbstractViewHelper {


  /**
   * Registers own arguments.
   */
  public function initializeArguments() {
    parent::initializeArguments();
    $this->registerArgument('array1', 'array', 'The firstCat array to extract the last name from', TRUE);
    $this->registerArgument('array2', 'array', 'The firstCat array to extract the first name(s) from', TRUE);
    $this->registerArgument('array3', 'array', 'The firstCat array to extract name additions from', TRUE);
    $this->registerArgument('array4', 'array', 'The firstCat array to extract the role(s) from', TRUE);
    $this->registerArgument('array5', 'array', 'The secondCat array to extract the last name from', TRUE);
    $this->registerArgument('array6', 'array', 'The secondCat array to extract the first name(s) from', TRUE);
    $this->registerArgument('array7', 'array', 'The secondCat array to extract name additions from', TRUE);
    $this->registerArgument('array8', 'array', 'The secondCat array to extract the role(s) from', TRUE);
  }


  /**
   * @return string
   */
  public function render() {
    $result1 = array();
    $result2 = array();
    $result3 = array();
    $result4 = array();
    $result5 = array();
    $result6 = array();
    $result7 = array();
    $result8 = array();
    $final = array();
    $countFirstCat = 0;
    $countSecondCat = 0;

    if ($this->arguments['array1']) {
      $result1 = $this->arguments['array1'];
    }
    if ($this->arguments['array2']) {
      $result2 = $this->arguments['array2'];
    }
    if ($this->arguments['array3']) {
      $result3 = $this->arguments['array3'];
    }
    if ($this->arguments['array4']) {
      $result4 = $this->arguments['array4'];
    }
    if ($this->arguments['array5']) {
      $result5 = $this->arguments['array5'];
    }
    if ($this->arguments['array6']) {
      $result6 = $this->arguments['array6'];
    }
    if ($this->arguments['array7']) {
      $result7 = $this->arguments['array7'];
    }
    if ($this->arguments['array8']) {
      $result8 = $this->arguments['array8'];
    }

    if ( count($result1) % 2 != 0 ) {
      $countFirstCat = count($result1);
      $iCount = 1;
    } else {
      $countFirstCat = count($result1) / 2;
      $iCount = 2;
    }
    for ( $i=0; $i<$countFirstCat; $i++ ) {
      $final[$i] = $result1[$i*$iCount];
      if ( $result2[$i*$iCount] ) {
        $final[$i] .= ", ".$result2[$i*$iCount];
      }
      if ( $result3[$i*$iCount] ) {
        $final[$i] .= " ".$result3[$i*$iCount];
      }
      if ( $result4[$i] ) {
        $final[$i] .= " QQTTrole(".$result4[$i].")roleTTQQ";
      }
      $final[$i] = str_replace("von von", "von", $final[$i]);
    }

    if ( count($result5) % 2 != 0 ) {
      $countSecondCat = count($result5);
      $jCount = 1;
    } else {
      $countSecondCat = count($result5) / 2;
      $jCount = 2;
    }
    if ( count($final) != 0 ) {
      $sizeFinal = count($final);
    } else {
      $sizeFinal = 0;
    }
    for ( $j=0; $j<$countSecondCat; $j++ ) {
      $final[$sizeFinal+$j] = $result5[$j*$jCount];
      if ( $result6[$j*$jCount] ) {
        $final[$sizeFinal+$j] .= ", ".$result6[$j*$jCount];
      }
      if ( $result7[$j*$jCount] ) {
        $final[$sizeFinal+$j] .= " ".$result7[$j*$jCount];
      }
      if ( $result8[$j] ) {
        $final[$sizeFinal+$j] .= " QQTTrole(".$result8[$j].")roleTTQQ";
      }
      $final[$sizeFinal+$j] = str_replace("von von", "von", $sizeFinal+$j);
    }
    
    return $final;
    
  }

}

?>
