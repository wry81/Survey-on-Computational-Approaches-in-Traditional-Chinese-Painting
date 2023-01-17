const url = "datas.csv";
const taxonomy = {
    The_Six_Canons:["Spirit Resonance", "Bone Method", "Correspondence to the Object","Suitability to Type", "Division and Planning", "Transmission by Copying", "None"],
    Task: ["Image Classification", "Image Segmentation", "Object Detection", "Image Generation", "Video Generation", "Virtual Reality", "Others", "None"], 
    Feature_Extraction: ["Handcrafted Features", "Learned Features", "None"],
    Rendering: ["Morphology/Graphical Methods", "Diffusion Model", "Reinforcement Learning", "Image-Based", "Geometric-Based", "None"],
    Digitalization: ["Storage", "Retrieval", "Restoration", "None"],
    Interpretation: ["Feature Extraction", "Classification", "None"],
    Creation: ["Image Generation", "Video Generation", "Model", "None"],
    Exhibition: ["XR", "Interactive", "Others", "None"],
    Title: [
	"Immersive Spring Morning in the Han Palace: Learning Traditional Chinese Art Via Virtual Reality and Multi-Touch Tabletop",
	"End-to-end chinese landscape painting creation using generative adversarial networks",
	"Instance-Aware Coherent Video Style Transfer for Chinese Ink Wash Painting",
	"Automatic Poetry Generation Based on Ancient Chinese Paintings",
	"iPoet: Interactive Painting Poetry Creation with",
	"Visual Multimodal Analysis",
	"Immersive Traditional Chinese Portrait Painting: Research on Style Transfer and Face Replacement",
	"MTFFNet: a Multi-task Feature Fusion Framework for Chinese Painting Classification",
	"Animating characters in Chinese painting using two-dimensional skeleton-based deformation",
	"Attentional Wavelet Network for Traditional Chinese Painting Transfer",
	"Feature Fusion based Cross-modal Retrieval for Traditional Chinese Painting",
	"Reconstructing Traditional Chinese Paintings with Immersive Virtual Reality",
	"ShadowPlay2.5D: A 360-Degree Video Authoring Tool for Immersive",
	"Appreciation of Classical Chinese Poetry",
	"Automatic traditional Chinese painting classification: A benchmarking analysis",
	"Multi-Instance Learning Algorithm Based on LSTM for Chinese Painting Image Classification",
	"Detail-Preserving CycleGAN-AdaIN Framework for Image-to-Ink Painting Translation",
	"DCT-CNN-based classification method for the gongbi and xieyi techniques of Chinese inkwash paintings",
	"Deep learning does not generalize well to recognizing cats and dogs in Chinese paintings",
	"Easy Drawing: Generation of Artistic Chinese Flower Painting by Stroke-Based Stylization",
	"Evaluation and analysis of white space in Wu Guanzhong’s Chinese paintings",
	"Feature analysis and classification for aesthetic of Chinese traditional painting",
	"High Relief from Brush Painting",
	"Walking Through Shanshui: Generating Chinese Shanshui Paintings via Real-time Tracking of Human Position",
	"  The Elements Extraction on Traditional Chinese Paintings Based on Object Detection",
	"A study on a content-based image retrieval technique for Chinese paintings",
	"Animated Construction of Chinese Brush Paintings",
	"ChipGAN: A Generative Adversarial Network for Chinese Ink Wash Painting Style Transfer",
	"Research on the synthetic method of ink painting based on convolutional neural network",
	"The classification of traditional Chinese painting based on CNN",
	"A Generative Approach to Chinese Shanshui Painting",
	"Chinese painting emotion classification based on convolution neural network and SVM",
	"Visual complexity of Chinese ink paintings",
	"Data-Driven NPR Illustrations of Natural Flows in Chinese Painting",
	"Monte Carlo Convex Hull Model for classification of traditional Chinese paintings",
	"Tunable, a VR reconstruction of ”Listening to a Guqin” from Emperor Zhao Ji",
	"A Novel Method of Converting Photograph into Chinese Ink Painting",
	"Brushstroke based sparse hybrid convolutional neural networks for author classification of Chinese ink-wash paintings",
	"SIGCHI: Enabling Context for Traditional Chinese Paintings with “Rice Paper”",
	"Object Extraction in Chinese Painting Base on Visual Saliency",
	"Animated construction of ink-wash paintings",
	"Automatic categorization of traditional chinese paintings based on wavelet transform",
	"Classification of traditional Chinese paintings based on supervised learning methods",
	"From Writing to Painting: A Kinect-Based Cross-Modal Chinese Painting Generation System",
	"Real-time image-based chinese ink painting rendering",
	"Recognition of Chinese artists via windowed and entropy balanced fusion in classification of their authored ink and wash paintings (IWPs)",
	"Animating chinese ink painting through generating reproducible brush strokes",
	"Artist agent: A reinforcement learning approach to automatic stroke generation in oriental ink painting",
	"Image Recovery for Ancient Chinese Paintings",
	"Image-Based Rendering for Ink Painting",
	"Viewing Chinese art on an interactive tabletop",
	"Style-based classification of Chinese ink and wash paintings",
	"Annotating Traditional Chinese Paintings for Immersive Virtual Exhibition",
	"Simulating Aging and Reverse-Aging Phenomena of Traditional Chinese Paintings",
	"Stroke-based real-time ink wash painting style rendering for geometric models",
	"Multispectral Image Matting of Ancient Chinese Paintings",
	"A novel Algorithm for Extraction of the Scripts Part in Traditional Chinese Painting Images",
	"Modeling 2.5D plants from ink paintings",
	"A simple method for classification of traditional Chinese Painting and Calligraphy images",
	"Chinese hairy brush: A physically-based model for calligraphy",
	"FluidPaint: an Interactive Digital Painting System using Real Wet Brushes",
	"Video-based running water animation in chinese painting style",
	"An effective method to detect seal images from traditional Chinese paintings",
	"Content-based identifying and classifying traditional chinese painting images",
	"A Generic Pigment Model for Digital Painting",
	"Image-based color ink diffusion rendering",
	"A Real-Time ProCam System for Interaction with Chinese Ink-and-Wash Cartoons",
	"An effective method to detect and categorize digitized traditional Chinese paintings",
	"Animating chinese paintings through stroke-based decomposition",
	"Background Adjustment and Saturation Enhancement in Ancient Chinese Paintings",
	"Computer‐generated Chinese color ink paintings",
	"Automatic categorization of traditional Chinese painting images with statistical Gabor feature and color feature",
	"MoXi: Real-time ink dispersion in absorbent paper",
	"Painting brush control techniques in chinese painting robot",
	"Virtual hairy brush for digital painting and calligraphy ",
	"Categorizing Traditional Chinese Painting Images",
	"Real-Time Painting with an Expressive Virtual Chinese Brush",
	"Studying Digital Imagery of Ancient Paintings by Mixtures of Stochastic Models",
	"Virtual Restoration of Ancient Chinese Paintings Using Color Contrast Enhancement and Lacuna Texture Synthesis",
	"Droplet: A virtual brush model to simulate chinese calligraphy and painting",
	"Image-Based Synthesis of Chinese Landscape Painting",
	"Nijimi Rendering Algorithm for Creating Quality Black Ink Paintings",
	"Physical-based model of ink diffusion in chinese ink paintings",
	"A Model Based Technique for Realistic Oriental Painting",
	"Non-Photorealistic Rendering in Chinese Painting of Animals",
	"On the Effects of Haptic Display in Brush and Ink Simulation for Chinese Painting and Calligraphy",
	"The Synthesis of Trees in Chinese Landscape Painting Using Silhouette and Texture Strokes",
	"Two Methods for Creating Chinese Painting",
	"Diffusion Rendering of Black Ink Paintings Using New Paper and Ink Models",
	"The Synthesis of Rock Textures in Chinese Landscape Painting",
	"Simple Cellular Automaton-Based Simulation of Ink Behaviour and Its Application to Suibokuga-Like 3D Rendering of Trees",
	"Simulating Oriental Black-Ink Painting",
	"Computer-generated watercolor",
	"A Diffusion Model for Computer Animation of Diffuse Ink Painting",
	"Hairy brushes",
    ]
};
const taxkeys = Object.keys(taxonomy);
const container = d3.select(".grid");

