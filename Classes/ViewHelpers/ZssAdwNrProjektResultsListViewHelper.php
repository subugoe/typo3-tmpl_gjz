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
 * View Helper to return the project name depending on the ADW-No.
 */
namespace Gjz18\TmplGjz\ViewHelpers;
class ZssAdwNrProjektResultsListViewHelper extends \TYPO3Fluid\Fluid\Core\ViewHelper\AbstractViewHelper {


  /**
   * Registers own arguments.
   */
  public function initializeArguments() {
    parent::initializeArguments();
    $this->registerArgument('string', 'string', 'The string to extract the values from', TRUE);
  }


  /**
   * @return string
   */
  public function render() {
    $result = NULL;
    $projekt = NULL;

    if ($this->arguments['string']) {
      $result = $this->arguments['string'];
    }
    
    if (strlen($result)>=3) {
      $firstChar = (string)substr($result, 0, 1);
      if ( ($firstChar=="0") || ($firstChar=="1") ) {
        $projekt[0] = ["idz"];
      }
      elseif ( $firstChar=="2" ) {
        if ( ($result=="205") || ($result=="207") || ($result=="208") || ($result=="210") || ($result=="219") || ($result=="222") || ($result=="235") || ($result=="236") || ($result=="240") || ($result=="256") || ($result=="258") || ($result=="261") || ($result=="265") ) {
          $projekt[0] = ["idrz"];
          $projekt[1] = ["gjz"];
        }
        else {
          $projekt[0] = ["idrz"];
        }
      }
      elseif ( $firstChar=="3" ) {
        $projekt[0] = ["gjz"];
      }
      return $projekt;
    }
    else return;
    
  }

}

?>
