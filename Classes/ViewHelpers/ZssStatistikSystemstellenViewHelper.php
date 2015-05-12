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
 * View Helper to return classification
 */
namespace Gjz18\TmplGjz\ViewHelpers;
class ZssStatistikSystemstellenViewHelper extends \TYPO3\CMS\Fluid\Core\ViewHelper\AbstractViewHelper {


	/**
	 * Registers own arguments.
	 */
	public function initializeArguments() {
		parent::initializeArguments();
		$this->registerArgument('string', 'string', 'The string to extract the ID from', TRUE);
	}


	/**
	 * @return array
	 */
	public function render() {
		$id = NULL;
    $result = NULL;
    $xml = NULL;
    $sxe = NULL;
    $fileNameXML = NULL;
    $path = NULL;
    $zssArrayRaw_SystStPPN = NULL;
    $zssArrayRaw_SystStCOUNT = NULL;
    $zssArray_SystStPPN = NULL;
    $zssArray_SystStCOUNT = NULL;

		if ($this->arguments['string']) {
      $id = $this->arguments['string'];
		}
    $idClean = (string)str_replace(" ", "", $id[0]);
    
    /** Temporarily create XML file from solr answer */
    $path = "http://134.76.20.176:8080/solr/adw/select?q=d039Bs9%3A".$idClean."&fl=d045Q01s9&wt=xml&indent=true&facet=true&facet.query=d039Bs9%3A".$idClean."&facet.field=d045Q01s9";
    $xml = file_get_contents($path);
    
    $fileNameXML = "ZsSystemstellen-raw-xml.xml";
    file_put_contents($fileNameXML, $xml);
    
    $sxe = new SimpleXMLElement($fileNameXML, NULL, TRUE);
    
    $zssArrayRaw_SystStPPN = $sxe->xpath("//lst[@name='d045Q01s9']/int/@name");
    $zssArrayRaw_SystStCOUNT = $sxe->xpath("//lst[@name='d045Q01s9']/int");
    $zssArray_SystStPPN = $zssArrayRaw_SystStPPN;
    $zssArray_SystStCOUNT = $zssArrayRaw_SystStCOUNT;
    
    /** Delete temporarily created XML file */
    unlink($fileNameXML);
    
    /** Return facetted List of classifications */
    for ($i=0; $i<7; $i++) {
      $result[$i] = $zssArray_SystStPPN[$i]." QQTTzsSystCount(".$zssArray_SystStCOUNT[$i].")zsSystCountTTQQ";
    }
    
    return $result;
    
	}

}

?>
