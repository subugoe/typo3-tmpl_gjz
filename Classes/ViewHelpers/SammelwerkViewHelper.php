<?php
/*******************************************************************************
 * Copyright notice
 *
 * Copyright 2013 Sven-S. Porst, Göttingen State and University Library
 *                <porst@sub.uni-goettingen.de>
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

namespace Gjz18\TmplGjz\ViewHelpers;

/**
 * View Helper to return the value of a key in an array.
 */
class SammelwerkViewHelper extends \TYPO3\CMS\Fluid\Core\ViewHelper\AbstractViewHelper {


	/**
	 * Registers own arguments.
	 */
	public function initializeArguments() {
		parent::initializeArguments();
		$this->registerArgument('array', 'array', 'The array to extract the value from', TRUE);
		$this->registerArgument('key', 'string', 'The key to extract the value for', TRUE);
	}


	/**
	 * @return string
	 */
	public function render() {
		$result = NULL;
		
		if ($this->arguments['array']) {
			if (array_key_exists($this->arguments['key'], $this->arguments['array'])) {
				$result = $this->arguments['array'][$this->arguments['key']];
			}
		}
		
		$ppnSrc = $result;
		$fileName = "typo3temp/".$ppnSrc.".xml";
		
		/** Temporarily create XML file from solr answer */
		$xml = file_get_contents("http://134.76.20.176:8080/solr/adw/select?q={!join+from%3Dd003_s0+to%3Dd039Bs9}d003_s0%3A%22".$ppnSrc."%22&fl=d003_s0%2Cd046Lsa%2Cd006Y&rows=100&wt=xml&indent=true");
		file_put_contents($fileName, $xml);
		
		$sxe = new \SimpleXMLElement($fileName, NULL, TRUE);
		
		$ppnPart = $sxe->xpath("//arr[@name='d003_s0']/str");
		$samPart = $sxe->xpath("//arr[@name='d006Y']/str");
		$picaPart = $sxe->xpath("//arr[@name='d046Lsa']/str");
		
		/** Delete temporarily created XML file */
		unlink($fileName);
		
		
		
		
		foreach ($samPart as $i1 => $value1) {
			$samPart[$i1] = (string)$samPart[$i1];
		}
		foreach ($picaPart as $i2 => $value2) {
			$picaPart[$i2] = (string)$picaPart[$i2];
		}
		foreach ($ppnPart as $i3 => $value3) {
			$ppnPart[$i3] = (string)$ppnPart[$i3];
		}
		
		
		
		
		/** Sorting Id(R)Z-Records */
		if ( preg_grep('/^ADW\:[ ]*[5].*/', $samPart) ) {
			if ( (count($ppnPart)) == (count($samPart)) ) {
				foreach ($samPart as $j1 => $valueSAM) {
					$ppnPartSAM[$j1][0] = $ppnPart[$j1];
					$ppnPartSAM[$j1][1] = $samPart[$j1];
				}
				
				unset($sortArrayP);
				$sortArrayP = array();
				foreach($ppnPartSAM as $ppn){
					foreach($ppn as $keyV=>$valueV){
						if(!isset($sortArrayP[$keyV])){
							$sortArrayP[$keyV] = array();
						}
						$sortArrayP[$keyV][] = $valueV;
					}
				}
				$orderby = "1";
				array_multisort($sortArrayP[$orderby],SORT_ASC,$ppnPartSAM);
				
				foreach ($ppnPartSAM as $j2 => $valuePartSam) {
					unset($ppnPartSAM[$j2][1]);
					$ppnPartSAM = array_values($ppnPartSAM);
					$ppnPartResult[$j2] = (string)$ppnPartSAM[$j2][0];
				}
				
				return $ppnPartResult;
			}
			
			/** Return unsorted PPN-Array */
			/*
			else {
				return $ppnPart;
			}
			*/
		}
		
		
		
		
		/** Sorting GJZ-Records */
		elseif ( (preg_grep('/Sammel/', $picaPart)) || (preg_grep('/Teil/', $picaPart)) ) {
			foreach ($picaPart as $k0 => $valuePICAcheck) {
				if (preg_match('/Rubrik/', $picaPart[$k0])) {
					unset($picaPart[$k0]);
				}
				elseif (preg_match('/Fehl/', $picaPart[$k0])) {
					unset($picaPart[$k0]);
				}
				else {
				}
			}
			$picaPart = array_values($picaPart);
			
			if ( (count($ppnPart)) == (count($picaPart)) ) {
			
				if (count($picaPart) > 9) {
					foreach ($picaPart as $c => $valuePicaCount) {
						$before = (string)substr($picaPart[$c], 0, strpos($picaPart[$c], "Teil"));
						$posTeil = strpos($picaPart[$c], "Teil")+5;
						$posSlash = strpos($picaPart[$c], "/");
						$diff = $posSlash - $posTeil;
						$slice = (string)substr($picaPart[$c], $posTeil, $diff);
						$after = (string)substr($picaPart[$c], strpos($picaPart[$c], "/")+1);
						if ((strlen($slice)<2)!==FALSE) {
							$slice = "0".(string)substr($picaPart[$c], $posTeil, $diff);
							$picaPart[$c] = $before.$slice.$after;
						}
					}
				}
			
				foreach ($picaPart as $k1 => $valuePICA) {
					$ppnPartPICA[$k1][0] = $ppnPart[$k1];
					$ppnPartPICA[$k1][1] = $picaPart[$k1];
				}
				
				unset($sortArrayS);
				$sortArrayS = array();
				foreach($ppnPartPICA as $ppn){
					foreach($ppn as $keyW=>$valueW){
						if(!isset($sortArrayS[$keyW])){
							$sortArrayS[$keyW] = array();
						}
						$sortArrayS[$keyW][] = $valueW;
					}
				}
				$orderby = "1";
				array_multisort($sortArrayS[$orderby],SORT_ASC,$ppnPartPICA);
				
				foreach ($ppnPartPICA as $k2 => $valuePartPICA) {
					unset($ppnPartPICA[$k2][1]);
					$ppnPartPICA = array_values($ppnPartPICA);
					$ppnPartResult[$k2] = (string)$ppnPartPICA[$k2][0];
				}
				
				return $ppnPartResult;
			}
			
			/** Return unsorted PPN-Array */
			/*
			else {
				return $ppnPart;
			}
			*/
		}
		
		
		
		
		/** Return unsorted PPN-Array */
		/*else {
			return $ppnPart;
		}
		*/
	}

}

?>