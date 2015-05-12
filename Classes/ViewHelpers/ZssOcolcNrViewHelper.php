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
 * View Helper to return the OCoLC-No. of the journal
 */
namespace Gjz18\TmplGjz\ViewHelpers;
class ZssOcolcNrViewHelper extends \TYPO3\CMS\Fluid\Core\ViewHelper\AbstractViewHelper {


  /**
   * Registers own arguments.
   */
  public function initializeArguments() {
    parent::initializeArguments();
    $this->registerArgument('array', 'array', 'The array to extract the values from', TRUE);
  }


  /**
   * @return string
   */
  public function render() {
    $result = NULL;
    $final = NULL;

    if ($this->arguments['array']) {
      $result = $this->arguments['array'];
    }
    
    for ($i=0; $i<count($result); $i++) {
      if ( strpos($result[$i], "OCoLC")!==FALSE ) {
        $final = (string)str_replace("OCoLC ", "", $result[$i]);
        $final = (string)str_replace("OCoLC", "", $final);
        $final = (string)str_replace(" ", "", $final);
      }
      elseif ( strpos($result[$i], "ADW")!==FALSE ) {
        $result[$i] = "";
      }
    }
    
    if ($final) {
      return $final;
    }
    else {
      return $result[0]." ".$result[1];
    }
    
  }

}

?>
