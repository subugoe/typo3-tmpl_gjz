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
 * View Helper to return complete places, publisher and year
 */
namespace Gjz18\TmplGjz\ViewHelpers;
class ZssWeitererVerlagOrtViewHelper extends \TYPO3Fluid\Fluid\Core\ViewHelper\AbstractViewHelper {


  /**
   * Registers own arguments.
   */
  public function initializeArguments() {
    parent::initializeArguments();
    $this->registerArgument('array1', 'array', 'The array to extract the place from', TRUE);
    $this->registerArgument('array2', 'array', 'The array to extract the publisher from', TRUE);
    $this->registerArgument('array3', 'array', 'The array to extract the year from', TRUE);
  }


  /**
   * @return string
   */
  public function render() {
    $result1 = NULL;
    $result2 = NULL;
    $result3 = NULL;
    $final = NULL;

    if ($this->arguments['array1']) {
      $result1 = $this->arguments['array1'];
    }
    if ($this->arguments['array2']) {
      $result2 = $this->arguments['array2'];
    }
    if ($this->arguments['array3']) {
      $result3 = $this->arguments['array3'];
    }
    
    for ($i=0; $i<count($result1); $i++) {
      $final[$i] = $result1[$i];
      if ( $result2[$i] ) {
        $final[$i] .= " : ".$result2[$i];
      }
      if ( $result3[$i] ) {
        $final[$i] .= ", ".$result3[$i];
      }
    }
    
    return $final;
    
  }

}

?>