d3.csv(url)
	.then(function (data) {
	    console.log(data);
	    d3.selectAll("#count").text(data.length);
	    var total = {};
	    d3.select(".input_search").on("input", function () {
	        var filters = taxkeys.map(function (taxkey) {
	                var cats = [];
	                taxonomy[taxkey].forEach(function (cat) {
	                    searchtext = document.getElementById("search").value;
	                    if (taxkey == "Title") {
	                        cats.push(cat);
	                    }
	                    if (
                        document.querySelectorAll('.fs-option.selected').forEach(function (i) {
                            if ((i.getAttribute('data-value') == cat) &&
                                (i.parentElement.getElementsByClassName('fs-optgroup-label')[0].innerText == taxkey)
                            ) { cats.push(cat); }
	                    }
                        )
					) {
	                        console.log(cats);
	                    }
	                });
	            return [taxkey, cats];
	        });
	        console.log(filters);
	        refreshTechniques(filters);
	    })
	    //������ ����
	    d3.selectAll(".fs-option").on("click", function () {
	            var $wrap = $(this).closest('.fs-wrap');
	            if ($wrap.hasClass('multiple')) {
	                var selected = [];
	                $(this).toggleClass('selected');
	                $wrap.find('.fs-option.selected').each(function (i, el) {
	                    selected.push($(el).attr('data-value'));
	                });
	            }
	            else {
	                var selected = $(this).attr('data-value');
	                $wrap.find('.fs-option').removeClass('selected');
	                $(this).addClass('selected');
	                $wrap.find('.fs-dropdown').hide();
	            }
	            $wrap.find('select').val(selected);
	            $wrap.find('select').fSelect('reloadDropdownLabel');
	            var filters = taxkeys.map(function (taxkey) {
	            var cats = [];
	            taxonomy[taxkey].forEach(function (cat) {
	                
	                if (
                        document.querySelectorAll('.fs-option.selected').forEach(function(i){
                            if ((i.getAttribute('data-value') == cat) &&
                                (i.parentElement.getElementsByClassName('fs-optgroup-label')[0].innerText == taxkey)
                            ) { cats.push(cat);}
	                    }
                        )
					) {
	                    console.log(cats);
	                }
	            });
                console.log(filters);
	            return [taxkey, cats];
	            });
	        refreshTechniques(filters);
	    });
	    function refreshTechniques(filters) {
	        var fData = data.filter((d) => filterData(d, filters));
	        d3.select("#count").text(fData.length);
	        var ids = fData.map((d) => d.picture);
	        d3.selectAll(".grid-item").style("display", (d) =>
	            ids.indexOf(d.picture) != -1 ? null : "none"
			);
	        msnry.layout();
	    }

	    var div = container
			.selectAll("div")
			.data(data)
			.enter()
			.append("div")
			.classed("grid-item", true);

	    div.append("img").attr("src", (d) => "images/" + d.picture);
	    div.append("h3").text((d) => d.Title);
	    div.append("span").html((d) =>
	        [
				d.Author,
				". <i>",
				
				"</i> (",
				d["Year"],
				")",
				" <a href=" + d.Link + ' target="_blank">[Link]</a>',
				"<br>",
	        ].join("")
		);
	    var tags = div.append("div").style("margin-top", "7px");
	})
	.then(function () {
	    imagesLoaded(".grid", function () {
	        var elem = document.querySelector(".grid");
	        window.msnry = new Masonry(elem, {
	            // options
	            itemSelector: ".grid-item",
	            columnWidth: 240,
	            gutter: 15,
	        });
	    });
	})
	.catch(function (error) {
	    throw error;
	});


function filterData(d, filters) {
    return (
    filters.every(function (fil) {
        console.log(fil[0]);
        if (fil[0] == "Title") {
            searchtext = document.getElementById("search").value;
            
            if (fil[1].length == 0 || d[fil[0]].indexOf(searchtext) != -1) 
                        return true;
        }
        else {
                console.log(typeof(d[fil[0]]))
                if (d[fil[0]].indexOf(",") != -1) {
                    sp = d[fil[0]].split(",");
                    for (i = 0; i < sp.length; i++) {
                        if (fil[1].length == 0 || fil[1].indexOf(sp[i]) != -1)
                            return true;
                    }
                } 
            
            return fil[1].length == 0 || fil[1].indexOf(d[fil[0]]) != -1;
        }

    })
);
}

