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
    $this->registerArgument('array3', 'array', 'The firstCat array to extract the role(s) from', TRUE);
    $this->registerArgument('array4', 'array', 'The secondCat array to extract the last name from', TRUE);
    $this->registerArgument('array5', 'array', 'The secondCat array to extract the first name(s) from', TRUE);
    $this->registerArgument('array6', 'array', 'The secondCat array to extract the role(s) from', TRUE);
  }


  /**
   * @return string
   */
  public function render() {
    $result1 = NULL;
    $result2 = NULL;
    $result3 = NULL;
    $result4 = NULL;
    $result5 = NULL;
    $result6 = NULL;
    $final = NULL;
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
    
    $countFirstCat = count($result1) / 2;
    for ($i=0; $i<$countFirstCat; $i++) {
      $final[$i] = $result1[$i*2];
      if ( $result2[$i*2] ) {
        $final[$i] .= ", ".$result2[$i*2];
      }
      if ( $result3[$i] ) {
        $final[$i] .= " QQTTrole(".$result3[$i].")roleTTQQ";
      }
    }
    
    $countSecondCat = count($result4) / 2;
    for ($j=0; $j<$countSecondCat; $j++) {
      $final[$j] = $result4[$j*2];
      if ( $result5[$j*2] ) {
        $final[count($final)] .= ", ".$result5[$j*2];
      }
      if ( $result6[$j] ) {
        $final[count($final)] .= " QQTTrole(".$result6[$j].")roleTTQQ";
      }
    }
    
    return $final;
    
  }

}

?>
