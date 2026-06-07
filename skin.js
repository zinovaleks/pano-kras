// Garden Gnome Software - Skin
// Pano2VR 7.1.11/21010
// Filename: my.ggsk
// Generated 2026-06-07T18:57:42

function pano2vrSkin(player,base) {
	player.addVariable('vis_sounds_splashscreen', 2, false, { ignoreInState: 1  });
	player.addVariable('vis_skin', 2, false, { ignoreInState: 1  });
	player.addVariable('vis_controls', 2, false, { ignoreInState: 0  });
	player.addVariable('toggle_audio', 2, true, { ignoreInState: 0  });
	player.addVariable('vis_thumbs', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_languages', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_share', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_info', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_map', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_floorplan', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_popup', 2, false, { ignoreInState: 1  });
	player.addVariable('vis_url_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_image_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_pdf_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_youtube_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_vimeo_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_file_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_url_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_thumbs', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_nodes', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_info', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_map', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_floorplan', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_image', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_pdf', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_youtube', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_vimeo', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_video_file', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_video_url', 2, false, { ignoreInState: 0  });
	player.addVariable('opt_proj_title', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_fullscreen', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_info', 2, false, { ignoreInState: 1  });
	player.addVariable('opt_autorotation', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_gyro', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_maps', 2, false, { ignoreInState: 1  });
	player.addVariable('opt_floorplans', 2, false, { ignoreInState: 1  });
	player.addVariable('opt_share_facebook', 2, false, { ignoreInState: 1  });
	player.addVariable('opt_share_twitter', 2, false, { ignoreInState: 1  });
	player.addVariable('opt_share_copy', 2, false, { ignoreInState: 1  });
	player.addVariable('opt_share', 2, false, { ignoreInState: 1  });
	player.addVariable('opt_url_popup', 2, true, { ignoreInState: 1  });
	player.addVariable('pos_menu_button', 1, 0, { ignoreInState: 0  });
	player.addVariable('pos_share_button', 1, 0, { ignoreInState: 0  });
	player.addVariable('pos_languages', 1, 0, { ignoreInState: 0  });
	player.addVariable('pos_info', 1, 0, { ignoreInState: 0  });
	player.addVariable('pos_share', 1, 0, { ignoreInState: 0  });
	player.addVariable('pos_map', 1, 0, { ignoreInState: 0  });
	player.addVariable('pos_floorplan', 1, 0, { ignoreInState: 0  });
	player.addVariable('has_fullscreen', 2, true, { ignoreInState: 1  });
	player.addVariable('has_categories', 2, true, { ignoreInState: 0  });
	player.addVariable('categories_cloner_hasUp', 2, true, { ignoreInState: 0  });
	player.addVariable('categories_cloner_hasDown', 2, true, { ignoreInState: 0  });
	player.addVariable('sounds_splashscreen_accepted', 2, false, { ignoreInState: 0  });
	player.addVariable('resp_desktop', 2, false, { ignoreInState: 1  });
	player.addVariable('resp_tablet', 2, false, { ignoreInState: 1  });
	player.addVariable('resp_phone', 2, false, { ignoreInState: 1  });
	player.addVariable('share_api', 2, false, { ignoreInState: 0  });
	player.addVariable('share_url', 0, "", { ignoreInState: 0  });
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressedKey = 0;
	var skinKeyPressedText = '';
	this.player=player;
	player.setApiVersion(7);
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	var cssPrefix="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown={};
	this.elementMouseOver={};
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	for(var i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; });
	
	var parameterToTransform=function(p) {
		return p.def + 'translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this._=function(text, params) {
		return player._(text, params);
	}
	
	this.languageChanged=function() {
		var stack=[];
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdateText) {
				e.ggUpdateText();
			}
			if (e.ggUpdateAria) {
				e.ggUpdateAria();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('sizechanged', function () { me.updateSize(me.divSkin);});
	player.addListener('languagechanged', this.languageChanged);
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		me._variable_vis_sounds_splashscreen = {};
		me._variable_vis_sounds_splashscreen.ggCurrentLogicState = -1;
		me._variable_vis_sounds_splashscreen.logicBlock = function() {
			var newLogicState_vis_sounds_splashscreen;
			if (
				((player.getHasSounds() == true)) && 
				((player.getSoundsPermitted() != 1)) && 
				((player.getVariableValue('sounds_splashscreen_accepted') == false))
			)
			{
				newLogicState_vis_sounds_splashscreen = 0;
			}
			else {
				newLogicState_vis_sounds_splashscreen = -1;
			}
			if (me._variable_vis_sounds_splashscreen.ggCurrentLogicState != newLogicState_vis_sounds_splashscreen) {
				me._variable_vis_sounds_splashscreen.ggCurrentLogicState = newLogicState_vis_sounds_splashscreen;
				if (me._variable_vis_sounds_splashscreen.ggCurrentLogicState == 0) {
					player.setVariableValue('vis_sounds_splashscreen', true);
				}
				else {
					player.setVariableValue('vis_sounds_splashscreen', false);
				}
			}
		}
		me._variable_vis_skin = {};
		me._variable_vis_skin.ggCurrentLogicState = -1;
		me._variable_vis_skin.logicBlock = function() {
			var newLogicState_vis_skin;
			if (
				((player.getVariableValue('vis_sounds_splashscreen') == false))
			)
			{
				newLogicState_vis_skin = 0;
			}
			else {
				newLogicState_vis_skin = -1;
			}
			if (me._variable_vis_skin.ggCurrentLogicState != newLogicState_vis_skin) {
				me._variable_vis_skin.ggCurrentLogicState = newLogicState_vis_skin;
				if (me._variable_vis_skin.ggCurrentLogicState == 0) {
					player.setVariableValue('vis_skin', true);
				}
				else {
					player.setVariableValue('vis_skin', false);
				}
			}
		}
		me._variable_vis_popup = {};
		me._variable_vis_popup.ggCurrentLogicState = -1;
		me._variable_vis_popup.logicBlock = function() {
			var newLogicState_vis_popup;
			if (
				((player.getVariableValue('vis_url_popup') == true)) || 
				((player.getVariableValue('vis_image_popup') == true)) || 
				((player.getVariableValue('vis_pdf_popup') == true)) || 
				((player.getVariableValue('vis_video_youtube_popup') == true)) || 
				((player.getVariableValue('vis_video_vimeo_popup') == true)) || 
				((player.getVariableValue('vis_video_file_popup') == true)) || 
				((player.getVariableValue('vis_video_url_popup') == true)) || 
				((player.getVariableValue('vis_phone_info') == true)) || 
				((player.getVariableValue('vis_phone_map') == true)) || 
				((player.getVariableValue('vis_phone_floorplan') == true)) || 
				((player.getVariableValue('vis_phone_image') == true)) || 
				((player.getVariableValue('vis_phone_pdf') == true)) || 
				((player.getVariableValue('vis_phone_youtube') == true)) || 
				((player.getVariableValue('vis_phone_vimeo') == true)) || 
				((player.getVariableValue('vis_phone_video_file') == true)) || 
				((player.getVariableValue('vis_phone_video_url') == true)) || 
				((player.getVariableValue('vis_phone_thumbs') == true)) || 
				((player.getVariableValue('vis_phone_nodes') == true))
			)
			{
				newLogicState_vis_popup = 0;
			}
			else {
				newLogicState_vis_popup = -1;
			}
			if (me._variable_vis_popup.ggCurrentLogicState != newLogicState_vis_popup) {
				me._variable_vis_popup.ggCurrentLogicState = newLogicState_vis_popup;
				if (me._variable_vis_popup.ggCurrentLogicState == 0) {
					player.setVariableValue('vis_popup', true);
				}
				else {
					player.setVariableValue('vis_popup', false);
				}
			}
		}
		me._variable_opt_maps = {};
		me._variable_opt_maps.ggCurrentLogicState = -1;
		me._variable_opt_maps.logicBlock = function() {
			var newLogicState_opt_maps;
			if (
				((player.hasMap() == true))
			)
			{
				newLogicState_opt_maps = 0;
			}
			else {
				newLogicState_opt_maps = -1;
			}
			if (me._variable_opt_maps.ggCurrentLogicState != newLogicState_opt_maps) {
				me._variable_opt_maps.ggCurrentLogicState = newLogicState_opt_maps;
				if (me._variable_opt_maps.ggCurrentLogicState == 0) {
					player.setVariableValue('opt_maps', true);
				}
				else {
					player.setVariableValue('opt_maps', false);
				}
			}
		}
		me._variable_opt_floorplans = {};
		me._variable_opt_floorplans.ggCurrentLogicState = -1;
		me._variable_opt_floorplans.logicBlock = function() {
			var newLogicState_opt_floorplans;
			if (
				((player.hasFloorplan() == true))
			)
			{
				newLogicState_opt_floorplans = 0;
			}
			else {
				newLogicState_opt_floorplans = -1;
			}
			if (me._variable_opt_floorplans.ggCurrentLogicState != newLogicState_opt_floorplans) {
				me._variable_opt_floorplans.ggCurrentLogicState = newLogicState_opt_floorplans;
				if (me._variable_opt_floorplans.ggCurrentLogicState == 0) {
					player.setVariableValue('opt_floorplans', true);
				}
				else {
					player.setVariableValue('opt_floorplans', false);
				}
			}
		}
		me._variable_opt_share = {};
		me._variable_opt_share.ggCurrentLogicState = -1;
		me._variable_opt_share.logicBlock = function() {
			var newLogicState_opt_share;
			if (
				((player.getVariableValue('opt_share_facebook') == true)) || 
				((player.getVariableValue('opt_share_twitter') == true)) || 
				((player.getVariableValue('opt_share_copy') == true))
			)
			{
				newLogicState_opt_share = 0;
			}
			else {
				newLogicState_opt_share = -1;
			}
			if (me._variable_opt_share.ggCurrentLogicState != newLogicState_opt_share) {
				me._variable_opt_share.ggCurrentLogicState = newLogicState_opt_share;
				if (me._variable_opt_share.ggCurrentLogicState == 0) {
					player.setVariableValue('opt_share', true);
				}
				else {
					player.setVariableValue('opt_share', false);
				}
			}
		}
		me._variable_has_fullscreen = {};
		me._variable_has_fullscreen.ggCurrentLogicState = -1;
		me._variable_has_fullscreen.logicBlock = function() {
			var newLogicState_has_fullscreen;
			if (
				((player.getOS() == 4)) && 
				((player.getOS() != 6))
			)
			{
				newLogicState_has_fullscreen = 0;
			}
			else {
				newLogicState_has_fullscreen = -1;
			}
			if (me._variable_has_fullscreen.ggCurrentLogicState != newLogicState_has_fullscreen) {
				me._variable_has_fullscreen.ggCurrentLogicState = newLogicState_has_fullscreen;
				if (me._variable_has_fullscreen.ggCurrentLogicState == 0) {
					player.setVariableValue('has_fullscreen', false);
				}
				else {
					player.setVariableValue('has_fullscreen', true);
				}
			}
		}
		me._variable_resp_desktop = {};
		me._variable_resp_desktop.ggCurrentLogicState = -1;
		me._variable_resp_desktop.logicBlock = function() {
			var newLogicState_resp_desktop;
			if (
				((player.getViewerSize(true).width > 1024))
			)
			{
				newLogicState_resp_desktop = 0;
			}
			else {
				newLogicState_resp_desktop = -1;
			}
			if (me._variable_resp_desktop.ggCurrentLogicState != newLogicState_resp_desktop) {
				me._variable_resp_desktop.ggCurrentLogicState = newLogicState_resp_desktop;
				if (me._variable_resp_desktop.ggCurrentLogicState == 0) {
					player.setVariableValue('resp_desktop', true);
				}
				else {
					player.setVariableValue('resp_desktop', false);
				}
			}
		}
		me._variable_resp_tablet = {};
		me._variable_resp_tablet.ggCurrentLogicState = -1;
		me._variable_resp_tablet.logicBlock = function() {
			var newLogicState_resp_tablet;
			if (
				((player.getViewerSize(true).width <= 1024))
			)
			{
				newLogicState_resp_tablet = 0;
			}
			else {
				newLogicState_resp_tablet = -1;
			}
			if (me._variable_resp_tablet.ggCurrentLogicState != newLogicState_resp_tablet) {
				me._variable_resp_tablet.ggCurrentLogicState = newLogicState_resp_tablet;
				if (me._variable_resp_tablet.ggCurrentLogicState == 0) {
					player.setVariableValue('resp_tablet', true);
				}
				else {
					player.setVariableValue('resp_tablet', false);
				}
			}
		}
		me._variable_resp_phone = {};
		me._variable_resp_phone.ggCurrentLogicState = -1;
		me._variable_resp_phone.logicBlock = function() {
			var newLogicState_resp_phone;
			if (
				((player.getViewerSize(true).width <= 1024))
			)
			{
				newLogicState_resp_phone = 0;
			}
			else {
				newLogicState_resp_phone = -1;
			}
			if (me._variable_resp_phone.ggCurrentLogicState != newLogicState_resp_phone) {
				me._variable_resp_phone.ggCurrentLogicState = newLogicState_resp_phone;
				if (me._variable_resp_phone.ggCurrentLogicState == 0) {
					player.setVariableValue('resp_phone', true);
				}
				else {
					player.setVariableValue('resp_phone', false);
				}
			}
		}
		el=me._image_1=document.createElement('div');
		els=me._image_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_1';
		hs=basePath + 'images/image_1.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image   1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 5px;';
		hs+='height : 25px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 201px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_1.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._image_1);
		el=me._code=document.createElement('div');
		el.ggId="code";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._code.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._code.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._code);
		el=me._safe_area_main=document.createElement('div');
		el.ggId="safe_area_main";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : calc(100% - env(safe-area-inset-top) - env(safe-area-inset-bottom));';
		hs+='left : env(safe-area-inset-left);';
		hs+='position : absolute;';
		hs+='top : env(safe-area-inset-top);';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - env(safe-area-inset-left) - env(safe-area-inset-right));';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._safe_area_main.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._safe_area_main.ggUpdatePosition=function (useTransition) {
		}
		el=me._control_buttons=document.createElement('div');
		el.ggId="control_buttons";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 32px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 88px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._control_buttons.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._control_buttons.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._control_buttons.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._control_buttons.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._control_buttons.style.transition='opacity 500ms ease 0ms';
				if (me._control_buttons.ggCurrentLogicStateVisible == 0) {
					me._control_buttons.style.visibility="hidden";
					me._control_buttons.ggVisible=false;
				}
				else {
					me._control_buttons.style.visibility=(Number(me._control_buttons.style.opacity)>0||!me._control_buttons.style.opacity)?'inherit':'hidden';
					me._control_buttons.ggVisible=true;
				}
			}
		}
		me._control_buttons.logicBlock_visible();
		me._control_buttons.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_controls') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._control_buttons.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._control_buttons.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._control_buttons.style.transition='opacity 500ms ease 0ms';
				if (me._control_buttons.ggCurrentLogicStateAlpha == 0) {
					me._control_buttons.style.visibility=me._control_buttons.ggVisible?'inherit':'hidden';
					me._control_buttons.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._control_buttons.style.opacity == 0.0) { me._control_buttons.style.visibility="hidden"; } }, 505);
					me._control_buttons.style.opacity=0;
				}
			}
		}
		me._control_buttons.logicBlock_alpha();
		me._control_buttons.ggUpdatePosition=function (useTransition) {
		}
		el=me._floorplan_btn=document.createElement('div');
		els=me._floorplan_btn__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRkZGRkZGIiB3aWR0aD0iMjRweCIgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjRweCI+CiA8cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDBWMHoiLz4KIDxwYXRoIGQ9Ik0xNC42NSA0Ljk4bC01LTEuNzVjLS40Mi0uMTUtLjg4LS4xNS0xLjMtLjAxTDQuMzYgNC41NkMzLjU1IDQuODQgMyA1LjYgMyA2LjQ2djExLjg1YzAgMS40MSAxLjQxIDIuMzcgMi43MiAxLjg2bDIuOTMtMS4xNGMuMjItLjA5LjQ3LS4wOS42OS0uMDFsNSAxLjc1Yy40Mi4xNS44OC4xNSAxLjMuMDFsMy45OS0xLjM0Yy44MS'+
			'0uMjcgMS4zNi0xLjA0IDEuMzYtMS45VjUuNjljMC0xLjQxLTEuNDEtMi4zNy0yLjcyLTEuODZsLTIuOTMgMS4xNGMtLjIyLjA4LS40Ni4wOS0uNjkuMDF6TTE1IDE4Ljg5bC02LTIuMTFWNS4xMWw2IDIuMTF2MTEuNjd6Ii8+Cjwvc3ZnPgo=';
		me._floorplan_btn__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._floorplan_btn__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjZGZlMDM2IiB3aWR0aD0iMjRweCIgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGwtb3BhY2l0eT0iMSIgaGVpZ2h0PSIyNHB4Ij4KIDxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMFYweiIvPgogPHBhdGggZD0iTTE0LjY1IDQuOThsLTUtMS43NWMtLjQyLS4xNS0uODgtLjE1LTEuMy0uMDFMNC4zNiA0LjU2QzMuNTUgNC44NCAzIDUuNiAzIDYuNDZ2MTEuODVjMCAxLjQxIDEuNDEgMi4zNyAyLjcyIDEuODZsMi45My0xLjE0Yy4yMi0uMDkuNDctLjA5LjY5LS4wMWw1IDEuNzVjLjQyLjE1Ljg4LjE1IDEuMy'+
			'4wMWwzLjk5LTEuMzRjLjgxLS4yNyAxLjM2LTEuMDQgMS4zNi0xLjlWNS42OWMwLTEuNDEtMS40MS0yLjM3LTIuNzItMS44NmwtMi45MyAxLjE0Yy0uMjIuMDgtLjQ2LjA5LS42OS4wMXpNMTUgMTguODlsLTYtMi4xMVY1LjExbDYgMi4xMXYxMS42N3oiLz4KPC9zdmc+Cg==';
		me._floorplan_btn__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="floorplan_btn";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg svg_shadow";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._floorplan_btn.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._floorplan_btn.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_floorplans') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._floorplan_btn.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._floorplan_btn.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._floorplan_btn.style.transition='';
				if (me._floorplan_btn.ggCurrentLogicStateVisible == 0) {
					me._floorplan_btn.style.visibility=(Number(me._floorplan_btn.style.opacity)>0||!me._floorplan_btn.style.opacity)?'inherit':'hidden';
					me._floorplan_btn.ggVisible=true;
				}
				else {
					me._floorplan_btn.style.visibility="hidden";
					me._floorplan_btn.ggVisible=false;
				}
			}
		}
		me._floorplan_btn.logicBlock_visible();
		me._floorplan_btn.onclick=function (e) {
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_floorplan', !player.getVariableValue('vis_floorplan'));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_thumbs', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_languages', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_info', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_share', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_map', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_floorplan', true);
			}
		}
		me._floorplan_btn.onmouseenter=function (e) {
			me._floorplan_btn__img.style.visibility='hidden';
			me._floorplan_btn__imgo.style.visibility='inherit';
			me.elementMouseOver['floorplan_btn']=true;
		}
		me._floorplan_btn.onmouseleave=function (e) {
			me._floorplan_btn__img.style.visibility='inherit';
			me._floorplan_btn__imgo.style.visibility='hidden';
			me.elementMouseOver['floorplan_btn']=false;
		}
		me._floorplan_btn.ggUpdatePosition=function (useTransition) {
		}
		me._control_buttons.appendChild(me._floorplan_btn);
		el=me._map_btn=document.createElement('div');
		els=me._map_btn__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjE4cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNCAyNCIgaGVpZ2h0PSIxOHB4Ij4KIDxnPgogIDxyZWN0IGZpbGw9Im5vbmUiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIvPgogPC9nPgogPGc+CiAgPGc+CiAgIDxwYXRoIGQ9Ik02LDIwaDEyYzAuNTUsMCwxLDAuNDUsMSwxcy0wLjQ1LDEtMSwxSDZjLTAuNTUsMC0xLTAuNDUtMS0xUzUuNDUsMjAsNiwyMHogTTEyLDdjLTEuMSwwLTIsMC45LTIsMnMwLjksMiwyLDIgYzEuMSwwLDItMC45LDItMl'+
			'MxMy4xLDcsMTIsN3ogTTEyLDJjMy4yNywwLDcsMi40Niw3LDcuMTVjMCwyLjk4LTIuMTMsNi4xMi02LjM5LDkuMzljLTAuMzYsMC4yOC0wLjg2LDAuMjgtMS4yMiwwIEM3LjEzLDE1LjI2LDUsMTIuMTMsNSw5LjE1QzUsNC40Niw4LjczLDIsMTIsMnoiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._map_btn__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._map_btn__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDE4IDE4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHk9IjBweCIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE4ID'+
			'E4OyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDojZGZlMDM2O30mI3hkOwo8L3N0eWxlPgogPGc+CiAgPHJlY3Qgd2lkdGg9IjE4IiBjbGFzcz0ic3QwIiBoZWlnaHQ9IjE4Ii8+CiA8L2c+CiA8Zz4KICA8Zz4KICAgPHBhdGggZD0iTTQuNSwxNWg5YzAuNCwwLDAuOCwwLjMsMC44LDAuOGMwLDAuNC0wLjMsMC44LTAuOCwwLjhoLTljLTAuNCwwLTAuOC0wLjMtMC44LTAuOEMzLjgsMTUuMyw0LjEsMTUsNC41LDE1eiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsgTTksNS4yYy0wLjgsMC0xLjUsMC43LTEuNSwxLjVTOC4yLDgu'+
			'Miw5LDguMnMxLjUtMC43LDEuNS0xLjVTOS44LDUuMiw5LDUuMnogTTksMS41YzIuNSwwLDUuMiwxLjgsNS4yLDUuNGMwLDIuMi0xLjYsNC42LTQuOCw3JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC4zLDAuMi0wLjYsMC4yLTAuOSwwYy0zLjItMi41LTQuOC00LjgtNC44LTdDMy44LDMuMyw2LjUsMS41LDksMS41eiIgY2xhc3M9InN0MSIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._map_btn__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="map_btn";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg svg_shadow";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_btn.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_btn.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_maps') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_btn.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_btn.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_btn.style.transition='';
				if (me._map_btn.ggCurrentLogicStateVisible == 0) {
					me._map_btn.style.visibility=(Number(me._map_btn.style.opacity)>0||!me._map_btn.style.opacity)?'inherit':'hidden';
					me._map_btn.ggVisible=true;
				}
				else {
					me._map_btn.style.visibility="hidden";
					me._map_btn.ggVisible=false;
				}
			}
		}
		me._map_btn.logicBlock_visible();
		me._map_btn.onclick=function (e) {
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_map', !player.getVariableValue('vis_map'));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_thumbs', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_languages', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_info', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_share', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_floorplan', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_map', true);
			}
		}
		me._map_btn.onmouseenter=function (e) {
			me._map_btn__img.style.visibility='hidden';
			me._map_btn__imgo.style.visibility='inherit';
			me.elementMouseOver['map_btn']=true;
		}
		me._map_btn.onmouseleave=function (e) {
			me._map_btn__img.style.visibility='inherit';
			me._map_btn__imgo.style.visibility='hidden';
			me.elementMouseOver['map_btn']=false;
		}
		me._map_btn.ggUpdatePosition=function (useTransition) {
		}
		me._control_buttons.appendChild(me._map_btn);
		el=me._info_btn=document.createElement('div');
		el.ggId="info_btn";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._info_btn.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_btn.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_info') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._info_btn.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._info_btn.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._info_btn.style.transition='';
				if (me._info_btn.ggCurrentLogicStateVisible == 0) {
					me._info_btn.style.visibility=(Number(me._info_btn.style.opacity)>0||!me._info_btn.style.opacity)?'inherit':'hidden';
					me._info_btn.ggVisible=true;
				}
				else {
					me._info_btn.style.visibility="hidden";
					me._info_btn.ggVisible=false;
				}
			}
		}
		me._info_btn.logicBlock_visible();
		me._info_btn.onclick=function (e) {
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_info', !player.getVariableValue('vis_info'));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_thumbs', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_languages', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_map', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_share', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_floorplan', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_info', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
					me._info_popup_title_phone.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.ggUserdata.title)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				me._info_popup_title_phone.ggUpdateText();
				me._info_popup_title_phone.ggTextDiv.scrollTop = 0;
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
					me._info_popup_text_phone.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.ggUserdata.description)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				me._info_popup_text_phone.ggUpdateText();
				me._info_popup_text_phone.ggTextDiv.scrollTop = 0;
			}
		}
		me._info_btn.ggUpdatePosition=function (useTransition) {
		}
		el=me._info_btn_disabled=document.createElement('div');
		els=me._info_btn_disabled__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjYmNiY2JjIiB3aWR0aD0iMThweCIgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGwtb3BhY2l0eT0iMSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjQgMjQiIGhlaWdodD0iMThweCI+CiA8Zz4KICA8cGF0aCBmaWxsPSJub25lIiBkPSJNMCwwaDI0djI0SDBWMHoiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGQ9Ik0xMiwyQzYuNDgsMiwyLDYuNDgsMiwxMnM0LjQ4LDEwLDEwLDEwczEwLTQuNDgsMTAtMTBTMTcuNTIsMiwxMiwyeiBNMTIsMTdjLTAuNTUsMC0xLTAuNDUtMS0xdi00YzAtMC41NSwwLjQ1LTEsMS0xIH'+
			'MxLDAuNDUsMSwxdjRDMTMsMTYuNTUsMTIuNTUsMTcsMTIsMTd6IE0xMiw5TDEyLDljLTAuNTUsMC0xLTAuNDUtMS0xdjBjMC0wLjU1LDAuNDUtMSwxLTFoMGMwLjU1LDAsMSwwLjQ1LDEsMXYwIEMxMyw4LjU1LDEyLjU1LDksMTIsOXoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._info_btn_disabled__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="info_btn_disabled";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg svg_shadow";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._info_btn_disabled.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_btn_disabled.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.ggUserdata.description) == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._info_btn_disabled.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._info_btn_disabled.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._info_btn_disabled.style.transition='';
				if (me._info_btn_disabled.ggCurrentLogicStateVisible == 0) {
					me._info_btn_disabled.style.visibility=(Number(me._info_btn_disabled.style.opacity)>0||!me._info_btn_disabled.style.opacity)?'inherit':'hidden';
					me._info_btn_disabled.ggVisible=true;
				}
				else {
					me._info_btn_disabled.style.visibility="hidden";
					me._info_btn_disabled.ggVisible=false;
				}
			}
		}
		me._info_btn_disabled.logicBlock_visible();
		me._info_btn_disabled.ggUpdatePosition=function (useTransition) {
		}
		me._info_btn.appendChild(me._info_btn_disabled);
		el=me._info_btn_enabled=document.createElement('div');
		els=me._info_btn_enabled__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjE4cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNCAyNCIgaGVpZ2h0PSIxOHB4Ij4KIDxnPgogIDxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wLDBoMjR2MjRIMFYweiIvPgogPC9nPgogPGc+CiAgPHBhdGggZD0iTTEyLDJDNi40OCwyLDIsNi40OCwyLDEyczQuNDgsMTAsMTAsMTBzMTAtNC40OCwxMC0xMFMxNy41MiwyLDEyLDJ6IE0xMiwxN2MtMC41NSwwLTEtMC40NS0xLTF2LTRjMC0wLjU1LDAuNDUtMSwxLTEgczEsMC40NSwxLDF2NEMxMywxNi'+
			'41NSwxMi41NSwxNywxMiwxN3ogTTEyLDlMMTIsOWMtMC41NSwwLTEtMC40NS0xLTF2MGMwLTAuNTUsMC40NS0xLDEtMWgwYzAuNTUsMCwxLDAuNDUsMSwxdjAgQzEzLDguNTUsMTIuNTUsOSwxMiw5eiIvPgogPC9nPgo8L3N2Zz4K';
		me._info_btn_enabled__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._info_btn_enabled__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDE4IDE4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHk9IjBweCIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE4ID'+
			'E4OyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDojZGZlMDM2O30mI3hkOwo8L3N0eWxlPgogPGc+CiAgPHBhdGggZD0iTTAsMGgxOHYxOEgwVjB6IiBjbGFzcz0ic3QwIi8+CiA8L2c+CiA8Zz4KICA8cGF0aCBkPSJNOSwxLjVDNC45LDEuNSwxLjUsNC45LDEuNSw5czMuNCw3LjUsNy41LDcuNXM3LjUtMy40LDcuNS03LjVTMTMuMSwxLjUsOSwxLjV6IE05LDEyLjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC40LDAtMC44LTAuMy0wLjgtMC44VjljMC0wLjQsMC4zLTAuOCwwLjgtMC44UzkuOCw4LjYsOS44LDl2M0M5LjgsMTIu'+
			'NCw5LjQsMTIuOCw5LDEyLjh6IE05LDYuOEw5LDYuOEM4LjYsNi44LDguMiw2LjQsOC4yLDYmI3hkOyYjeGE7JiN4OTsmI3g5O2wwLDBjMC0wLjQsMC4zLTAuOCwwLjgtMC44bDAsMGMwLjQsMCwwLjgsMC4zLDAuOCwwLjhsMCwwQzkuOCw2LjQsOS40LDYuOCw5LDYuOHoiIGNsYXNzPSJzdDEiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._info_btn_enabled__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="info_btn_enabled";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg svg_shadow";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._info_btn_enabled.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_btn_enabled.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.ggUserdata.description) == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._info_btn_enabled.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._info_btn_enabled.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._info_btn_enabled.style.transition='';
				if (me._info_btn_enabled.ggCurrentLogicStateVisible == 0) {
					me._info_btn_enabled.style.visibility="hidden";
					me._info_btn_enabled.ggVisible=false;
				}
				else {
					me._info_btn_enabled.style.visibility=(Number(me._info_btn_enabled.style.opacity)>0||!me._info_btn_enabled.style.opacity)?'inherit':'hidden';
					me._info_btn_enabled.ggVisible=true;
				}
			}
		}
		me._info_btn_enabled.logicBlock_visible();
		me._info_btn_enabled.onmouseenter=function (e) {
			me._info_btn_enabled__img.style.visibility='hidden';
			me._info_btn_enabled__imgo.style.visibility='inherit';
			me.elementMouseOver['info_btn_enabled']=true;
		}
		me._info_btn_enabled.onmouseleave=function (e) {
			me._info_btn_enabled__img.style.visibility='inherit';
			me._info_btn_enabled__imgo.style.visibility='hidden';
			me.elementMouseOver['info_btn_enabled']=false;
		}
		me._info_btn_enabled.ggUpdatePosition=function (useTransition) {
		}
		me._info_btn.appendChild(me._info_btn_enabled);
		me._control_buttons.appendChild(me._info_btn);
		el=me._share_btn=document.createElement('div');
		els=me._share_btn__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjE4cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNCAyNCIgaGVpZ2h0PSIxOHB4Ij4KIDxnPgogIDxyZWN0IGZpbGw9Im5vbmUiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIvPgogIDxyZWN0IGZpbGw9Im5vbmUiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIvPgogPC9nPgogPGc+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0xOCwxNmMtMC43OSwwLTEuNSwwLjMxLTIuMDMsMC44MUw4LjkxLDEyLjdDOC45NiwxMi40Nyw5LDEyLjI0LDksMTJzLTAuMDQtMC40Ny'+
			'0wLjA5LTAuN2w3LjA1LTQuMTEgQzE2LjQ5LDcuNjksMTcuMjEsOCwxOCw4YzEuNjYsMCwzLTEuMzQsMy0zcy0xLjM0LTMtMy0zcy0zLDEuMzQtMywzYzAsMC4yNCwwLjA0LDAuNDgsMC4wOSwwLjdMOC4wNCw5LjgxQzcuNSw5LjMxLDYuNzksOSw2LDkgYy0xLjY2LDAtMywxLjM0LTMsM3MxLjM0LDMsMywzYzAuNzksMCwxLjUtMC4zMSwyLjA0LTAuODFsNy4wNSw0LjEyQzE1LjA0LDE4LjUzLDE1LDE4Ljc2LDE1LDE5YzAsMS42NiwxLjM0LDMsMywzczMtMS4zNCwzLTMgUzE5LjY2LDE2LDE4LDE2eiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._share_btn__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._share_btn__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDE4IDE4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHk9IjBweCIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE4ID'+
			'E4OyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDojZGZlMDM2O30mI3hkOwo8L3N0eWxlPgogPGc+CiAgPHJlY3Qgd2lkdGg9IjE4IiBjbGFzcz0ic3QwIiBoZWlnaHQ9IjE4Ii8+CiAgPHJlY3Qgd2lkdGg9IjE4IiBjbGFzcz0ic3QwIiBoZWlnaHQ9IjE4Ii8+CiA8L2c+CiA8Zz4KICA8Zz4KICAgPHBhdGggZD0iTTEzLjUsMTJjLTAuNiwwLTEuMSwwLjItMS41LDAuNkw2LjcsOS41YzAtMC4yLDAuMS0wLjMsMC4xLTAuNXMwLTAuNC0wLjEtMC41TDEyLDUuNEMxMi40LDUuOCwxMi45LDYsMTMuNSw2JiN4ZDsmI3hhOyYjeDk7'+
			'JiN4OTsmI3g5O2MxLjIsMCwyLjItMSwyLjItMi4ycy0xLTIuMi0yLjItMi4ycy0yLjIsMS0yLjIsMi4yYzAsMC4yLDAsMC40LDAuMSwwLjVMNiw3LjRDNS42LDcsNS4xLDYuOCw0LjUsNi44Yy0xLjIsMC0yLjIsMS0yLjIsMi4yJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O3MxLDIuMiwyLjIsMi4yYzAuNiwwLDEuMS0wLjIsMS41LTAuNmw1LjMsMy4xYzAsMC4yLTAuMSwwLjMtMC4xLDAuNWMwLDEuMiwxLDIuMiwyLjIsMi4yczIuMi0xLDIuMi0yLjJTMTQuNywxMiwxMy41LDEyeiIgY2xhc3M9InN0MSIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._share_btn__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="share_btn";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg svg_shadow";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._share_btn.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._share_btn.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_share') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._share_btn.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._share_btn.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._share_btn.style.transition='';
				if (me._share_btn.ggCurrentLogicStateVisible == 0) {
					me._share_btn.style.visibility=(Number(me._share_btn.style.opacity)>0||!me._share_btn.style.opacity)?'inherit':'hidden';
					me._share_btn.ggVisible=true;
				}
				else {
					me._share_btn.style.visibility="hidden";
					me._share_btn.ggVisible=false;
				}
			}
		}
		me._share_btn.logicBlock_visible();
		me._share_btn.onclick=function (e) {
			text = document.URL
i = text.indexOf("#");
if (i >= 1) {
text = text.substring(0, i);
}
text = text + "#" + player.getCurrentNode() + "," + player.getPan() + "," + player.getTilt() + "," + player.getFov() + ",4";
if (navigator.canShare) {
  player.setVariableValue('share_api', navigator.canShare({ url: text }) && player.getIsMobile());
  player.setVariableValue('share_url', text);
}
			if (
				(
					((player.getVariableValue('share_api') == true))
				)
			) {
				let shareUrl = player.getVariableValue('share_url');
navigator.share({ url: shareUrl });
			}
			if (
				(
					((player.getVariableValue('share_api') == false))
				)
			) {
				player.setVariableValue('vis_share', !player.getVariableValue('vis_share'));
			}
			player.setVariableValue('vis_thumbs', false);
			player.setVariableValue('vis_languages', false);
			player.setVariableValue('vis_info', false);
			player.setVariableValue('vis_map', false);
			player.setVariableValue('vis_floorplan', false);
		}
		me._share_btn.onmouseenter=function (e) {
			me._share_btn__img.style.visibility='hidden';
			me._share_btn__imgo.style.visibility='inherit';
			me.elementMouseOver['share_btn']=true;
		}
		me._share_btn.onmouseleave=function (e) {
			me._share_btn__img.style.visibility='inherit';
			me._share_btn__imgo.style.visibility='hidden';
			me.elementMouseOver['share_btn']=false;
		}
		me._share_btn.ggUpdatePosition=function (useTransition) {
		}
		me._control_buttons.appendChild(me._share_btn);
		el=me._vr_btn=document.createElement('div');
		els=me._vr_btn__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHk9IjBweCIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI0ID'+
			'I0OyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9JiN4ZDsKPC9zdHlsZT4KIDxwYXRoIGQ9Ik0yMi4yLDcuNmMtMC4yLTAuOS0xLjEtMS41LTItMS41SDE4Yy0xLjUtMS41LTMuNi0yLjUtNi0yLjVzLTQuNSwxLTYsMi41SDMuOGMtMC45LDAtMS44LDAuNi0yLDEuNSYjeGQ7JiN4YTsmI3g5O2MtMC4zLDAuOS0wLjQsMi4xLTAuNCwzLjZjMCwxLjQsMC4xLDIuNiwwLjQsMy42YzAuMiwwLjksMS4xLDEuNSwyLDEuNWgwLjljMS41LDIuNSw0LjIsNC4yLDcuMyw0LjJzNS44LTEuNyw3LjMtNC4yaDAuOSYjeGQ7JiN4YTsmI3g5O2MwLjksMCwxLjgtMC42'+
			'LDItMS41YzAuMy0wLjksMC40LTIuMSwwLjQtMy42QzIyLjYsOS43LDIyLjUsOC41LDIyLjIsNy42eiBNMTEuMSwxMi43TDExLjEsMTIuN0wxMS4xLDEyLjdMMTEuMSwxMi43eiBNMjAuMywxNC4yJiN4ZDsmI3hhOyYjeDk7TDIwLjMsMTQuMmgtNS4xbC0xLjYtMi4xYy0wLjQtMC41LTEtMC44LTEuNi0wLjhsMCwwYy0wLjYsMC0xLjIsMC4zLTEuNiwwLjhsLTEuOCwyLjJIMy44YzAsMC0wLjEsMC0wLjEtMC4xJiN4ZDsmI3hhOyYjeDk7Yy0wLjEtMC41LTAuMy0xLjUtMC4zLTNzMC4yLTIuNSwwLjMtM2wwLjEtMC4xaDE2LjRjMCwwLDAuMSwwLDAuMSwwLjFjMC4xLDAuNSwwLjMsMS41LDAuMywzQz'+
			'IwLjYsMTIuNywyMC40LDEzLjcsMjAuMywxNC4yeiIgY2xhc3M9InN0MCIvPgo8L3N2Zz4K';
		me._vr_btn__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._vr_btn__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHk9IjBweCIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI0ID'+
			'I0OyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I2RmZTAzNjt9JiN4ZDsKPC9zdHlsZT4KIDxwYXRoIGQ9Ik0yMi4yLDcuNmMtMC4yLTAuOS0xLjEtMS41LTItMS41SDE4Yy0xLjUtMS41LTMuNi0yLjUtNi0yLjVzLTQuNSwxLTYsMi41SDMuOGMtMC45LDAtMS44LDAuNi0yLDEuNSYjeGQ7JiN4YTsmI3g5O2MtMC4zLDAuOS0wLjQsMi4xLTAuNCwzLjZjMCwxLjQsMC4xLDIuNiwwLjQsMy42YzAuMiwwLjksMS4xLDEuNSwyLDEuNWgwLjljMS41LDIuNSw0LjIsNC4yLDcuMyw0LjJzNS44LTEuNyw3LjMtNC4yaDAuOSYjeGQ7JiN4YTsmI3g5O2MwLjksMCwxLjgtMC42'+
			'LDItMS41YzAuMy0wLjksMC40LTIuMSwwLjQtMy42QzIyLjYsOS43LDIyLjUsOC41LDIyLjIsNy42eiBNMTEuMSwxMi43TDExLjEsMTIuN0wxMS4xLDEyLjdMMTEuMSwxMi43eiBNMjAuMywxNC4yJiN4ZDsmI3hhOyYjeDk7TDIwLjMsMTQuMmgtNS4xbC0xLjYtMi4xYy0wLjQtMC41LTEtMC44LTEuNi0wLjhsMCwwYy0wLjYsMC0xLjIsMC4zLTEuNiwwLjhsLTEuOCwyLjJIMy44YzAsMC0wLjEsMC0wLjEtMC4xJiN4ZDsmI3hhOyYjeDk7Yy0wLjEtMC41LTAuMy0xLjUtMC4zLTNzMC4yLTIuNSwwLjMtM2wwLjEtMC4xaDE2LjRjMCwwLDAuMSwwLDAuMSwwLjFjMC4xLDAuNSwwLjMsMS41LDAuMywzQz'+
			'IwLjYsMTIuNywyMC40LDEzLjcsMjAuMywxNC4yeiIgY2xhc3M9InN0MCIvPgo8L3N2Zz4K';
		me._vr_btn__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="vr_btn";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg svg_shadow";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._vr_btn.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._vr_btn.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.hasVR() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._vr_btn.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._vr_btn.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._vr_btn.style.transition='';
				if (me._vr_btn.ggCurrentLogicStateVisible == 0) {
					me._vr_btn.style.visibility=(Number(me._vr_btn.style.opacity)>0||!me._vr_btn.style.opacity)?'inherit':'hidden';
					me._vr_btn.ggVisible=true;
				}
				else {
					me._vr_btn.style.visibility="hidden";
					me._vr_btn.ggVisible=false;
				}
			}
		}
		me._vr_btn.logicBlock_visible();
		me._vr_btn.onclick=function (e) {
			player.enterVR();
		}
		me._vr_btn.onmouseenter=function (e) {
			me._vr_btn__img.style.visibility='hidden';
			me._vr_btn__imgo.style.visibility='inherit';
			me.elementMouseOver['vr_btn']=true;
		}
		me._vr_btn.onmouseleave=function (e) {
			me._vr_btn__img.style.visibility='inherit';
			me._vr_btn__imgo.style.visibility='hidden';
			me.elementMouseOver['vr_btn']=false;
		}
		me._vr_btn.ggUpdatePosition=function (useTransition) {
		}
		me._control_buttons.appendChild(me._vr_btn);
		el=me._toggle_gyro_btn=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="toggle_gyro_btn";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._toggle_gyro_btn.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._toggle_gyro_btn.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_gyro') == true)) && 
				((player.getGyroAvailable() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._toggle_gyro_btn.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._toggle_gyro_btn.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._toggle_gyro_btn.style.transition='';
				if (me._toggle_gyro_btn.ggCurrentLogicStateVisible == 0) {
					me._toggle_gyro_btn.style.visibility=(Number(me._toggle_gyro_btn.style.opacity)>0||!me._toggle_gyro_btn.style.opacity)?'inherit':'hidden';
					me._toggle_gyro_btn.ggVisible=true;
				}
				else {
					me._toggle_gyro_btn.style.visibility="hidden";
					me._toggle_gyro_btn.ggVisible=false;
				}
			}
		}
		me._toggle_gyro_btn.logicBlock_visible();
		me._toggle_gyro_btn.onclick=function (e) {
			player.setUseGyro(!(player.getUseGyro()));
		}
		me._toggle_gyro_btn.ggUpdatePosition=function (useTransition) {
		}
		el=me._toggle_gyro_off=document.createElement('div');
		els=me._toggle_gyro_off__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHk9IjBweCIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI0ID'+
			'I0OyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9JiN4ZDsKPC9zdHlsZT4KIDxnIGlkPSJMYXllcl8zIj4KICA8Zz4KICAgPHBhdGggZD0iTTE5LjMsMTkuM0wxOS4zLDE5LjNsLTEuNC0xLjRsMCwwTDE2LjksMTdsMCwwbC0xLjQtMS40bDAsMEwxMywxM0wzLjUsMy41Yy0wLjQtMC40LTEtMC40LTEuNCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC40LDAuNC0wLjQsMSwwLDEuNGwxLjMsMS4zQzIuMyw3LjksMS43LDEwLDEuNywxMmMwLDUuNCw0LjIsOS45LDkuNiwxMC4zdjAuNmMwLDAuNCwwLjMsMC43LDAuNywwLjdzMC43LTAuMywwLjct'+
			'MC43bDAsMHYtMC42JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MxLjgtMC4xLDMuNS0wLjcsNS0xLjdsMS4zLDEuM2MwLjQsMC40LDEuMSwwLjMsMS40LTAuMWMwLjMtMC40LDAuMy0wLjksMC0xLjNMMTkuMywxOS4zeiBNNC45LDcuN0w1LDcuOEw0LjcsOCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDNC44LDcuOSw0LjgsNy44LDQuOSw3Ljd6IE0zLjcsMTJjMC0wLjksMS4xLTIsMi44LTIuN2w0LjgsNC44djEuNWMtMC45LDAtMS44LTAuMS0yLjctMC4zQzUuNywxNC43LDMuNywxMy4zLDMuNywxMnogTTEyLDIwLjMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0zLDAtNS44LTEuNy03LjMtNC'+
			'4zYzEuMSwwLjYsMi4yLDEsMy40LDEuMmMxLDAuMiwyLjEsMC4zLDMuMSwwLjR2MS43YzAsMC4zLDAuMiwwLjUsMC41LDAuNWMwLjEsMCwwLjMtMC4xLDAuNC0wLjJsMi4zLTIuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtsMS44LDEuOEMxNSwxOS45LDEzLjUsMjAuMywxMiwyMC4zeiIgY2xhc3M9InN0MCIvPgogICA8cGF0aCBkPSJNNy44LDQuOGMxLjEtMC42LDIuMy0xLDMuNS0xLjF2Mi43Yy0wLjYsMC0xLjIsMC4xLTEuOCwwLjJsMy4yLDMuMlY4LjRjNC41LDAuMiw3LjYsMiw3LjYsMy42JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLDAuOS0xLjEsMS45LTIuOCwyLjZsMS41LDEuNWww'+
			'LjItMC4xYzAsMC4xLTAuMSwwLjEtMC4xLDAuMmwxLjUsMS41YzMuMi00LjcsMS45LTExLjEtMi44LTE0LjNjLTEuNS0xLTMuMi0xLjYtNS4xLTEuN1YxLjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAtMC40LTAuMy0wLjctMC43LTAuN3MtMC43LDAuMy0wLjcsMC43djAuNmMtMS44LDAuMS0zLjUsMC43LTUsMS43TDcuOCw0Ljh6IE0xMi43LDMuN0MxNS41LDQsMTgsNS42LDE5LjMsOCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTItMS00LjMtMS42LTYuNi0xLjZWMy43eiIgY2xhc3M9InN0MCIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._toggle_gyro_off__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._toggle_gyro_off__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHk9IjBweCIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI0ID'+
			'I0OyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I2RmZTAzNjt9JiN4ZDsKPC9zdHlsZT4KIDxnIGlkPSJMYXllcl8zIj4KICA8Zz4KICAgPHBhdGggZD0iTTE5LjMsMTkuM0wxOS4zLDE5LjNsLTEuNC0xLjRsMCwwTDE2LjksMTdsMCwwbC0xLjQtMS40bDAsMEwxMywxM0wzLjUsMy41Yy0wLjQtMC40LTEtMC40LTEuNCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC40LDAuNC0wLjQsMSwwLDEuNGwxLjMsMS4zQzIuMyw3LjksMS43LDEwLDEuNywxMmMwLDUuNCw0LjIsOS45LDkuNiwxMC4zdjAuNmMwLDAuNCwwLjMsMC43LDAuNywwLjdzMC43LTAuMywwLjct'+
			'MC43bDAsMHYtMC42JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MxLjgtMC4xLDMuNS0wLjcsNS0xLjdsMS4zLDEuM2MwLjQsMC40LDEuMSwwLjMsMS40LTAuMWMwLjMtMC40LDAuMy0wLjksMC0xLjNMMTkuMywxOS4zeiBNNC45LDcuN0w1LDcuOEw0LjcsOCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDNC44LDcuOSw0LjgsNy44LDQuOSw3Ljd6IE0zLjcsMTJjMC0wLjksMS4xLTIsMi44LTIuN2w0LjgsNC44djEuNWMtMC45LDAtMS44LTAuMS0yLjctMC4zQzUuNywxNC43LDMuNywxMy4zLDMuNywxMnogTTEyLDIwLjMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0zLDAtNS44LTEuNy03LjMtNC'+
			'4zYzEuMSwwLjYsMi4yLDEsMy40LDEuMmMxLDAuMiwyLjEsMC4zLDMuMSwwLjR2MS43YzAsMC4zLDAuMiwwLjUsMC41LDAuNWMwLjEsMCwwLjMtMC4xLDAuNC0wLjJsMi4zLTIuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtsMS44LDEuOEMxNSwxOS45LDEzLjUsMjAuMywxMiwyMC4zeiIgY2xhc3M9InN0MCIvPgogICA8cGF0aCBkPSJNNy44LDQuOGMxLjEtMC42LDIuMy0xLDMuNS0xLjF2Mi43Yy0wLjYsMC0xLjIsMC4xLTEuOCwwLjJsMy4yLDMuMlY4LjRjNC41LDAuMiw3LjYsMiw3LjYsMy42JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLDAuOS0xLjEsMS45LTIuOCwyLjZsMS41LDEuNWww'+
			'LjItMC4xYzAsMC4xLTAuMSwwLjEtMC4xLDAuMmwxLjUsMS41YzMuMi00LjcsMS45LTExLjEtMi44LTE0LjNjLTEuNS0xLTMuMi0xLjYtNS4xLTEuN1YxLjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAtMC40LTAuMy0wLjctMC43LTAuN3MtMC43LDAuMy0wLjcsMC43djAuNmMtMS44LDAuMS0zLjUsMC43LTUsMS43TDcuOCw0Ljh6IE0xMi43LDMuN0MxNS41LDQsMTgsNS42LDE5LjMsOCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTItMS00LjMtMS42LTYuNi0xLjZWMy43eiIgY2xhc3M9InN0MCIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._toggle_gyro_off__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="toggle_gyro_off";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg svg_shadow";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._toggle_gyro_off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._toggle_gyro_off.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getUseGyro() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._toggle_gyro_off.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._toggle_gyro_off.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._toggle_gyro_off.style.transition='';
				if (me._toggle_gyro_off.ggCurrentLogicStateVisible == 0) {
					me._toggle_gyro_off.style.visibility="hidden";
					me._toggle_gyro_off.ggVisible=false;
				}
				else {
					me._toggle_gyro_off.style.visibility=(Number(me._toggle_gyro_off.style.opacity)>0||!me._toggle_gyro_off.style.opacity)?'inherit':'hidden';
					me._toggle_gyro_off.ggVisible=true;
				}
			}
		}
		me._toggle_gyro_off.logicBlock_visible();
		me._toggle_gyro_off.onmouseenter=function (e) {
			me._toggle_gyro_off__img.style.visibility='hidden';
			me._toggle_gyro_off__imgo.style.visibility='inherit';
			me.elementMouseOver['toggle_gyro_off']=true;
		}
		me._toggle_gyro_off.onmouseleave=function (e) {
			me._toggle_gyro_off__img.style.visibility='inherit';
			me._toggle_gyro_off__imgo.style.visibility='hidden';
			me.elementMouseOver['toggle_gyro_off']=false;
		}
		me._toggle_gyro_off.ggUpdatePosition=function (useTransition) {
		}
		me._toggle_gyro_btn.appendChild(me._toggle_gyro_off);
		el=me._toggle_gyro_on=document.createElement('div');
		els=me._toggle_gyro_on__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHk9IjBweCIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkxheWVyXzFfY29weSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwID'+
			'AgMjQgMjQ7Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKCS5zdDB7ZmlsbDojRkZGRkZGO30mI3hkOwo8L3N0eWxlPgogPHBhdGggZD0iTTIyLjMsMTJjMC01LjQtNC4yLTkuOS05LjYtMTAuM1YxLjFjMC0wLjQtMC4zLTAuNy0wLjctMC43cy0wLjcsMC4zLTAuNywwLjd2MC42QzUuNiwyLjEsMS4zLDcsMS42LDEyLjYmI3hkOyYjeGE7JiN4OTtjMC4zLDUuMiw0LjUsOS4zLDkuNiw5LjZ2MC42YzAsMC40LDAuMywwLjcsMC43LDAuN3MwLjctMC4zLDAuNy0wLjdsMCwwdi0wLjZDMTguMSwyMS45LDIyLjMsMTcuNCwyMi4zLDEyeiBNMTkuMyw4JiN4ZDsmI3hhOyYjeDk7Yy0yLjEtMS00'+
			'LjMtMS42LTYuNi0xLjZWMy43QzE1LjUsNCwxOCw1LjYsMTkuMyw4TDE5LjMsOHogTTExLjMsMy43djIuN0M5LDYuNCw2LjgsNyw0LjcsOEM2LDUuNiw4LjUsNCwxMS4zLDMuN0wxMS4zLDMuN3omI3hkOyYjeGE7JiN4OTsgTTEyLDIwLjNjLTMsMC01LjgtMS43LTcuMy00LjNjMS4xLDAuNiwyLjIsMSwzLjQsMS4yYzEsMC4yLDIuMSwwLjMsMy4xLDAuNHYxLjdjMCwwLjMsMC4yLDAuNSwwLjUsMC41YzAuMSwwLDAuMy0wLjEsMC40LTAuMiYjeGQ7JiN4YTsmI3g5O2wyLjgtMi44YzAuMi0wLjIsMC4yLTAuNSwwLTAuN2MwLDAsMCwwLDAsMGwtMi44LTIuOGMtMC4yLTAuMi0wLjUtMC4yLTAuNywwYy'+
			'0wLjEsMC4xLTAuMSwwLjItMC4xLDAuNHYxLjljLTAuOSwwLTEuOC0wLjEtMi43LTAuMyYjeGQ7JiN4YTsmI3g5O2MtMi45LTAuNi00LjktMS45LTQuOS0zLjNjMC0xLjYsMy4xLTMuNCw3LjYtMy42VjEyYzAsMC40LDAuMywwLjcsMC43LDAuN3MwLjctMC4zLDAuNy0wLjdWOC40YzQuNSwwLjIsNy42LDIsNy42LDMuNiYjeGQ7JiN4YTsmI3g5O2MwLDEuMS0xLjQsMi4yLTMuNiwyLjlsLTAuNiwwLjJjLTAuNSwwLjEtMC45LDAuNy0wLjcsMS4yYzAsMCwwLDAsMCwwYzAuMSwwLjUsMC43LDAuOSwxLjIsMC43YzAsMCwwLDAsMCwwJiN4ZDsmI3hhOyYjeDk7YzAuMi0wLjEsMC41LTAuMSwwLjctMC4y'+
			'YzAuNy0wLjIsMS40LTAuNSwyLTAuOEMxNy44LDE4LjcsMTUsMjAuMywxMiwyMC4zeiIgY2xhc3M9InN0MCIvPgo8L3N2Zz4K';
		me._toggle_gyro_on__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._toggle_gyro_on__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHk9IjBweCIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkxheWVyXzFfY29weSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwID'+
			'AgMjQgMjQ7Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKCS5zdDB7ZmlsbDojZGZlMDM2O30mI3hkOwo8L3N0eWxlPgogPHBhdGggZD0iTTIyLjMsMTJjMC01LjQtNC4yLTkuOS05LjYtMTAuM1YxLjFjMC0wLjQtMC4zLTAuNy0wLjctMC43cy0wLjcsMC4zLTAuNywwLjd2MC42QzUuNiwyLjEsMS4zLDcsMS42LDEyLjYmI3hkOyYjeGE7JiN4OTtjMC4zLDUuMiw0LjUsOS4zLDkuNiw5LjZ2MC42YzAsMC40LDAuMywwLjcsMC43LDAuN3MwLjctMC4zLDAuNy0wLjdsMCwwdi0wLjZDMTguMSwyMS45LDIyLjMsMTcuNCwyMi4zLDEyeiBNMTkuMyw4JiN4ZDsmI3hhOyYjeDk7Yy0yLjEtMS00'+
			'LjMtMS42LTYuNi0xLjZWMy43QzE1LjUsNCwxOCw1LjYsMTkuMyw4TDE5LjMsOHogTTExLjMsMy43djIuN0M5LDYuNCw2LjgsNyw0LjcsOEM2LDUuNiw4LjUsNCwxMS4zLDMuN0wxMS4zLDMuN3omI3hkOyYjeGE7JiN4OTsgTTEyLDIwLjNjLTMsMC01LjgtMS43LTcuMy00LjNjMS4xLDAuNiwyLjIsMSwzLjQsMS4yYzEsMC4yLDIuMSwwLjMsMy4xLDAuNHYxLjdjMCwwLjMsMC4yLDAuNSwwLjUsMC41YzAuMSwwLDAuMy0wLjEsMC40LTAuMiYjeGQ7JiN4YTsmI3g5O2wyLjgtMi44YzAuMi0wLjIsMC4yLTAuNSwwLTAuN2MwLDAsMCwwLDAsMGwtMi44LTIuOGMtMC4yLTAuMi0wLjUtMC4yLTAuNywwYy'+
			'0wLjEsMC4xLTAuMSwwLjItMC4xLDAuNHYxLjljLTAuOSwwLTEuOC0wLjEtMi43LTAuMyYjeGQ7JiN4YTsmI3g5O2MtMi45LTAuNi00LjktMS45LTQuOS0zLjNjMC0xLjYsMy4xLTMuNCw3LjYtMy42VjEyYzAsMC40LDAuMywwLjcsMC43LDAuN3MwLjctMC4zLDAuNy0wLjdWOC40YzQuNSwwLjIsNy42LDIsNy42LDMuNiYjeGQ7JiN4YTsmI3g5O2MwLDEuMS0xLjQsMi4yLTMuNiwyLjlsLTAuNiwwLjJjLTAuNSwwLjEtMC45LDAuNy0wLjcsMS4yYzAsMCwwLDAsMCwwYzAuMSwwLjUsMC43LDAuOSwxLjIsMC43YzAsMCwwLDAsMCwwJiN4ZDsmI3hhOyYjeDk7YzAuMi0wLjEsMC41LTAuMSwwLjctMC4y'+
			'YzAuNy0wLjIsMS40LTAuNSwyLTAuOEMxNy44LDE4LjcsMTUsMjAuMywxMiwyMC4zeiIgY2xhc3M9InN0MCIvPgo8L3N2Zz4K';
		me._toggle_gyro_on__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="toggle_gyro_on";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg svg_shadow";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._toggle_gyro_on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._toggle_gyro_on.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getUseGyro() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._toggle_gyro_on.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._toggle_gyro_on.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._toggle_gyro_on.style.transition='';
				if (me._toggle_gyro_on.ggCurrentLogicStateVisible == 0) {
					me._toggle_gyro_on.style.visibility=(Number(me._toggle_gyro_on.style.opacity)>0||!me._toggle_gyro_on.style.opacity)?'inherit':'hidden';
					me._toggle_gyro_on.ggVisible=true;
				}
				else {
					me._toggle_gyro_on.style.visibility="hidden";
					me._toggle_gyro_on.ggVisible=false;
				}
			}
		}
		me._toggle_gyro_on.logicBlock_visible();
		me._toggle_gyro_on.onmouseenter=function (e) {
			me._toggle_gyro_on__img.style.visibility='hidden';
			me._toggle_gyro_on__imgo.style.visibility='inherit';
			me.elementMouseOver['toggle_gyro_on']=true;
		}
		me._toggle_gyro_on.onmouseleave=function (e) {
			me._toggle_gyro_on__img.style.visibility='inherit';
			me._toggle_gyro_on__imgo.style.visibility='hidden';
			me.elementMouseOver['toggle_gyro_on']=false;
		}
		me._toggle_gyro_on.ggUpdatePosition=function (useTransition) {
		}
		me._toggle_gyro_btn.appendChild(me._toggle_gyro_on);
		me._control_buttons.appendChild(me._toggle_gyro_btn);
		el=me._toggle_autorot_btn=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="toggle_autorot_btn";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._toggle_autorot_btn.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._toggle_autorot_btn.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_autorotation') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._toggle_autorot_btn.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._toggle_autorot_btn.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._toggle_autorot_btn.style.transition='';
				if (me._toggle_autorot_btn.ggCurrentLogicStateVisible == 0) {
					me._toggle_autorot_btn.style.visibility=(Number(me._toggle_autorot_btn.style.opacity)>0||!me._toggle_autorot_btn.style.opacity)?'inherit':'hidden';
					me._toggle_autorot_btn.ggVisible=true;
				}
				else {
					me._toggle_autorot_btn.style.visibility="hidden";
					me._toggle_autorot_btn.ggVisible=false;
				}
			}
		}
		me._toggle_autorot_btn.logicBlock_visible();
		me._toggle_autorot_btn.ggUpdatePosition=function (useTransition) {
		}
		el=me._toggle_autorot_off=document.createElement('div');
		els=me._toggle_autorot_off__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDI1LjMgMjUuMyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB5PSIwcHgiIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMC'+
			'AyNS4zIDI1LjM7Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CiA8cGF0aCBkPSJNMjIuMywyNWwtNC4xLTQuMWMtMC4yLDAuMS0wLjQsMC4yLTAuNSwwLjNjLTAuMiwwLjEtMC40LDAuMi0wLjYsMC4zYy0wLjMsMC4yLTAuNywwLjItMSwwICBjLTAuMy0wLjItMC41LTAuNS0wLjUtMWMwLTAuMiwwLjEtMC40LDAuMi0wLjVjMC4xLTAuMiwwLjMtMC4zLDAuNS0wLjRjMC4xLDAsMC4yLTAuMSwwLjItMC4xYzAuMSwwLDAuMS0wLjEsMC4yLTAuMUw1LjksOC43ICBjLTAuNCwwLjYtMC42LDEuMi0wLjgsMS45Yy0wLjIsMC43LTAuMiwxLjMtMC4y'+
			'LDJjMCwxLjEsMC4yLDIuMSwwLjYsMy4xYzAuNCwxLDEuMSwxLjgsMS45LDIuNmwwLjcsMC41di0yLjZjMC0wLjMsMC4xLTAuNSwwLjMtMC43ICBjMC4yLTAuMiwwLjUtMC4zLDAuOC0wLjNjMC4zLDAsMC41LDAuMSwwLjcsMC4zYzAuMiwwLjIsMC4zLDAuNCwwLjMsMC43djUuMmMwLDAuMy0wLjEsMC41LTAuMywwLjdjLTAuMiwwLjItMC40LDAuMy0wLjcsMC4zSDQgIGMtMC4zLDAtMC41LTAuMS0wLjctMC4zQzMuMSwyMiwzLDIxLjgsMywyMS41YzAtMC4zLDAuMS0wLjYsMC4zLTAuOGMwLjItMC4yLDAuNC0wLjMsMC43LTAuM2gyLjhMNi40LDIwYy0xLjMtMS4xLTIuMi0yLjMtMi44LTMuNSAgYy'+
			'0wLjUtMS4yLTAuOC0yLjYtMC44LTMuOWMwLTEuMSwwLjItMiwwLjQtMi45YzAuMy0wLjksMC42LTEuNywxLjEtMi41TDAuMywzQzAuMSwyLjksMCwyLjYsMCwyLjNjMC0wLjMsMC4xLTAuNSwwLjMtMC43ICBDMC41LDEuNCwwLjcsMS4zLDEsMS4zYzAuMywwLDAuNSwwLjEsMC44LDAuM2wyMiwyMmMwLjIsMC4yLDAuMywwLjQsMC4zLDAuN2MwLDAuMy0wLjEsMC41LTAuMywwLjdjLTAuMiwwLjItMC41LDAuMy0wLjcsMC4zICBDMjIuNywyNS4zLDIyLjUsMjUuMiwyMi4zLDI1eiBNMjEuMSwxOC4xbC0xLjUtMS41YzAuNC0wLjYsMC42LTEuMywwLjgtMmMwLjItMC43LDAuMy0xLjQsMC4zLTIuMmMw'+
			'LTAuOS0wLjItMS45LTAuNi0yLjkgIGMtMC40LTEtMS4xLTEuOS0xLjktMi43bC0wLjctMC43djIuNmMwLDAuMy0wLjEsMC41LTAuMywwLjdjLTAuMiwwLjItMC41LDAuMy0wLjgsMC4zYy0wLjMsMC0wLjUtMC4xLTAuNy0wLjMgIGMtMC4yLTAuMi0wLjMtMC40LTAuMy0wLjdWMy41YzAtMC4zLDAuMS0wLjUsMC4zLTAuN2MwLjItMC4yLDAuNC0wLjMsMC43LTAuM2g1LjJjMC4zLDAsMC41LDAuMSwwLjcsMC4zYzAuMiwwLjIsMC4zLDAuNCwwLjMsMC43ICBjMCwwLjMtMC4xLDAuNi0wLjMsMC44Yy0wLjIsMC4yLTAuNCwwLjMtMC43LDAuM2gtMi45TDE5LjQsNWMxLjIsMS4yLDIuMSwyLjQsMi43LD'+
			'MuN2MwLjUsMS4zLDAuOCwyLjUsMC44LDMuN2MwLDEuMS0wLjEsMi4xLTAuNCwzICBDMjIuMiwxNi4zLDIxLjcsMTcuMiwyMS4xLDE4LjF6IE04LjgsNS43TDcuMyw0LjJjMC4xLTAuMSwwLjQtMC4zLDAuNi0wLjRjMC4zLTAuMiwwLjUtMC4zLDAuOC0wLjRjMC40LTAuMiwwLjctMC4yLDEsMCAgYzAuMywwLjIsMC40LDAuNSwwLjQsMC45YzAsMC4yLTAuMSwwLjQtMC4yLDAuNUM5LjgsNS4xLDkuNiw1LjIsOS41LDUuM0M5LjMsNS40LDkuMiw1LjQsOS4xLDUuNUM5LDUuNiw4LjksNS42LDguOCw1Ljd6IiBjbGFzcz0ic3QwIi8+Cjwvc3ZnPgo=';
		me._toggle_autorot_off__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._toggle_autorot_off__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDI1LjMgMjUuMyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB5PSIwcHgiIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMC'+
			'AyNS4zIDI1LjM7Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I2RmZTAzNjt9Cjwvc3R5bGU+CiA8cGF0aCBkPSJNMjIuMywyNWwtNC4xLTQuMWMtMC4yLDAuMS0wLjQsMC4yLTAuNSwwLjNjLTAuMiwwLjEtMC40LDAuMi0wLjYsMC4zYy0wLjMsMC4yLTAuNywwLjItMSwwICBjLTAuMy0wLjItMC41LTAuNS0wLjUtMWMwLTAuMiwwLjEtMC40LDAuMi0wLjVjMC4xLTAuMiwwLjMtMC4zLDAuNS0wLjRjMC4xLDAsMC4yLTAuMSwwLjItMC4xYzAuMSwwLDAuMS0wLjEsMC4yLTAuMUw1LjksOC43ICBjLTAuNCwwLjYtMC42LDEuMi0wLjgsMS45Yy0wLjIsMC43LTAuMiwxLjMtMC4y'+
			'LDJjMCwxLjEsMC4yLDIuMSwwLjYsMy4xYzAuNCwxLDEuMSwxLjgsMS45LDIuNmwwLjcsMC41di0yLjZjMC0wLjMsMC4xLTAuNSwwLjMtMC43ICBjMC4yLTAuMiwwLjUtMC4zLDAuOC0wLjNjMC4zLDAsMC41LDAuMSwwLjcsMC4zYzAuMiwwLjIsMC4zLDAuNCwwLjMsMC43djUuMmMwLDAuMy0wLjEsMC41LTAuMywwLjdjLTAuMiwwLjItMC40LDAuMy0wLjcsMC4zSDQgIGMtMC4zLDAtMC41LTAuMS0wLjctMC4zQzMuMSwyMiwzLDIxLjgsMywyMS41YzAtMC4zLDAuMS0wLjYsMC4zLTAuOGMwLjItMC4yLDAuNC0wLjMsMC43LTAuM2gyLjhMNi40LDIwYy0xLjMtMS4xLTIuMi0yLjMtMi44LTMuNSAgYy'+
			'0wLjUtMS4yLTAuOC0yLjYtMC44LTMuOWMwLTEuMSwwLjItMiwwLjQtMi45YzAuMy0wLjksMC42LTEuNywxLjEtMi41TDAuMywzQzAuMSwyLjksMCwyLjYsMCwyLjNjMC0wLjMsMC4xLTAuNSwwLjMtMC43ICBDMC41LDEuNCwwLjcsMS4zLDEsMS4zYzAuMywwLDAuNSwwLjEsMC44LDAuM2wyMiwyMmMwLjIsMC4yLDAuMywwLjQsMC4zLDAuN2MwLDAuMy0wLjEsMC41LTAuMywwLjdjLTAuMiwwLjItMC41LDAuMy0wLjcsMC4zICBDMjIuNywyNS4zLDIyLjUsMjUuMiwyMi4zLDI1eiBNMjEuMSwxOC4xbC0xLjUtMS41YzAuNC0wLjYsMC42LTEuMywwLjgtMmMwLjItMC43LDAuMy0xLjQsMC4zLTIuMmMw'+
			'LTAuOS0wLjItMS45LTAuNi0yLjkgIGMtMC40LTEtMS4xLTEuOS0xLjktMi43bC0wLjctMC43djIuNmMwLDAuMy0wLjEsMC41LTAuMywwLjdjLTAuMiwwLjItMC41LDAuMy0wLjgsMC4zYy0wLjMsMC0wLjUtMC4xLTAuNy0wLjMgIGMtMC4yLTAuMi0wLjMtMC40LTAuMy0wLjdWMy41YzAtMC4zLDAuMS0wLjUsMC4zLTAuN2MwLjItMC4yLDAuNC0wLjMsMC43LTAuM2g1LjJjMC4zLDAsMC41LDAuMSwwLjcsMC4zYzAuMiwwLjIsMC4zLDAuNCwwLjMsMC43ICBjMCwwLjMtMC4xLDAuNi0wLjMsMC44Yy0wLjIsMC4yLTAuNCwwLjMtMC43LDAuM2gtMi45TDE5LjQsNWMxLjIsMS4yLDIuMSwyLjQsMi43LD'+
			'MuN2MwLjUsMS4zLDAuOCwyLjUsMC44LDMuN2MwLDEuMS0wLjEsMi4xLTAuNCwzICBDMjIuMiwxNi4zLDIxLjcsMTcuMiwyMS4xLDE4LjF6IE04LjgsNS43TDcuMyw0LjJjMC4xLTAuMSwwLjQtMC4zLDAuNi0wLjRjMC4zLTAuMiwwLjUtMC4zLDAuOC0wLjRjMC40LTAuMiwwLjctMC4yLDEsMCAgYzAuMywwLjIsMC40LDAuNSwwLjQsMC45YzAsMC4yLTAuMSwwLjQtMC4yLDAuNUM5LjgsNS4xLDkuNiw1LjIsOS41LDUuM0M5LjMsNS40LDkuMiw1LjQsOS4xLDUuNUM5LDUuNiw4LjksNS42LDguOCw1Ljd6IiBjbGFzcz0ic3QwIi8+Cjwvc3ZnPgo=';
		me._toggle_autorot_off__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="toggle_autorot_off";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg svg_shadow";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._toggle_autorot_off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._toggle_autorot_off.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsAutorotating() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._toggle_autorot_off.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._toggle_autorot_off.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._toggle_autorot_off.style.transition='';
				if (me._toggle_autorot_off.ggCurrentLogicStateVisible == 0) {
					me._toggle_autorot_off.style.visibility="hidden";
					me._toggle_autorot_off.ggVisible=false;
				}
				else {
					me._toggle_autorot_off.style.visibility=(Number(me._toggle_autorot_off.style.opacity)>0||!me._toggle_autorot_off.style.opacity)?'inherit':'hidden';
					me._toggle_autorot_off.ggVisible=true;
				}
			}
		}
		me._toggle_autorot_off.logicBlock_visible();
		me._toggle_autorot_off.onclick=function (e) {
			player.stopAutorotate();
		}
		me._toggle_autorot_off.onmouseenter=function (e) {
			me._toggle_autorot_off__img.style.visibility='hidden';
			me._toggle_autorot_off__imgo.style.visibility='inherit';
			me.elementMouseOver['toggle_autorot_off']=true;
		}
		me._toggle_autorot_off.onmouseleave=function (e) {
			me._toggle_autorot_off__img.style.visibility='inherit';
			me._toggle_autorot_off__imgo.style.visibility='hidden';
			me.elementMouseOver['toggle_autorot_off']=false;
		}
		me._toggle_autorot_off.ggUpdatePosition=function (useTransition) {
		}
		me._toggle_autorot_btn.appendChild(me._toggle_autorot_off);
		el=me._toggle_autorot_on=document.createElement('div');
		els=me._toggle_autorot_on__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDI1LjMgMjUuMyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB5PSIwcHgiIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMC'+
			'AyNS4zIDI1LjM7Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CiA8cGF0aCBkPSJNMTcuMiwyMS41Yy0wLjQsMC4yLTAuNywwLjItMSwwYy0wLjMtMC4yLTAuNC0wLjUtMC40LTFjMC0wLjIsMC4xLTAuMywwLjItMC41YzAuMS0wLjIsMC4zLTAuMywwLjUtMC40ICBjMS40LTAuNywyLjUtMS42LDMuMy0zYzAuOC0xLjMsMS4yLTIuOCwxLjItNC40YzAtMS0wLjItMi0wLjctM2MtMC40LTEtMS4xLTEuOS0xLjktMi43bC0wLjctMC43djIuNmMwLDAuMy0wLjEsMC41LTAuMywwLjcgIGMtMC4yLDAuMi0wLjUsMC4zLTAuOCwwLjNzLTAuNS0wLjEt'+
			'MC43LTAuM2MtMC4yLTAuMi0wLjMtMC40LTAuMy0wLjdWMy4yYzAtMC4zLDAuMS0wLjUsMC4zLTAuN2MwLjItMC4yLDAuNC0wLjMsMC43LTAuM2g1LjIgIGMwLjMsMCwwLjUsMC4xLDAuNywwLjNjMC4yLDAuMiwwLjMsMC40LDAuMywwLjdjMCwwLjMtMC4xLDAuNi0wLjMsMC44Yy0wLjIsMC4yLTAuNCwwLjMtMC43LDAuM2gtMi45bDAuNSwwLjQgIGMxLjIsMS4xLDIsMi4zLDIuNiwzLjZDMjIuNyw5LjcsMjMsMTEsMjMsMTIuMmMwLDItMC41LDMuOS0xLjYsNS41QzIwLjQsMTkuNCwxOSwyMC43LDE3LjIsMjEuNXogTTQuMiwyMi41Yy0wLjMsMC0wLjUtMC4xLTAuNy0wLjMgIGMtMC4yLTAuMi0wLj'+
			'MtMC40LTAuMy0wLjdjMC0wLjMsMC4xLTAuNiwwLjMtMC44YzAuMi0wLjIsMC40LTAuMywwLjctMC4zSDdMNi41LDIwYy0xLjItMS4xLTIuMS0yLjItMi43LTMuNSAgQzMuMiwxNS4yLDMsMTMuOSwzLDEyLjRjMC0yLDAuNS0zLjksMS42LTUuNVM3LjEsNCw4LjgsMy4yYzAuNC0wLjIsMC43LTAuMiwxLDBjMC4zLDAuMiwwLjQsMC41LDAuNCwwLjljMCwwLjItMC4xLDAuNC0wLjIsMC41ICBDOS45LDQuOCw5LjgsNSw5LjYsNS4xYy0xLjQsMC43LTIuNSwxLjYtMy4zLDNzLTEuMiwyLjgtMS4yLDQuNGMwLDEuMiwwLjIsMi4zLDAuNywzLjJjMC40LDEsMS4xLDEuOCwxLjksMi41bDAuNywwLjV2LTIu'+
			'NiAgYzAtMC4zLDAuMS0wLjUsMC4zLTAuN2MwLjItMC4yLDAuNS0wLjMsMC44LTAuM2MwLjMsMCwwLjUsMC4xLDAuNywwLjNjMC4yLDAuMiwwLjMsMC40LDAuMywwLjd2NS4zYzAsMC4zLTAuMSwwLjUtMC4zLDAuNyAgYy0wLjIsMC4yLTAuNCwwLjMtMC43LDAuM0g0LjJ6IiBjbGFzcz0ic3QwIi8+Cjwvc3ZnPgo=';
		me._toggle_autorot_on__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._toggle_autorot_on__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDI1LjMgMjUuMyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB5PSIwcHgiIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMC'+
			'AyNS4zIDI1LjM7Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I2RmZTAzNjt9Cjwvc3R5bGU+CiA8cGF0aCBkPSJNMTcuMiwyMS41Yy0wLjQsMC4yLTAuNywwLjItMSwwYy0wLjMtMC4yLTAuNC0wLjUtMC40LTFjMC0wLjIsMC4xLTAuMywwLjItMC41YzAuMS0wLjIsMC4zLTAuMywwLjUtMC40ICBjMS40LTAuNywyLjUtMS42LDMuMy0zYzAuOC0xLjMsMS4yLTIuOCwxLjItNC40YzAtMS0wLjItMi0wLjctM2MtMC40LTEtMS4xLTEuOS0xLjktMi43bC0wLjctMC43djIuNmMwLDAuMy0wLjEsMC41LTAuMywwLjcgIGMtMC4yLDAuMi0wLjUsMC4zLTAuOCwwLjNzLTAuNS0wLjEt'+
			'MC43LTAuM2MtMC4yLTAuMi0wLjMtMC40LTAuMy0wLjdWMy4yYzAtMC4zLDAuMS0wLjUsMC4zLTAuN2MwLjItMC4yLDAuNC0wLjMsMC43LTAuM2g1LjIgIGMwLjMsMCwwLjUsMC4xLDAuNywwLjNjMC4yLDAuMiwwLjMsMC40LDAuMywwLjdjMCwwLjMtMC4xLDAuNi0wLjMsMC44Yy0wLjIsMC4yLTAuNCwwLjMtMC43LDAuM2gtMi45bDAuNSwwLjQgIGMxLjIsMS4xLDIsMi4zLDIuNiwzLjZDMjIuNyw5LjcsMjMsMTEsMjMsMTIuMmMwLDItMC41LDMuOS0xLjYsNS41QzIwLjQsMTkuNCwxOSwyMC43LDE3LjIsMjEuNXogTTQuMiwyMi41Yy0wLjMsMC0wLjUtMC4xLTAuNy0wLjMgIGMtMC4yLTAuMi0wLj'+
			'MtMC40LTAuMy0wLjdjMC0wLjMsMC4xLTAuNiwwLjMtMC44YzAuMi0wLjIsMC40LTAuMywwLjctMC4zSDdMNi41LDIwYy0xLjItMS4xLTIuMS0yLjItMi43LTMuNSAgQzMuMiwxNS4yLDMsMTMuOSwzLDEyLjRjMC0yLDAuNS0zLjksMS42LTUuNVM3LjEsNCw4LjgsMy4yYzAuNC0wLjIsMC43LTAuMiwxLDBjMC4zLDAuMiwwLjQsMC41LDAuNCwwLjljMCwwLjItMC4xLDAuNC0wLjIsMC41ICBDOS45LDQuOCw5LjgsNSw5LjYsNS4xYy0xLjQsMC43LTIuNSwxLjYtMy4zLDNzLTEuMiwyLjgtMS4yLDQuNGMwLDEuMiwwLjIsMi4zLDAuNywzLjJjMC40LDEsMS4xLDEuOCwxLjksMi41bDAuNywwLjV2LTIu'+
			'NiAgYzAtMC4zLDAuMS0wLjUsMC4zLTAuN2MwLjItMC4yLDAuNS0wLjMsMC44LTAuM2MwLjMsMCwwLjUsMC4xLDAuNywwLjNjMC4yLDAuMiwwLjMsMC40LDAuMywwLjd2NS4zYzAsMC4zLTAuMSwwLjUtMC4zLDAuNyAgYy0wLjIsMC4yLTAuNCwwLjMtMC43LDAuM0g0LjJ6IiBjbGFzcz0ic3QwIi8+Cjwvc3ZnPgo=';
		me._toggle_autorot_on__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="toggle_autorot_on";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg svg_shadow";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._toggle_autorot_on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._toggle_autorot_on.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsAutorotating() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._toggle_autorot_on.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._toggle_autorot_on.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._toggle_autorot_on.style.transition='';
				if (me._toggle_autorot_on.ggCurrentLogicStateVisible == 0) {
					me._toggle_autorot_on.style.visibility=(Number(me._toggle_autorot_on.style.opacity)>0||!me._toggle_autorot_on.style.opacity)?'inherit':'hidden';
					me._toggle_autorot_on.ggVisible=true;
				}
				else {
					me._toggle_autorot_on.style.visibility="hidden";
					me._toggle_autorot_on.ggVisible=false;
				}
			}
		}
		me._toggle_autorot_on.logicBlock_visible();
		me._toggle_autorot_on.onclick=function (e) {
			player.startAutorotate(0.05);
		}
		me._toggle_autorot_on.onmouseenter=function (e) {
			me._toggle_autorot_on__img.style.visibility='hidden';
			me._toggle_autorot_on__imgo.style.visibility='inherit';
			me.elementMouseOver['toggle_autorot_on']=true;
		}
		me._toggle_autorot_on.onmouseleave=function (e) {
			me._toggle_autorot_on__img.style.visibility='inherit';
			me._toggle_autorot_on__imgo.style.visibility='hidden';
			me.elementMouseOver['toggle_autorot_on']=false;
		}
		me._toggle_autorot_on.ggUpdatePosition=function (useTransition) {
		}
		me._toggle_autorot_btn.appendChild(me._toggle_autorot_on);
		me._control_buttons.appendChild(me._toggle_autorot_btn);
		el=me._toggle_audio_btn=document.createElement('div');
		el.ggId="toggle_audio_btn";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._toggle_audio_btn.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._toggle_audio_btn.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getHasSounds() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._toggle_audio_btn.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._toggle_audio_btn.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._toggle_audio_btn.style.transition='';
				if (me._toggle_audio_btn.ggCurrentLogicStateVisible == 0) {
					me._toggle_audio_btn.style.visibility=(Number(me._toggle_audio_btn.style.opacity)>0||!me._toggle_audio_btn.style.opacity)?'inherit':'hidden';
					me._toggle_audio_btn.ggVisible=true;
				}
				else {
					me._toggle_audio_btn.style.visibility="hidden";
					me._toggle_audio_btn.ggVisible=false;
				}
			}
		}
		me._toggle_audio_btn.logicBlock_visible();
		me._toggle_audio_btn.onclick=function (e) {
			player.toggleMuted("_all");
			player.setVariableValue('toggle_audio', !player.getVariableValue('toggle_audio'));
		}
		me._toggle_audio_btn.ggUpdatePosition=function (useTransition) {
		}
		el=me._toggle_audio_off=document.createElement('div');
		els=me._toggle_audio_off__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjE4cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNCAyNCIgaGVpZ2h0PSIxOHB4Ij4KIDxnPgogIDxyZWN0IGZpbGw9Im5vbmUiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIvPgogPC9nPgogPGc+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0xNi4yNSwxMy40MkMxNi40LDEyLjk3LDE2LjUsMTIuNSwxNi41LDEyYzAtMS43Ny0xLjAyLTMuMjktMi41LTQuMDN2My4yTDE2LjI1LDEzLjQyeiIvPgogICA8cGF0aCBkPSJNMTksMTJjMCwxLjIxLTAuMzEsMi4zNC'+
			'0wLjg1LDMuMzJsMS40NiwxLjQ2QzIwLjQ4LDE1LjM5LDIxLDEzLjc2LDIxLDEyYzAtMy44My0yLjQtNy4xMS01Ljc4LTguNCBDMTQuNjMsMy4zNywxNCwzLjgzLDE0LDQuNDZ2MC4xOWMwLDAuMzgsMC4yNSwwLjcxLDAuNjEsMC44NUMxNy4xOCw2LjU0LDE5LDkuMDYsMTksMTJ6Ii8+CiAgIDxwYXRoIGQ9Ik0yLjEsMy41MUwyLjEsMy41MWMtMC4zOSwwLjM5LTAuMzksMS4wMiwwLDEuNDFMNi4xNyw5SDRjLTAuNTUsMC0xLDAuNDUtMSwxdjRjMCwwLjU1LDAuNDUsMSwxLDFoM2wzLjI5LDMuMjkgYzAuNjMsMC42MywxLjcxLDAuMTgsMS43MS0wLjcxdi0yLjc2bDMuMzIsMy4zMmMtMC4yMywwLjEz'+
			'LTAuNDcsMC4yNC0wLjcxLDAuMzVjLTAuMzcsMC4xNi0wLjYsMC41Mi0wLjYsMC45MXYwIGMwLDAuNywwLjcsMS4yLDEuMzUsMC45NGMwLjUtMC4yLDAuOTktMC40NSwxLjQ0LTAuNzNsMi4yOCwyLjI4YzAuMzksMC4zOSwxLjAyLDAuMzksMS40MSwwbDAsMGMwLjM5LTAuMzksMC4zOS0xLjAyLDAtMS40MSBMMy41MSwzLjUxQzMuMTIsMy4xMiwyLjQ5LDMuMTIsMi4xLDMuNTF6Ii8+CiAgIDxwYXRoIGQ9Ik0xMiw5LjE3VjYuNDFjMC0wLjg5LTEuMDgtMS4zNC0xLjcxLTAuNzFMOS40MSw2LjU5TDEyLDkuMTd6Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._toggle_audio_off__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._toggle_audio_off__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDE4IDE4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHk9IjBweCIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE4ID'+
			'E4OyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDojZGZlMDM2O30mI3hkOwo8L3N0eWxlPgogPGc+CiAgPHJlY3Qgd2lkdGg9IjE4IiBjbGFzcz0ic3QwIiBoZWlnaHQ9IjE4Ii8+CiA8L2c+CiA8Zz4KICA8Zz4KICAgPHBhdGggZD0iTTEyLjIsMTAuMWMwLjEtMC4zLDAuMi0wLjcsMC4yLTEuMWMwLTEuMy0wLjgtMi41LTEuOS0zdjIuNEwxMi4yLDEwLjF6IiBjbGFzcz0ic3QxIi8+CiAgIDxwYXRoIGQ9Ik0xNC4yLDljMCwwLjktMC4yLDEuOC0wLjYsMi41bDEuMSwxLjFjMC43LTEsMS0yLjMsMS0zLjZjMC0yLjktMS44LTUu'+
			'My00LjMtNi4zYy0wLjQtMC4yLTAuOSwwLjItMC45LDAuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTt2MC4xYzAsMC4zLDAuMiwwLjUsMC41LDAuNkMxMi45LDQuOSwxNC4yLDYuOCwxNC4yLDl6IiBjbGFzcz0ic3QxIi8+CiAgIDxwYXRoIGQ9Ik0xLjYsMi42TDEuNiwyLjZjLTAuMywwLjMtMC4zLDAuOCwwLDEuMWwzLjEsMy4xSDNjLTAuNCwwLTAuOCwwLjMtMC44LDAuOHYzYzAsMC40LDAuMywwLjgsMC44LDAuOGgyLjImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7bDIuNSwyLjVDOC4yLDE0LjIsOSwxMy45LDksMTMuMnYtMi4xbDIuNSwyLjVjLTAuMiwwLjEtMC40LDAuMi0wLjUsMC4zYy0wLj'+
			'MsMC4xLTAuNCwwLjQtMC40LDAuN2wwLDBjMCwwLjUsMC41LDAuOSwxLDAuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC40LTAuMSwwLjctMC4zLDEuMS0wLjVsMS43LDEuN2MwLjMsMC4zLDAuOCwwLjMsMS4xLDBsMCwwYzAuMy0wLjMsMC4zLTAuOCwwLTEuMUwyLjYsMi42QzIuMywyLjMsMS45LDIuMywxLjYsMi42eiIgY2xhc3M9InN0MSIvPgogICA8cGF0aCBkPSJNOSw2LjlWNC44YzAtMC43LTAuOC0xLTEuMy0wLjVMNy4xLDQuOUw5LDYuOXoiIGNsYXNzPSJzdDEiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._toggle_audio_off__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="toggle_audio_off";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg svg_shadow";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._toggle_audio_off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._toggle_audio_off.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('toggle_audio') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._toggle_audio_off.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._toggle_audio_off.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._toggle_audio_off.style.transition='';
				if (me._toggle_audio_off.ggCurrentLogicStateVisible == 0) {
					me._toggle_audio_off.style.visibility="hidden";
					me._toggle_audio_off.ggVisible=false;
				}
				else {
					me._toggle_audio_off.style.visibility=(Number(me._toggle_audio_off.style.opacity)>0||!me._toggle_audio_off.style.opacity)?'inherit':'hidden';
					me._toggle_audio_off.ggVisible=true;
				}
			}
		}
		me._toggle_audio_off.logicBlock_visible();
		me._toggle_audio_off.onmouseenter=function (e) {
			me._toggle_audio_off__img.style.visibility='hidden';
			me._toggle_audio_off__imgo.style.visibility='inherit';
			me.elementMouseOver['toggle_audio_off']=true;
		}
		me._toggle_audio_off.onmouseleave=function (e) {
			me._toggle_audio_off__img.style.visibility='inherit';
			me._toggle_audio_off__imgo.style.visibility='hidden';
			me.elementMouseOver['toggle_audio_off']=false;
		}
		me._toggle_audio_off.ggUpdatePosition=function (useTransition) {
		}
		me._toggle_audio_btn.appendChild(me._toggle_audio_off);
		el=me._toggle_audio_on=document.createElement('div');
		els=me._toggle_audio_on__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjE4cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNCAyNCIgaGVpZ2h0PSIxOHB4Ij4KIDxnPgogIDxyZWN0IGZpbGw9Im5vbmUiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIvPgogPC9nPgogPGc+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0zLDEwdjRjMCwwLjU1LDAuNDUsMSwxLDFoM2wzLjI5LDMuMjljMC42MywwLjYzLDEuNzEsMC4xOCwxLjcxLTAuNzFWNi40MWMwLTAuODktMS4wOC0xLjM0LTEuNzEtMC43MUw3LDlINCBDMy40NSw5LDMsOS40NSwzLD'+
			'EweiBNMTYuNSwxMmMwLTEuNzctMS4wMi0zLjI5LTIuNS00LjAzdjguMDVDMTUuNDgsMTUuMjksMTYuNSwxMy43NywxNi41LDEyeiBNMTQsNC40NXYwLjIgYzAsMC4zOCwwLjI1LDAuNzEsMC42LDAuODVDMTcuMTgsNi41MywxOSw5LjA2LDE5LDEycy0xLjgyLDUuNDctNC40LDYuNWMtMC4zNiwwLjE0LTAuNiwwLjQ3LTAuNiwwLjg1djAuMiBjMCwwLjYzLDAuNjMsMS4wNywxLjIxLDAuODVDMTguNiwxOS4xMSwyMSwxNS44NCwyMSwxMnMtMi40LTcuMTEtNS43OS04LjRDMTQuNjMsMy4zNywxNCwzLjgyLDE0LDQuNDV6Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._toggle_audio_on__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._toggle_audio_on__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDE4IDE4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHk9IjBweCIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE4ID'+
			'E4OyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDojZGZlMDM2O30mI3hkOwo8L3N0eWxlPgogPGc+CiAgPHJlY3Qgd2lkdGg9IjE4IiBjbGFzcz0ic3QwIiBoZWlnaHQ9IjE4Ii8+CiA8L2c+CiA8Zz4KICA8Zz4KICAgPHBhdGggZD0iTTIuMiw3LjV2M2MwLDAuNCwwLjMsMC44LDAuOCwwLjhoMi4ybDIuNSwyLjVDOC4yLDE0LjIsOSwxMy45LDksMTMuMlY0LjhjMC0wLjctMC44LTEtMS4zLTAuNUw1LjIsNi44SDMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7QzIuNiw2LjgsMi4yLDcuMSwyLjIsNy41eiBNMTIuNCw5YzAtMS4z'+
			'LTAuOC0yLjUtMS45LTN2NkMxMS42LDExLjUsMTIuNCwxMC4zLDEyLjQsOXogTTEwLjUsMy4zdjAuMWMwLDAuMywwLjIsMC41LDAuNSwwLjYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzEuOSwwLjgsMy4zLDIuNywzLjMsNC45cy0xLjQsNC4xLTMuMyw0LjljLTAuMywwLjEtMC41LDAuNC0wLjUsMC42djAuMWMwLDAuNSwwLjUsMC44LDAuOSwwLjZjMi41LTEsNC4zLTMuNCw0LjMtNi4zJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O1MxNCwzLjcsMTEuNCwyLjdDMTEsMi41LDEwLjUsMi45LDEwLjUsMy4zeiIgY2xhc3M9InN0MSIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._toggle_audio_on__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="toggle_audio_on";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg svg_shadow";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._toggle_audio_on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._toggle_audio_on.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('toggle_audio') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._toggle_audio_on.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._toggle_audio_on.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._toggle_audio_on.style.transition='';
				if (me._toggle_audio_on.ggCurrentLogicStateVisible == 0) {
					me._toggle_audio_on.style.visibility=(Number(me._toggle_audio_on.style.opacity)>0||!me._toggle_audio_on.style.opacity)?'inherit':'hidden';
					me._toggle_audio_on.ggVisible=true;
				}
				else {
					me._toggle_audio_on.style.visibility="hidden";
					me._toggle_audio_on.ggVisible=false;
				}
			}
		}
		me._toggle_audio_on.logicBlock_visible();
		me._toggle_audio_on.onmouseenter=function (e) {
			me._toggle_audio_on__img.style.visibility='hidden';
			me._toggle_audio_on__imgo.style.visibility='inherit';
			me.elementMouseOver['toggle_audio_on']=true;
		}
		me._toggle_audio_on.onmouseleave=function (e) {
			me._toggle_audio_on__img.style.visibility='inherit';
			me._toggle_audio_on__imgo.style.visibility='hidden';
			me.elementMouseOver['toggle_audio_on']=false;
		}
		me._toggle_audio_on.ggUpdatePosition=function (useTransition) {
		}
		me._toggle_audio_btn.appendChild(me._toggle_audio_on);
		me._control_buttons.appendChild(me._toggle_audio_btn);
		el=me._toggle_fullscreen_btn=document.createElement('div');
		el.ggId="toggle_fullscreen_btn";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._toggle_fullscreen_btn.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._toggle_fullscreen_btn.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_fullscreen') == true)) && 
				((player.getVariableValue('has_fullscreen') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._toggle_fullscreen_btn.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._toggle_fullscreen_btn.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._toggle_fullscreen_btn.style.transition='';
				if (me._toggle_fullscreen_btn.ggCurrentLogicStateVisible == 0) {
					me._toggle_fullscreen_btn.style.visibility=(Number(me._toggle_fullscreen_btn.style.opacity)>0||!me._toggle_fullscreen_btn.style.opacity)?'inherit':'hidden';
					me._toggle_fullscreen_btn.ggVisible=true;
				}
				else {
					me._toggle_fullscreen_btn.style.visibility="hidden";
					me._toggle_fullscreen_btn.ggVisible=false;
				}
			}
		}
		me._toggle_fullscreen_btn.logicBlock_visible();
		me._toggle_fullscreen_btn.onclick=function (e) {
			player.toggleFullscreen();
		}
		me._toggle_fullscreen_btn.ggUpdatePosition=function (useTransition) {
		}
		el=me._toggle_fullscreen_off=document.createElement('div');
		els=me._toggle_fullscreen_off__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjE4cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNCAyNCIgaGVpZ2h0PSIxOHB4Ij4KIDxnPgogIDxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wLDBoMjR2MjRIMFYweiIvPgogPC9nPgogPGc+CiAgPGc+CiAgIDxnPgogICAgPHBhdGggZD0iTTYsMTZoMnYyYzAsMC41NSwwLjQ1LDEsMSwxbDAsMGMwLjU1LDAsMS0wLjQ1LDEtMXYtM2MwLTAuNTUtMC40NS0xLTEtMUg2Yy0wLjU1LDAtMSwwLjQ1LTEsMWwwLDBDNSwxNS41NSw1LjQ1LDE2LDYsMTYgei'+
			'BNOCw4SDZDNS40NSw4LDUsOC40NSw1LDlsMCwwYzAsMC41NSwwLjQ1LDEsMSwxaDNjMC41NSwwLDEtMC40NSwxLTFWNmMwLTAuNTUtMC40NS0xLTEtMWwwLDBDOC40NSw1LDgsNS40NSw4LDZWOHogTTE1LDE5IEwxNSwxOWMwLjU1LDAsMS0wLjQ1LDEtMXYtMmgyYzAuNTUsMCwxLTAuNDUsMS0xbDAsMGMwLTAuNTUtMC40NS0xLTEtMWgtM2MtMC41NSwwLTEsMC40NS0xLDF2M0MxNCwxOC41NSwxNC40NSwxOSwxNSwxOXogTTE2LDggVjZjMC0wLjU1LTAuNDUtMS0xLTFsMCwwYy0wLjU1LDAtMSwwLjQ1LTEsMXYzYzAsMC41NSwwLjQ1LDEsMSwxaDNjMC41NSwwLDEtMC40NSwxLTFsMCwwYzAtMC41'+
			'NS0wLjQ1LTEtMS0xSDE2eiIvPgogICA8L2c+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._toggle_fullscreen_off__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._toggle_fullscreen_off__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDE4IDE4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHk9IjBweCIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE4ID'+
			'E4OyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDojZGZlMDM2O30mI3hkOwo8L3N0eWxlPgogPGc+CiAgPHBhdGggZD0iTTAsMGgxOHYxOEgwVjB6IiBjbGFzcz0ic3QwIi8+CiA8L2c+CiA8Zz4KICA8Zz4KICAgPGc+CiAgICA8cGF0aCBkPSJNNC41LDEySDZ2MS41YzAsMC40LDAuMywwLjgsMC44LDAuOGwwLDBjMC40LDAsMC44LTAuMywwLjgtMC44di0yLjJjMC0wLjQtMC4zLTAuOC0wLjgtMC44SDQuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC40LDAtMC44LDAuMy0wLjgsMC44bDAsMEMzLjgsMTEuNyw0'+
			'LjEsMTIsNC41LDEyeiBNNiw2SDQuNUM0LjEsNiwzLjgsNi4zLDMuOCw2LjhsMCwwYzAsMC40LDAuMywwLjgsMC44LDAuOGgyLjImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC40LDAsMC44LTAuMywwLjgtMC44VjQuNWMwLTAuNC0wLjMtMC44LTAuOC0wLjhsMCwwQzYuMywzLjgsNiw0LjEsNiw0LjVWNnogTTExLjIsMTQuMkwxMS4yLDE0LjJjMC40LDAsMC44LTAuMywwLjgtMC44VjEyJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7aDEuNWMwLjQsMCwwLjgtMC4zLDAuOC0wLjhsMCwwYzAtMC40LTAuMy0wLjgtMC44LTAuOGgtMi4yYy0wLjQsMC0wLjgsMC4zLTAuOCwwLjh2Mi'+
			'4yQzEwLjUsMTMuOSwxMC44LDE0LjIsMTEuMiwxNC4yeiBNMTIsNiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O1Y0LjVjMC0wLjQtMC4zLTAuOC0wLjgtMC44bDAsMGMtMC40LDAtMC44LDAuMy0wLjgsMC44djIuMmMwLDAuNCwwLjMsMC44LDAuOCwwLjhoMi4yYzAuNCwwLDAuOC0wLjMsMC44LTAuOGwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC0wLjQtMC4zLTAuOC0wLjgtMC44SDEyeiIgY2xhc3M9InN0MSIvPgogICA8L2c+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._toggle_fullscreen_off__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="toggle_fullscreen_off";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg svg_shadow";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._toggle_fullscreen_off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._toggle_fullscreen_off.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._toggle_fullscreen_off.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._toggle_fullscreen_off.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._toggle_fullscreen_off.style.transition='';
				if (me._toggle_fullscreen_off.ggCurrentLogicStateVisible == 0) {
					me._toggle_fullscreen_off.style.visibility=(Number(me._toggle_fullscreen_off.style.opacity)>0||!me._toggle_fullscreen_off.style.opacity)?'inherit':'hidden';
					me._toggle_fullscreen_off.ggVisible=true;
				}
				else {
					me._toggle_fullscreen_off.style.visibility="hidden";
					me._toggle_fullscreen_off.ggVisible=false;
				}
			}
		}
		me._toggle_fullscreen_off.logicBlock_visible();
		me._toggle_fullscreen_off.onmouseenter=function (e) {
			me._toggle_fullscreen_off__img.style.visibility='hidden';
			me._toggle_fullscreen_off__imgo.style.visibility='inherit';
			me.elementMouseOver['toggle_fullscreen_off']=true;
		}
		me._toggle_fullscreen_off.onmouseleave=function (e) {
			me._toggle_fullscreen_off__img.style.visibility='inherit';
			me._toggle_fullscreen_off__imgo.style.visibility='hidden';
			me.elementMouseOver['toggle_fullscreen_off']=false;
		}
		me._toggle_fullscreen_off.ggUpdatePosition=function (useTransition) {
		}
		me._toggle_fullscreen_btn.appendChild(me._toggle_fullscreen_off);
		el=me._toggle_fullscreen_on=document.createElement('div');
		els=me._toggle_fullscreen_on__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjE4cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNCAyNCIgaGVpZ2h0PSIxOHB4Ij4KIDxnPgogIDxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wLDBoMjR2MjRIMFYweiIvPgogPC9nPgogPGc+CiAgPGc+CiAgIDxnPgogICAgPHBhdGggZD0iTTYsMTRMNiwxNGMtMC41NSwwLTEsMC40NS0xLDF2M2MwLDAuNTUsMC40NSwxLDEsMWgzYzAuNTUsMCwxLTAuNDUsMS0xbDAsMGMwLTAuNTUtMC40NS0xLTEtMUg3di0yIEM3LDE0LjQ1LDYuNTUsMTQsNiwxNH'+
			'ogTTYsMTBMNiwxMGMwLjU1LDAsMS0wLjQ1LDEtMVY3aDJjMC41NSwwLDEtMC40NSwxLTFsMCwwYzAtMC41NS0wLjQ1LTEtMS0xSDZDNS40NSw1LDUsNS40NSw1LDZ2MyBDNSw5LjU1LDUuNDUsMTAsNiwxMHogTTE3LDE3aC0yYy0wLjU1LDAtMSwwLjQ1LTEsMWwwLDBjMCwwLjU1LDAuNDUsMSwxLDFoM2MwLjU1LDAsMS0wLjQ1LDEtMXYtM2MwLTAuNTUtMC40NS0xLTEtMWwwLDAgYy0wLjU1LDAtMSwwLjQ1LTEsMVYxN3ogTTE0LDZMMTQsNmMwLDAuNTUsMC40NSwxLDEsMWgydjJjMCwwLjU1LDAuNDUsMSwxLDFsMCwwYzAuNTUsMCwxLTAuNDUsMS0xVjZjMC0wLjU1LTAuNDUtMS0xLTFoLTMgQzE0'+
			'LjQ1LDUsMTQsNS40NSwxNCw2eiIvPgogICA8L2c+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._toggle_fullscreen_on__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._toggle_fullscreen_on__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDE4IDE4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHk9IjBweCIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE4ID'+
			'E4OyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDojZGZlMDM2O30mI3hkOwo8L3N0eWxlPgogPGc+CiAgPHBhdGggZD0iTTAsMGgxOHYxOEgwVjB6IiBjbGFzcz0ic3QwIi8+CiA8L2c+CiA8Zz4KICA8Zz4KICAgPGc+CiAgICA8cGF0aCBkPSJNNC41LDEwLjVMNC41LDEwLjVjLTAuNCwwLTAuOCwwLjMtMC44LDAuOHYyLjJjMCwwLjQsMC4zLDAuOCwwLjgsMC44aDIuMmMwLjQsMCwwLjgtMC4zLDAuOC0wLjhsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAtMC40LTAuMy0wLjgtMC44LTAuOEg1LjJ2LTEuNUM1'+
			'LjIsMTAuOCw0LjksMTAuNSw0LjUsMTAuNXogTTQuNSw3LjVMNC41LDcuNWMwLjQsMCwwLjgtMC4zLDAuOC0wLjhWNS4yaDEuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLjQsMCwwLjgtMC4zLDAuOC0wLjhsMCwwYzAtMC40LTAuMy0wLjgtMC44LTAuOEg0LjVjLTAuNCwwLTAuOCwwLjMtMC44LDAuOHYyLjJDMy44LDcuMiw0LjEsNy41LDQuNSw3LjV6IE0xMi44LDEyLjhoLTEuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC40LDAtMC44LDAuMy0wLjgsMC44bDAsMGMwLDAuNCwwLjMsMC44LDAuOCwwLjhoMi4yYzAuNCwwLDAuOC0wLjMsMC44LTAuOHYtMi4yYzAtMC'+
			'40LTAuMy0wLjgtMC44LTAuOGwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNCwwLTAuOCwwLjMtMC44LDAuOFYxMi44eiBNMTAuNSw0LjVMMTAuNSw0LjVjMCwwLjQsMC4zLDAuOCwwLjgsMC44aDEuNXYxLjVjMCwwLjQsMC4zLDAuOCwwLjgsMC44bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLjQsMCwwLjgtMC4zLDAuOC0wLjhWNC41YzAtMC40LTAuMy0wLjgtMC44LTAuOGgtMi4yQzEwLjgsMy44LDEwLjUsNC4xLDEwLjUsNC41eiIgY2xhc3M9InN0MSIvPgogICA8L2c+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._toggle_fullscreen_on__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="toggle_fullscreen_on";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg svg_shadow";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._toggle_fullscreen_on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._toggle_fullscreen_on.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._toggle_fullscreen_on.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._toggle_fullscreen_on.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._toggle_fullscreen_on.style.transition='';
				if (me._toggle_fullscreen_on.ggCurrentLogicStateVisible == 0) {
					me._toggle_fullscreen_on.style.visibility="hidden";
					me._toggle_fullscreen_on.ggVisible=false;
				}
				else {
					me._toggle_fullscreen_on.style.visibility=(Number(me._toggle_fullscreen_on.style.opacity)>0||!me._toggle_fullscreen_on.style.opacity)?'inherit':'hidden';
					me._toggle_fullscreen_on.ggVisible=true;
				}
			}
		}
		me._toggle_fullscreen_on.logicBlock_visible();
		me._toggle_fullscreen_on.onmouseenter=function (e) {
			me._toggle_fullscreen_on__img.style.visibility='hidden';
			me._toggle_fullscreen_on__imgo.style.visibility='inherit';
			me.elementMouseOver['toggle_fullscreen_on']=true;
		}
		me._toggle_fullscreen_on.onmouseleave=function (e) {
			me._toggle_fullscreen_on__img.style.visibility='inherit';
			me._toggle_fullscreen_on__imgo.style.visibility='hidden';
			me.elementMouseOver['toggle_fullscreen_on']=false;
		}
		me._toggle_fullscreen_on.ggUpdatePosition=function (useTransition) {
		}
		me._toggle_fullscreen_btn.appendChild(me._toggle_fullscreen_on);
		me._control_buttons.appendChild(me._toggle_fullscreen_btn);
		el=me._language_btn=document.createElement('div');
		els=me._language_btn__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDQwIDQwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHk9IjBweCIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQwID'+
			'QwOyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNGRkZGRkY7fQo8L3N0eWxlPgogPHBhdGggZD0iTTIyLjIsMzYuN2MtMC42LDAtMS4xLTAuMi0xLjQtMC42Yy0wLjMtMC40LTAuMy0wLjktMC4xLTEuNmw2LjEtMTYuMmMwLjItMC40LDAuNS0wLjgsMC45LTEuMSAgYzAuNS0wLjMsMC45LTAuNSwxLjQtMC41YzAuNSwwLDAuOSwwLjIsMS40LDAuNWMwLjUsMC4zLDAuOCwwLjcsMC45LDEuMWw2LjIsMTYuMWMwLjIsMC42LDAuMiwxLjItMC4xLDEuNiAgYy0wLjMsMC40LTAuOCwwLjctMS41LDAuN2MtMC4zLDAtMC42LTAuMS0wLjktMC4zcy0wLjUtMC40LTAuNi0wLjhsLTEu'+
			'NC00LjJoLThsLTEuNSw0LjJjLTAuMSwwLjMtMC4zLDAuNS0wLjYsMC43ICBDMjIuOCwzNi42LDIyLjUsMzYuNywyMi4yLDM2Ljd6IE0yNi4xLDI4LjVIMzJsLTIuOS04LjFIMjlMMjYuMSwyOC41eiBNMTIsMTQuMmMwLjQsMC44LDAuOSwxLjUsMS40LDIuMWMwLjUsMC43LDEuMSwxLjQsMS43LDIuMSAgYzEuMi0xLjMsMi4zLTIuNywzLjEtNC4xYzAuOC0xLjQsMS41LTIuOSwyLjEtNC40SDMuM2MtMC41LDAtMC45LTAuMi0xLjItMC41UzEuNyw4LjgsMS43LDguM2MwLTAuNSwwLjItMC45LDAuNS0xLjIgIHMwLjctMC41LDEuMi0wLjVoMTBWNWMwLTAuNSwwLjItMC45LDAuNS0xLjJjMC4zLTAuMy'+
			'wwLjctMC41LDEuMi0wLjVzMC45LDAuMiwxLjIsMC41YzAuMywwLjMsMC41LDAuNywwLjUsMS4ydjEuN2gxMCAgYzAuNSwwLDAuOSwwLjIsMS4yLDAuNWMwLjMsMC4zLDAuNSwwLjcsMC41LDEuMmMwLDAuNS0wLjIsMC45LTAuNSwxLjJjLTAuMywwLjMtMC43LDAuNS0xLjIsMC41aC0zLjFjLTAuNiwxLjktMS40LDMuOC0yLjQsNS43ICBjLTEsMS44LTIuMiwzLjYtMy43LDUuM2w0LDQuMWwtMS4yLDMuNEwxNSwyMy4zbC03LjIsNy4yQzcuNSwzMC44LDcuMSwzMSw2LjcsMzFjLTAuNCwwLTAuOC0wLjItMS4xLTAuNUM1LjIsMzAuMiw1LDI5LjgsNSwyOS40ICBjMC0wLjUsMC4yLTAuOCwwLjUtMS4x'+
			'bDcuMy03LjNjLTAuNy0wLjktMS40LTEuNy0yLTIuNmMtMC42LTAuOS0xLjItMS44LTEuOC0yLjdDOC43LDE1LDguNywxNC40LDksMTRjMC4zLTAuNCwwLjgtMC43LDEuNS0wLjcgIGMwLjMsMCwwLjYsMC4xLDAuOSwwLjNDMTEuNiwxMy44LDExLjksMTQsMTIsMTQuMnoiIGNsYXNzPSJzdDAiLz4KPC9zdmc+Cg==';
		me._language_btn__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._language_btn__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDQwIDQwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHk9IjBweCIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQwID'+
			'QwOyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNkZmUwMzY7fQo8L3N0eWxlPgogPHBhdGggZD0iTTIyLjIsMzYuN2MtMC42LDAtMS4xLTAuMi0xLjQtMC42Yy0wLjMtMC40LTAuMy0wLjktMC4xLTEuNmw2LjEtMTYuMmMwLjItMC40LDAuNS0wLjgsMC45LTEuMSAgYzAuNS0wLjMsMC45LTAuNSwxLjQtMC41YzAuNSwwLDAuOSwwLjIsMS40LDAuNWMwLjUsMC4zLDAuOCwwLjcsMC45LDEuMWw2LjIsMTYuMWMwLjIsMC42LDAuMiwxLjItMC4xLDEuNiAgYy0wLjMsMC40LTAuOCwwLjctMS41LDAuN2MtMC4zLDAtMC42LTAuMS0wLjktMC4zcy0wLjUtMC40LTAuNi0wLjhsLTEu'+
			'NC00LjJoLThsLTEuNSw0LjJjLTAuMSwwLjMtMC4zLDAuNS0wLjYsMC43ICBDMjIuOCwzNi42LDIyLjUsMzYuNywyMi4yLDM2Ljd6IE0yNi4xLDI4LjVIMzJsLTIuOS04LjFIMjlMMjYuMSwyOC41eiBNMTIsMTQuMmMwLjQsMC44LDAuOSwxLjUsMS40LDIuMWMwLjUsMC43LDEuMSwxLjQsMS43LDIuMSAgYzEuMi0xLjMsMi4zLTIuNywzLjEtNC4xYzAuOC0xLjQsMS41LTIuOSwyLjEtNC40SDMuM2MtMC41LDAtMC45LTAuMi0xLjItMC41UzEuNyw4LjgsMS43LDguM2MwLTAuNSwwLjItMC45LDAuNS0xLjIgIHMwLjctMC41LDEuMi0wLjVoMTBWNWMwLTAuNSwwLjItMC45LDAuNS0xLjJjMC4zLTAuMy'+
			'wwLjctMC41LDEuMi0wLjVzMC45LDAuMiwxLjIsMC41YzAuMywwLjMsMC41LDAuNywwLjUsMS4ydjEuN2gxMCAgYzAuNSwwLDAuOSwwLjIsMS4yLDAuNWMwLjMsMC4zLDAuNSwwLjcsMC41LDEuMmMwLDAuNS0wLjIsMC45LTAuNSwxLjJjLTAuMywwLjMtMC43LDAuNS0xLjIsMC41aC0zLjFjLTAuNiwxLjktMS40LDMuOC0yLjQsNS43ICBjLTEsMS44LTIuMiwzLjYtMy43LDUuM2w0LDQuMWwtMS4yLDMuNEwxNSwyMy4zbC03LjIsNy4yQzcuNSwzMC44LDcuMSwzMSw2LjcsMzFjLTAuNCwwLTAuOC0wLjItMS4xLTAuNUM1LjIsMzAuMiw1LDI5LjgsNSwyOS40ICBjMC0wLjUsMC4yLTAuOCwwLjUtMS4x'+
			'bDcuMy03LjNjLTAuNy0wLjktMS40LTEuNy0yLTIuNmMtMC42LTAuOS0xLjItMS44LTEuOC0yLjdDOC43LDE1LDguNywxNC40LDksMTRjMC4zLTAuNCwwLjgtMC43LDEuNS0wLjcgIGMwLjMsMCwwLjYsMC4xLDAuOSwwLjNDMTEuNiwxMy44LDExLjksMTQsMTIsMTQuMnoiIGNsYXNzPSJzdDAiLz4KPC9zdmc+Cg==';
		me._language_btn__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="language_btn";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg svg_shadow";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._language_btn.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._language_btn.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getProjectTranslations().length > 1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._language_btn.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._language_btn.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._language_btn.style.transition='';
				if (me._language_btn.ggCurrentLogicStateVisible == 0) {
					me._language_btn.style.visibility=(Number(me._language_btn.style.opacity)>0||!me._language_btn.style.opacity)?'inherit':'hidden';
					me._language_btn.ggVisible=true;
				}
				else {
					me._language_btn.style.visibility="hidden";
					me._language_btn.ggVisible=false;
				}
			}
		}
		me._language_btn.logicBlock_visible();
		me._language_btn.onclick=function (e) {
			player.setVariableValue('vis_languages', !player.getVariableValue('vis_languages'));
			player.setVariableValue('vis_thumbs', false);
			player.setVariableValue('vis_info', false);
			player.setVariableValue('vis_map', false);
			player.setVariableValue('vis_share', false);
			player.setVariableValue('vis_floorplan', false);
		}
		me._language_btn.onmouseenter=function (e) {
			me._language_btn__img.style.visibility='hidden';
			me._language_btn__imgo.style.visibility='inherit';
			me.elementMouseOver['language_btn']=true;
		}
		me._language_btn.onmouseleave=function (e) {
			me._language_btn__img.style.visibility='inherit';
			me._language_btn__imgo.style.visibility='hidden';
			me.elementMouseOver['language_btn']=false;
		}
		me._language_btn.ggUpdatePosition=function (useTransition) {
		}
		me._control_buttons.appendChild(me._language_btn);
		el=me._thumbs_btn=document.createElement('div');
		els=me._thumbs_btn__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjE4cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjE4cHgiPgogPHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgwVjB6Ii8+CiA8cGF0aCBkPSJNMTIgOGMtMi4yMSAwLTQgMS43OS00IDRzMS43OSA0IDQgNCA0LTEuNzkgNC00LTEuNzktNC00LTR6bTguOTQgM2MtLjQ2LTQuMTctMy43Ny03LjQ4LTcuOTQtNy45NFYyYzAtLjU1LS40NS0xLTEtMXMtMSAuNDUtMSAxdjEuMDZDNi44MyAzLjUyIDMuNTIgNi44MyAzLjA2IDExSDJjLS41NSAwLTEgLjQ1LTEgMXMuNDUgMSAxID'+
			'FoMS4wNmMuNDYgNC4xNyAzLjc3IDcuNDggNy45NCA3Ljk0VjIyYzAgLjU1LjQ1IDEgMSAxczEtLjQ1IDEtMXYtMS4wNmM0LjE3LS40NiA3LjQ4LTMuNzcgNy45NC03Ljk0SDIyYy41NSAwIDEtLjQ1IDEtMXMtLjQ1LTEtMS0xaC0xLjA2ek0xMiAxOWMtMy44NyAwLTctMy4xMy03LTdzMy4xMy03IDctNyA3IDMuMTMgNyA3LTMuMTMgNy03IDd6Ii8+Cjwvc3ZnPgo=';
		me._thumbs_btn__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._thumbs_btn__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDE4IDE4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHk9IjBweCIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE4ID'+
			'E4OyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDojZGZlMDM2O30mI3hkOwo8L3N0eWxlPgogPHBhdGggZD0iTTAsMGgxOHYxOEgwVjB6IiBjbGFzcz0ic3QwIi8+CiA8cGF0aCBkPSJNOSw2QzcuMyw2LDYsNy4zLDYsOXMxLjMsMywzLDNzMy0xLjMsMy0zUzEwLjcsNiw5LDZ6IE0xNS43LDguMmMtMC4zLTMuMS0yLjgtNS42LTYtNlYxLjUmI3hkOyYjeGE7JiN4OTtjMC0wLjQtMC4zLTAuOC0wLjgtMC44Yy0wLjQsMC0wLjgsMC4zLTAuOCwwLjh2MC44Yy0zLjEsMC4zLTUuNiwyLjgtNiw2SDEuNUMxLjEsOC4yLDAuOCw4LjYs'+
			'MC44LDlzMC4zLDAuOCwwLjgsMC44aDAuOCYjeGQ7JiN4YTsmI3g5O2MwLjMsMy4xLDIuOCw1LjYsNiw2djAuOGMwLDAuNCwwLjMsMC44LDAuOCwwLjhzMC44LTAuMywwLjgtMC44di0wLjhjMy4xLTAuMyw1LjYtMi44LDYtNmgwLjhjMC40LDAsMC44LTAuMywwLjgtMC44JiN4ZDsmI3hhOyYjeDk7cy0wLjMtMC44LTAuOC0wLjhDMTYuNSw4LjIsMTUuNyw4LjIsMTUuNyw4LjJ6IE05LDE0LjJjLTIuOSwwLTUuMi0yLjMtNS4yLTUuMlM2LjEsMy44LDksMy44czUuMiwyLjMsNS4yLDUuMlMxMS45LDE0LjIsOSwxNC4yeiIgY2xhc3M9InN0MSIvPgo8L3N2Zz4K';
		me._thumbs_btn__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="thumbs_btn";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg svg_shadow";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbs_btn.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbs_btn.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsTour() == true)) && 
				((player.getVariableValue('has_categories') == false)) || 
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbs_btn.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbs_btn.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbs_btn.style.transition='';
				if (me._thumbs_btn.ggCurrentLogicStateVisible == 0) {
					me._thumbs_btn.style.visibility=(Number(me._thumbs_btn.style.opacity)>0||!me._thumbs_btn.style.opacity)?'inherit':'hidden';
					me._thumbs_btn.ggVisible=true;
				}
				else {
					me._thumbs_btn.style.visibility="hidden";
					me._thumbs_btn.ggVisible=false;
				}
			}
		}
		me._thumbs_btn.logicBlock_visible();
		me._thumbs_btn.onclick=function (e) {
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_thumbs', !player.getVariableValue('vis_thumbs'));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_languages', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_info', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_map', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_share', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_floorplan', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_thumbs', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				me._nodes_cloner_phone.ggText="";
				me._nodes_cloner_phone.ggUpdate([]);
				skin.updateSize(skin.divSkin);
			}
		}
		me._thumbs_btn.onmouseenter=function (e) {
			me._thumbs_btn__img.style.visibility='hidden';
			me._thumbs_btn__imgo.style.visibility='inherit';
			me.elementMouseOver['thumbs_btn']=true;
		}
		me._thumbs_btn.onmouseleave=function (e) {
			me._thumbs_btn__img.style.visibility='inherit';
			me._thumbs_btn__imgo.style.visibility='hidden';
			me.elementMouseOver['thumbs_btn']=false;
		}
		me._thumbs_btn.ggUpdatePosition=function (useTransition) {
		}
		me._control_buttons.appendChild(me._thumbs_btn);
		me._safe_area_main.appendChild(me._control_buttons);
		el=me._toggle_controls=document.createElement('div');
		el.ggId="toggle_controls";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : 32px;';
		hs+='position : absolute;';
		hs+='top : 32px;';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._toggle_controls.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._toggle_controls.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_popup') == false)) && 
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._toggle_controls.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._toggle_controls.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._toggle_controls.style.transition='';
				if (me._toggle_controls.ggCurrentLogicStateVisible == 0) {
					me._toggle_controls.style.visibility=(Number(me._toggle_controls.style.opacity)>0||!me._toggle_controls.style.opacity)?'inherit':'hidden';
					me._toggle_controls.ggVisible=true;
				}
				else {
					me._toggle_controls.style.visibility="hidden";
					me._toggle_controls.ggVisible=false;
				}
			}
		}
		me._toggle_controls.logicBlock_visible();
		me._toggle_controls.onclick=function (e) {
			player.setVariableValue('vis_controls', !player.getVariableValue('vis_controls'));
			player.setVariableValue('vis_thumbs', false);
			player.setVariableValue('vis_languages', false);
			player.setVariableValue('vis_share', false);
			player.setVariableValue('vis_info', false);
			player.setVariableValue('vis_map', false);
			player.setVariableValue('vis_floorplan', false);
		}
		me._toggle_controls.ggUpdatePosition=function (useTransition) {
		}
		el=me._toggle_controls_off=document.createElement('div');
		els=me._toggle_controls_off__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjE4cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNCAyNCIgaGVpZ2h0PSIxOHB4Ij4KIDxnPgogIDxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wLDBoMjR2MjRIMFYweiIvPgogPC9nPgogPGc+CiAgPGc+CiAgIDxwYXRoIGQ9Ik00LDE4aDExYzAuNTUsMCwxLTAuNDUsMS0xbDAsMGMwLTAuNTUtMC40NS0xLTEtMUg0Yy0wLjU1LDAtMSwwLjQ1LTEsMWwwLDBDMywxNy41NSwzLjQ1LDE4LDQsMTh6IE00LDEzaDggYzAuNTUsMCwxLTAuNDUsMS0xbDAsMG'+
			'MwLTAuNTUtMC40NS0xLTEtMUg0Yy0wLjU1LDAtMSwwLjQ1LTEsMWwwLDBDMywxMi41NSwzLjQ1LDEzLDQsMTN6IE0zLDdMMyw3YzAsMC41NSwwLjQ1LDEsMSwxaDExIGMwLjU1LDAsMS0wLjQ1LDEtMWwwLDBjMC0wLjU1LTAuNDUtMS0xLTFINEMzLjQ1LDYsMyw2LjQ1LDMsN3ogTTIwLjMsMTQuODhMMTcuNDIsMTJsMi44OC0yLjg4YzAuMzktMC4zOSwwLjM5LTEuMDIsMC0xLjQxbDAsMCBjLTAuMzktMC4zOS0xLjAyLTAuMzktMS40MSwwTDE1LjMsMTEuM2MtMC4zOSwwLjM5LTAuMzksMS4wMiwwLDEuNDFsMy41OSwzLjU5YzAuMzksMC4zOSwxLjAyLDAuMzksMS40MSwwbDAsMCBDMjAuNjgsMTUu'+
			'OTEsMjAuNjksMTUuMjcsMjAuMywxNC44OHoiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._toggle_controls_off__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._toggle_controls_off__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDE4IDE4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHk9IjBweCIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE4ID'+
			'E4OyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDojZGZlMDM2O30mI3hkOwo8L3N0eWxlPgogPGc+CiAgPHBhdGggZD0iTTAsMGgxOHYxOEgwVjB6IiBjbGFzcz0ic3QwIi8+CiA8L2c+CiA8Zz4KICA8Zz4KICAgPHBhdGggZD0iTTMsMTMuNWg4LjJjMC40LDAsMC44LTAuMywwLjgtMC44bDAsMGMwLTAuNC0wLjMtMC44LTAuOC0wLjhIM2MtMC40LDAtMC44LDAuMy0wLjgsMC44bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDMi4yLDEzLjIsMi42LDEzLjUsMywxMy41eiBNMyw5LjhoNmMwLjQsMCwwLjgtMC4zLDAuOC0w'+
			'LjhsMCwwYzAtMC40LTAuMy0wLjgtMC44LTAuOEgzQzIuNiw4LjIsMi4yLDguNiwyLjIsOWwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7QzIuMiw5LjQsMi42LDkuOCwzLDkuOHogTTIuMiw1LjJMMi4yLDUuMkMyLjIsNS43LDIuNiw2LDMsNmg4LjJDMTEuNyw2LDEyLDUuNywxMiw1LjJsMCwwYzAtMC40LTAuMy0wLjgtMC44LTAuOEgzJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MyLjYsNC41LDIuMiw0LjgsMi4yLDUuMnogTTE1LjIsMTEuMkwxMy4xLDlsMi4yLTIuMmMwLjMtMC4zLDAuMy0wLjgsMC0xLjFsMCwwYy0wLjMtMC4zLTAuOC0wLjMtMS4xLDBsLTIuNywyLjcmI3hkOyYjeGE7Ji'+
			'N4OTsmI3g5OyYjeDk7Yy0wLjMsMC4zLTAuMywwLjgsMCwxLjFsMi43LDIuN2MwLjMsMC4zLDAuOCwwLjMsMS4xLDBsMCwwQzE1LjUsMTEuOSwxNS41LDExLjUsMTUuMiwxMS4yeiIgY2xhc3M9InN0MSIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._toggle_controls_off__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="toggle_controls_off";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg svg_shadow";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._toggle_controls_off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._toggle_controls_off.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_controls') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._toggle_controls_off.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._toggle_controls_off.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._toggle_controls_off.style.transition='';
				if (me._toggle_controls_off.ggCurrentLogicStateVisible == 0) {
					me._toggle_controls_off.style.visibility=(Number(me._toggle_controls_off.style.opacity)>0||!me._toggle_controls_off.style.opacity)?'inherit':'hidden';
					me._toggle_controls_off.ggVisible=true;
				}
				else {
					me._toggle_controls_off.style.visibility="hidden";
					me._toggle_controls_off.ggVisible=false;
				}
			}
		}
		me._toggle_controls_off.logicBlock_visible();
		me._toggle_controls_off.onmouseenter=function (e) {
			me._toggle_controls_off__img.style.visibility='hidden';
			me._toggle_controls_off__imgo.style.visibility='inherit';
			me.elementMouseOver['toggle_controls_off']=true;
		}
		me._toggle_controls_off.onmouseleave=function (e) {
			me._toggle_controls_off__img.style.visibility='inherit';
			me._toggle_controls_off__imgo.style.visibility='hidden';
			me.elementMouseOver['toggle_controls_off']=false;
		}
		me._toggle_controls_off.ggUpdatePosition=function (useTransition) {
		}
		me._toggle_controls.appendChild(me._toggle_controls_off);
		el=me._toggle_controls_on=document.createElement('div');
		els=me._toggle_controls_on__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjE4cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNCAyNCIgaGVpZ2h0PSIxOHB4Ij4KIDxnPgogIDxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wLDBoMjR2MjRIMFYweiIvPgogPC9nPgogPGc+CiAgPGc+CiAgIDxnPgogICAgPHBhdGggZD0iTTQsMThoMTZjMC41NSwwLDEtMC40NSwxLTFsMCwwYzAtMC41NS0wLjQ1LTEtMS0xSDRjLTAuNTUsMC0xLDAuNDUtMSwxbDAsMEMzLDE3LjU1LDMuNDUsMTgsNCwxOHogTTQsMTNoMTYgYzAuNTUsMCwxLTAuND'+
			'UsMS0xbDAsMGMwLTAuNTUtMC40NS0xLTEtMUg0Yy0wLjU1LDAtMSwwLjQ1LTEsMWwwLDBDMywxMi41NSwzLjQ1LDEzLDQsMTN6IE0zLDdMMyw3YzAsMC41NSwwLjQ1LDEsMSwxaDE2IGMwLjU1LDAsMS0wLjQ1LDEtMWwwLDBjMC0wLjU1LTAuNDUtMS0xLTFINEMzLjQ1LDYsMyw2LjQ1LDMsN3oiLz4KICAgPC9nPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._toggle_controls_on__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._toggle_controls_on__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDE4IDE4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHk9IjBweCIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE4ID'+
			'E4OyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDojZGZlMDM2O30mI3hkOwo8L3N0eWxlPgogPGc+CiAgPHBhdGggZD0iTTAsMGgxOHYxOEgwVjB6IiBjbGFzcz0ic3QwIi8+CiA8L2c+CiA8Zz4KICA8Zz4KICAgPGc+CiAgICA8cGF0aCBkPSJNMywxMy41aDEyYzAuNCwwLDAuOC0wLjMsMC44LTAuOGwwLDBjMC0wLjQtMC4zLTAuOC0wLjgtMC44SDNjLTAuNCwwLTAuOCwwLjMtMC44LDAuOGwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtDMi4yLDEzLjIsMi42LDEzLjUsMywxMy41eiBNMyw5LjhoMTJjMC40LDAs'+
			'MC44LTAuMywwLjgtMC44bDAsMGMwLTAuNC0wLjMtMC44LTAuOC0wLjhIM0MyLjYsOC4yLDIuMiw4LjYsMi4yLDlsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7QzIuMiw5LjQsMi42LDkuOCwzLDkuOHogTTIuMiw1LjJMMi4yLDUuMkMyLjIsNS43LDIuNiw2LDMsNmgxMmMwLjQsMCwwLjgtMC4zLDAuOC0wLjhsMCwwYzAtMC40LTAuMy0wLjgtMC44LTAuOEgzJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7QzIuNiw0LjUsMi4yLDQuOCwyLjIsNS4yeiIgY2xhc3M9InN0MSIvPgogICA8L2c+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._toggle_controls_on__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="toggle_controls_on";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg svg_shadow";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._toggle_controls_on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._toggle_controls_on.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_controls') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._toggle_controls_on.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._toggle_controls_on.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._toggle_controls_on.style.transition='';
				if (me._toggle_controls_on.ggCurrentLogicStateVisible == 0) {
					me._toggle_controls_on.style.visibility="hidden";
					me._toggle_controls_on.ggVisible=false;
				}
				else {
					me._toggle_controls_on.style.visibility=(Number(me._toggle_controls_on.style.opacity)>0||!me._toggle_controls_on.style.opacity)?'inherit':'hidden';
					me._toggle_controls_on.ggVisible=true;
				}
			}
		}
		me._toggle_controls_on.logicBlock_visible();
		me._toggle_controls_on.onmouseenter=function (e) {
			me._toggle_controls_on__img.style.visibility='hidden';
			me._toggle_controls_on__imgo.style.visibility='inherit';
			me.elementMouseOver['toggle_controls_on']=true;
		}
		me._toggle_controls_on.onmouseleave=function (e) {
			me._toggle_controls_on__img.style.visibility='inherit';
			me._toggle_controls_on__imgo.style.visibility='hidden';
			me.elementMouseOver['toggle_controls_on']=false;
		}
		me._toggle_controls_on.ggUpdatePosition=function (useTransition) {
		}
		me._toggle_controls.appendChild(me._toggle_controls_on);
		me._safe_area_main.appendChild(me._toggle_controls);
		el=me._languages=document.createElement('div');
		el.ggId="languages";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : calc(75% - 104px);';
		hs+='left : 72px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 104px;';
		hs+='visibility : hidden;';
		hs+='width : 240px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._languages.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._languages.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_controls') == false)) || 
				((player.getVariableValue('vis_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._languages.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._languages.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._languages.style.transition='opacity 300ms ease 0ms';
				if (me._languages.ggCurrentLogicStateVisible == 0) {
					me._languages.style.visibility="hidden";
					me._languages.ggVisible=false;
				}
				else {
					me._languages.style.visibility=(Number(me._languages.style.opacity)>0||!me._languages.style.opacity)?'inherit':'hidden';
					me._languages.ggVisible=true;
				}
			}
		}
		me._languages.logicBlock_visible();
		me._languages.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_languages') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._languages.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._languages.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._languages.style.transition='opacity 300ms ease 0ms';
				if (me._languages.ggCurrentLogicStateAlpha == 0) {
					me._languages.style.visibility=me._languages.ggVisible?'inherit':'hidden';
					me._languages.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._languages.style.opacity == 0.0) { me._languages.style.visibility="hidden"; } }, 305);
					me._languages.style.opacity=0;
				}
			}
		}
		me._languages.logicBlock_alpha();
		me._languages.ggUpdatePosition=function (useTransition) {
		}
		el=me._languages_scroller=document.createElement('div');
		els=me._languages_scroller__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 28px;';
		hs+='left : 0px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : hidden;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 213px;';
		hs+="";
		els.setAttribute('style',hs);
		me._languages_scroller.ggScrollByX = function(diffX) {
			if(!me._languages_scroller.ggHorScrollVisible || diffX == 0 || me._languages_scroller.ggHPercentVisible >= 1.0) return;
			me._languages_scroller.ggScrollPosX = (me._languages_scroller__horScrollFg.offsetLeft + diffX);
			me._languages_scroller.ggScrollPosX = Math.max(me._languages_scroller.ggScrollPosX, 0);
			me._languages_scroller.ggScrollPosX = Math.min(me._languages_scroller.ggScrollPosX, me._languages_scroller__horScrollBg.offsetWidth - me._languages_scroller__horScrollFg.offsetWidth);
			me._languages_scroller__horScrollFg.style.left = me._languages_scroller.ggScrollPosX + 'px';
			let percentScrolled = me._languages_scroller.ggScrollPosX / (me._languages_scroller__horScrollBg.offsetWidth - me._languages_scroller__horScrollFg.offsetWidth);
			me._languages_scroller__content.style.left = -(Math.round((me._languages_scroller.ggContentWidth * (1.0 - me._languages_scroller.ggHPercentVisible)) * percentScrolled)) + me._languages_scroller.ggContentLeftOffset + 'px';
			me._languages_scroller.ggScrollPosXPercent = (me._languages_scroller__horScrollFg.offsetLeft / me._languages_scroller__horScrollBg.offsetWidth);
		}
		me._languages_scroller.ggScrollByXSmooth = function(diffX) {
			if(!me._languages_scroller.ggHorScrollVisible || diffX == 0 || me._languages_scroller.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._languages_scroller.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._languages_scroller.ggScrollPosX >= me._languages_scroller__horScrollBg.offsetWidth - me._languages_scroller__horScrollFg.offsetWidth)) {
					me._languages_scroller.ggScrollPosX = Math.min(me._languages_scroller.ggScrollPosX, me._languages_scroller__horScrollBg.offsetWidth - me._languages_scroller__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._languages_scroller.ggScrollPosX <= 0)) {
					me._languages_scroller.ggScrollPosX = Math.max(me._languages_scroller.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._languages_scroller__horScrollFg.style.left = me._languages_scroller.ggScrollPosX + 'px';
			let percentScrolled = me._languages_scroller.ggScrollPosX / (me._languages_scroller__horScrollBg.offsetWidth - me._languages_scroller__horScrollFg.offsetWidth);
			me._languages_scroller__content.style.left = -(Math.round((me._languages_scroller.ggContentWidth * (1.0 - me._languages_scroller.ggHPercentVisible)) * percentScrolled)) + me._languages_scroller.ggContentLeftOffset + 'px';
			me._languages_scroller.ggScrollPosXPercent = (me._languages_scroller__horScrollFg.offsetLeft / me._languages_scroller__horScrollBg.offsetWidth);
			}, 10);
		}
		me._languages_scroller.ggScrollByY = function(diffY) {
			if(!me._languages_scroller.ggVertScrollVisible || diffY == 0 || me._languages_scroller.ggVPercentVisible >= 1.0) return;
			me._languages_scroller.ggScrollPosY = (me._languages_scroller__vertScrollFg.offsetTop + diffY);
			me._languages_scroller.ggScrollPosY = Math.max(me._languages_scroller.ggScrollPosY, 0);
			me._languages_scroller.ggScrollPosY = Math.min(me._languages_scroller.ggScrollPosY, me._languages_scroller__vertScrollBg.offsetHeight - me._languages_scroller__vertScrollFg.offsetHeight);
			me._languages_scroller__vertScrollFg.style.top = me._languages_scroller.ggScrollPosY + 'px';
			let percentScrolled = me._languages_scroller.ggScrollPosY / (me._languages_scroller__vertScrollBg.offsetHeight - me._languages_scroller__vertScrollFg.offsetHeight);
			me._languages_scroller__content.style.top = -(Math.round((me._languages_scroller.ggContentHeight * (1.0 - me._languages_scroller.ggVPercentVisible)) * percentScrolled)) + me._languages_scroller.ggContentTopOffset + 'px';
			me._languages_scroller.ggScrollPosYPercent = (me._languages_scroller__vertScrollFg.offsetTop / me._languages_scroller__vertScrollBg.offsetHeight);
		}
		me._languages_scroller.ggScrollByYSmooth = function(diffY) {
			if(!me._languages_scroller.ggVertScrollVisible || diffY == 0 || me._languages_scroller.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._languages_scroller.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._languages_scroller.ggScrollPosY >= me._languages_scroller__vertScrollBg.offsetHeight - me._languages_scroller__vertScrollFg.offsetHeight)) {
					me._languages_scroller.ggScrollPosY = Math.min(me._languages_scroller.ggScrollPosY, me._languages_scroller__vertScrollBg.offsetHeight - me._languages_scroller__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._languages_scroller.ggScrollPosY <= 0)) {
					me._languages_scroller.ggScrollPosY = Math.max(me._languages_scroller.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._languages_scroller__vertScrollFg.style.top = me._languages_scroller.ggScrollPosY + 'px';
			let percentScrolled = me._languages_scroller.ggScrollPosY / (me._languages_scroller__vertScrollBg.offsetHeight - me._languages_scroller__vertScrollFg.offsetHeight);
			me._languages_scroller__content.style.top = -(Math.round((me._languages_scroller.ggContentHeight * (1.0 - me._languages_scroller.ggVPercentVisible)) * percentScrolled)) + me._languages_scroller.ggContentTopOffset + 'px';
			me._languages_scroller.ggScrollPosYPercent = (me._languages_scroller__vertScrollFg.offsetTop / me._languages_scroller__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._languages_scroller.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._languages_scroller.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._languages_scroller.ggHPercentVisible);
					me._languages_scroller.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._languages_scroller.clientWidth - (me._languages_scroller.ggVertScrollVisible ? 7 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._languages_scroller.clientWidth - (me._languages_scroller.ggVertScrollVisible ? 7 : 0))) * me._languages_scroller.ggHPercentVisible);
					me._languages_scroller.ggScrollByXSmooth(diffX);
				}
			}
			if (me._languages_scroller.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._languages_scroller.ggVPercentVisible);
					me._languages_scroller.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._languages_scroller.clientHeight - (me._languages_scroller.ggHorScrollVisible ? 7 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._languages_scroller.clientHeight - (me._languages_scroller.ggHorScrollVisible ? 7 : 0))) * me._languages_scroller.ggVPercentVisible);
					me._languages_scroller.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._languages_scroller__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._languages_scroller.ggDragInertiaX *= 0.96;
				me._languages_scroller.ggDragInertiaY *= 0.96;
				me._languages_scroller.ggScrollByX(me._languages_scroller.ggDragInertiaX);
				me._languages_scroller.ggScrollByY(me._languages_scroller.ggDragInertiaY);
				if (Math.abs(me._languages_scroller.ggDragInertiaX) < 1.0 && Math.abs(me._languages_scroller.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 10);
			me._languages_scroller__content.onmouseup = null;
			me._languages_scroller__content.onmousemove = null;
			me._languages_scroller__content.ontouchend = null;
			me._languages_scroller__content.ontouchmove = null;
			me._languages_scroller__content.onpointerup = null;
			me._languages_scroller__content.onpointermove = null;
			setTimeout(function() { me._languages_scroller.ggIsDragging = false; }, 100);
		}
		me._languages_scroller__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._languages_scroller.ggDragStartX) > 10 || Math.abs(eventY - me._languages_scroller.ggDragStartY) > 10) me._languages_scroller.ggIsDragging = true;
			var diffX = (eventX - me._languages_scroller.ggDragLastX) * me._languages_scroller.ggHPercentVisible;
			var diffY = (eventY - me._languages_scroller.ggDragLastY) * me._languages_scroller.ggVPercentVisible;
			me._languages_scroller.ggDragInertiaX = -diffX;
			me._languages_scroller.ggDragInertiaY = -diffY;
			me._languages_scroller.ggDragLastX = eventX;
			me._languages_scroller.ggDragLastY = eventY;
			me._languages_scroller.ggScrollByX(-diffX);
			me._languages_scroller.ggScrollByY(-diffY);
		}
		me._languages_scroller__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._languages_scroller.ggDragLastX = me._languages_scroller.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._languages_scroller.ggDragLastY = me._languages_scroller.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._languages_scroller__content.onmouseup = me._languages_scroller__content.mousetouchend;
			me._languages_scroller__content.ontouchend = me._languages_scroller__content.mousetouchend;
			me._languages_scroller__content.onmousemove = me._languages_scroller__content.mousetouchmove;
			me._languages_scroller__content.ontouchmove = me._languages_scroller__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._languages_scroller__content.onpointerup = me._languages_scroller__content.ontouchend;
				me._languages_scroller__content.onpointermove = me._languages_scroller__content.ontouchmove;
			}
		}
		els.onmousedown = me._languages_scroller__content.mousetouchstart;
		els.ontouchstart = me._languages_scroller__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._languages_scroller__content.mousetouchstart;
		}
		elVertScrollBg = me._languages_scroller__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 7px; height: 230.303px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._languages_scroller__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 7px; height: 230.303px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._languages_scroller.ggScrollPosY = 0;
		me._languages_scroller.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._languages_scroller.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._languages_scroller.ggDragInertiaY *= 0.96;
					me._languages_scroller.ggScrollByY(me._languages_scroller.ggDragInertiaY);
					if (Math.abs(me._languages_scroller.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._languages_scroller.ggDragLastY;
				me._languages_scroller.ggDragInertiaY = diffY;
				me._languages_scroller.ggDragLastY = e.clientY;
				me._languages_scroller.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._languages_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._languages_scroller.ggDragInertiaY *= 0.96;
					me._languages_scroller.ggScrollByY(me._languages_scroller.ggDragInertiaY);
					if (Math.abs(me._languages_scroller.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me._languages_scroller.ggDragLastY;
				me._languages_scroller.ggDragInertiaY = diffY;
				me._languages_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._languages_scroller.ggScrollByY(diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._languages_scroller.ggScrollHeight;
			if (e.offsetY < me._languages_scroller.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._languages_scroller.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._languages_scroller__vertScrollBg.getBoundingClientRect();
			var diffY = me._languages_scroller.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._languages_scroller.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._languages_scroller.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._languages_scroller.ggScrollByYSmooth(30 * me._languages_scroller.ggVPercentVisible * wheelDelta);
		});
		elCornerBg = me._languages_scroller__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 7px; height: 7px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="languages_scroller";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : calc(100% - 22px);';
		hs+='left : 22px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 22px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 28px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._languages_scroller.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._languages_scroller.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = me._languages_scroller.clientWidth * 1;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = -(Math.round(me._languages_scroller.ggScrollPosY / me._languages_scroller.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if ((me._languages_scroller.ggHorScrollVisible && contentHeight > this.clientHeight - 7) || (!me._languages_scroller.ggHorScrollVisible && contentHeight > this.clientHeight)) {
					me._languages_scroller__vertScrollBg.style.visibility = 'inherit';
					me._languages_scroller__vertScrollFg.style.visibility = 'inherit';
					me._languages_scroller.ggVertScrollVisible = true;
				} else {
					me._languages_scroller__vertScrollBg.style.visibility = 'hidden';
					me._languages_scroller__vertScrollFg.style.visibility = 'hidden';
					me._languages_scroller.ggVertScrollVisible = false;
				}
				if(me._languages_scroller.ggVertScrollVisible) {
					me._languages_scroller.ggAvailableWidth = me._languages_scroller.clientWidth - 7;
					if (me._languages_scroller.ggHorScrollVisible) {
						me._languages_scroller.ggAvailableHeight = me._languages_scroller.clientHeight - 7;
						me._languages_scroller.ggAvailableHeightWithScale = me._languages_scroller.getBoundingClientRect().height - me._languages_scroller__vertScrollBg.getBoundingClientRect().width;
						me._languages_scroller__cornerBg.style.visibility = 'inherit';
					} else {
						me._languages_scroller.ggAvailableHeight = me._languages_scroller.clientHeight;
						me._languages_scroller.ggAvailableHeightWithScale = me._languages_scroller.getBoundingClientRect().height;
						me._languages_scroller__cornerBg.style.visibility = 'hidden';
					}
					me._languages_scroller__vertScrollBg.style.height = me._languages_scroller.ggAvailableHeight + 'px';
					me._languages_scroller.ggVPercentVisible = contentHeight != 0 ? me._languages_scroller.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._languages_scroller.ggVPercentVisible > 1.0) me._languages_scroller.ggVPercentVisible = 1.0;
					me._languages_scroller.ggScrollHeight =  Math.round(me._languages_scroller__vertScrollBg.offsetHeight * me._languages_scroller.ggVPercentVisible);
					me._languages_scroller__vertScrollFg.style.height = me._languages_scroller.ggScrollHeight + 'px';
					me._languages_scroller.ggScrollPosY = me._languages_scroller.ggScrollPosYPercent * me._languages_scroller.ggAvailableHeight;
					me._languages_scroller.ggScrollPosY = Math.min(me._languages_scroller.ggScrollPosY, me._languages_scroller__vertScrollBg.offsetHeight - me._languages_scroller__vertScrollFg.offsetHeight);
					me._languages_scroller__vertScrollFg.style.top = me._languages_scroller.ggScrollPosY + 'px';
					if (me._languages_scroller.ggVPercentVisible < 1.0) {
						let percentScrolled = me._languages_scroller.ggScrollPosY / (me._languages_scroller__vertScrollBg.offsetHeight - me._languages_scroller__vertScrollFg.offsetHeight);
						me._languages_scroller__content.style.top = -(Math.round((me._languages_scroller.ggContentHeight * (1.0 - me._languages_scroller.ggVPercentVisible)) * percentScrolled)) + me._languages_scroller.ggContentTopOffset + 'px';
					}
				} else {
					me._languages_scroller.ggAvailableWidth = me._languages_scroller.clientWidth;
					me._languages_scroller.ggScrollPosY = 0;
					me._languages_scroller.ggScrollPosYPercent = 0.0;
					me._languages_scroller__content.style.top = this.ggContentTopOffset + 'px';
					me._languages_scroller__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._languages_scroller.ggHorScrollVisible || vertScrollWasVisible != me._languages_scroller.ggVertScrollVisible) {
					skin.updateSize(me._languages_scroller);
					me._languages_scroller.ggUpdatePosition();
				}
			}
		}
		el=me._languages_cloner=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._languages_cloner;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 213;
		el.ggHeight = 28;
		el.ggSizeChanged = false;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.ggUpdate = function(filter) {
			if(me._languages_cloner.ggUpdating == true) return;
			me._languages_cloner.ggUpdating = true;
			var el=me._languages_cloner;
			var curNumCols = 0;
			curNumCols = me._languages_cloner.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if ((el.ggNumCols == curNumCols) && !el.ggSizeChanged && false) {
				me._languages_cloner.ggUpdating = false;
				return;
			} else {
				el.ggSizeChanged = false;
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._languages_cloner.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			me._languages_cloner.ggNumFilterPassed = el.ggTranslations.length;
			for (var i = 0; i < el.ggTranslations.length; i++) {
				var cItem = el.ggTranslations[i];
				var nodeId = {};
				nodeId['tag'] = cItem.langCode;
				nodeId['title'] = cItem.langName;
				if (!keepCloning || i < me._languages_cloner.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._languages_cloner.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._languages_cloner.ggWidth) + 'px';
				parameter.width='100%';
				parameter.height=me._languages_cloner.ggHeight + 'px';
				parameter.index=currentIndex;
				var inst = new SkinCloner_languages_cloner_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me._languages_cloner.ggNodeCount = me._languages_cloner.ggNumFilterPassed;
			me._languages_cloner.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._languages_cloner.parentNode && me._languages_cloner.parentNode.classList.contains('ggskin_subelement') && me._languages_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._languages_cloner.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggTranslations = [];
		el.ggId="languages_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 28px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._languages_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._languages_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._languages_cloner.childNodes.length; i++) {
				var child=me._languages_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._languages_cloner.ggUpdatePosition=function (useTransition) {
			var pw = this.parentNode.clientWidth;
			var newWidth = (pw*100)/100.0;
			if (newWidth != this.ggWidth) {
				this.ggWidth = newWidth;
				this.ggSizeChanged = true;
			}
			me._languages_cloner.ggUpdate();
		}
		me._languages_scroller__content.appendChild(me._languages_cloner);
		me._languages.appendChild(me._languages_scroller);
		el=me._languages_top=document.createElement('div');
		el.ggId="languages_top";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.745098);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 22px;';
		hs+='left : 22px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 28px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._languages_top.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._languages_top.onclick=function (e) {
			player.setVariableValue('vis_info', false);
		}
		me._languages_top.ggUpdatePosition=function (useTransition) {
		}
		me._languages.appendChild(me._languages_top);
		el=me._languages_triangle=document.createElement('div');
		el.ggId="languages_triangle";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 36px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		hs+='width: 0 !important; height: 0 !important; border-top: 22px solid rgba(255, 255, 255, 0.74); border-left: 22px solid transparent; border-bottom: 0; border-right: 0; backdrop-filter: blur(2px); -webkit-backdrop-filter: blur(2px);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._languages_triangle.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._languages_triangle.ggUpdatePosition=function (useTransition) {
		}
		me._languages.appendChild(me._languages_triangle);
		me._safe_area_main.appendChild(me._languages);
		el=me._thumbs=document.createElement('div');
		el.ggId="thumbs";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : calc(75% - 104px);';
		hs+='left : 72px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 104px;';
		hs+='visibility : hidden;';
		hs+='width : 240px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbs.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbs.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_controls') == false)) || 
				((player.getVariableValue('vis_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbs.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbs.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbs.style.transition='opacity 300ms ease 0ms';
				if (me._thumbs.ggCurrentLogicStateVisible == 0) {
					me._thumbs.style.visibility="hidden";
					me._thumbs.ggVisible=false;
				}
				else {
					me._thumbs.style.visibility=(Number(me._thumbs.style.opacity)>0||!me._thumbs.style.opacity)?'inherit':'hidden';
					me._thumbs.ggVisible=true;
				}
			}
		}
		me._thumbs.logicBlock_visible();
		me._thumbs.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_thumbs') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumbs.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumbs.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumbs.style.transition='opacity 300ms ease 0ms';
				if (me._thumbs.ggCurrentLogicStateAlpha == 0) {
					me._thumbs.style.visibility=me._thumbs.ggVisible?'inherit':'hidden';
					me._thumbs.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._thumbs.style.opacity == 0.0) { me._thumbs.style.visibility="hidden"; } }, 305);
					me._thumbs.style.opacity=0;
				}
			}
		}
		me._thumbs.logicBlock_alpha();
		me._thumbs.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumbs_scroller=document.createElement('div');
		els=me._thumbs_scroller__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 28px;';
		hs+='left : 0px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : hidden;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 213px;';
		hs+="";
		els.setAttribute('style',hs);
		me._thumbs_scroller.ggScrollByX = function(diffX) {
			if(!me._thumbs_scroller.ggHorScrollVisible || diffX == 0 || me._thumbs_scroller.ggHPercentVisible >= 1.0) return;
			me._thumbs_scroller.ggScrollPosX = (me._thumbs_scroller__horScrollFg.offsetLeft + diffX);
			me._thumbs_scroller.ggScrollPosX = Math.max(me._thumbs_scroller.ggScrollPosX, 0);
			me._thumbs_scroller.ggScrollPosX = Math.min(me._thumbs_scroller.ggScrollPosX, me._thumbs_scroller__horScrollBg.offsetWidth - me._thumbs_scroller__horScrollFg.offsetWidth);
			me._thumbs_scroller__horScrollFg.style.left = me._thumbs_scroller.ggScrollPosX + 'px';
			let percentScrolled = me._thumbs_scroller.ggScrollPosX / (me._thumbs_scroller__horScrollBg.offsetWidth - me._thumbs_scroller__horScrollFg.offsetWidth);
			me._thumbs_scroller__content.style.left = -(Math.round((me._thumbs_scroller.ggContentWidth * (1.0 - me._thumbs_scroller.ggHPercentVisible)) * percentScrolled)) + me._thumbs_scroller.ggContentLeftOffset + 'px';
			me._thumbs_scroller.ggScrollPosXPercent = (me._thumbs_scroller__horScrollFg.offsetLeft / me._thumbs_scroller__horScrollBg.offsetWidth);
		}
		me._thumbs_scroller.ggScrollByXSmooth = function(diffX) {
			if(!me._thumbs_scroller.ggHorScrollVisible || diffX == 0 || me._thumbs_scroller.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._thumbs_scroller.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._thumbs_scroller.ggScrollPosX >= me._thumbs_scroller__horScrollBg.offsetWidth - me._thumbs_scroller__horScrollFg.offsetWidth)) {
					me._thumbs_scroller.ggScrollPosX = Math.min(me._thumbs_scroller.ggScrollPosX, me._thumbs_scroller__horScrollBg.offsetWidth - me._thumbs_scroller__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._thumbs_scroller.ggScrollPosX <= 0)) {
					me._thumbs_scroller.ggScrollPosX = Math.max(me._thumbs_scroller.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._thumbs_scroller__horScrollFg.style.left = me._thumbs_scroller.ggScrollPosX + 'px';
			let percentScrolled = me._thumbs_scroller.ggScrollPosX / (me._thumbs_scroller__horScrollBg.offsetWidth - me._thumbs_scroller__horScrollFg.offsetWidth);
			me._thumbs_scroller__content.style.left = -(Math.round((me._thumbs_scroller.ggContentWidth * (1.0 - me._thumbs_scroller.ggHPercentVisible)) * percentScrolled)) + me._thumbs_scroller.ggContentLeftOffset + 'px';
			me._thumbs_scroller.ggScrollPosXPercent = (me._thumbs_scroller__horScrollFg.offsetLeft / me._thumbs_scroller__horScrollBg.offsetWidth);
			}, 10);
		}
		me._thumbs_scroller.ggScrollByY = function(diffY) {
			if(!me._thumbs_scroller.ggVertScrollVisible || diffY == 0 || me._thumbs_scroller.ggVPercentVisible >= 1.0) return;
			me._thumbs_scroller.ggScrollPosY = (me._thumbs_scroller__vertScrollFg.offsetTop + diffY);
			me._thumbs_scroller.ggScrollPosY = Math.max(me._thumbs_scroller.ggScrollPosY, 0);
			me._thumbs_scroller.ggScrollPosY = Math.min(me._thumbs_scroller.ggScrollPosY, me._thumbs_scroller__vertScrollBg.offsetHeight - me._thumbs_scroller__vertScrollFg.offsetHeight);
			me._thumbs_scroller__vertScrollFg.style.top = me._thumbs_scroller.ggScrollPosY + 'px';
			let percentScrolled = me._thumbs_scroller.ggScrollPosY / (me._thumbs_scroller__vertScrollBg.offsetHeight - me._thumbs_scroller__vertScrollFg.offsetHeight);
			me._thumbs_scroller__content.style.top = -(Math.round((me._thumbs_scroller.ggContentHeight * (1.0 - me._thumbs_scroller.ggVPercentVisible)) * percentScrolled)) + me._thumbs_scroller.ggContentTopOffset + 'px';
			me._thumbs_scroller.ggScrollPosYPercent = (me._thumbs_scroller__vertScrollFg.offsetTop / me._thumbs_scroller__vertScrollBg.offsetHeight);
		}
		me._thumbs_scroller.ggScrollByYSmooth = function(diffY) {
			if(!me._thumbs_scroller.ggVertScrollVisible || diffY == 0 || me._thumbs_scroller.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._thumbs_scroller.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._thumbs_scroller.ggScrollPosY >= me._thumbs_scroller__vertScrollBg.offsetHeight - me._thumbs_scroller__vertScrollFg.offsetHeight)) {
					me._thumbs_scroller.ggScrollPosY = Math.min(me._thumbs_scroller.ggScrollPosY, me._thumbs_scroller__vertScrollBg.offsetHeight - me._thumbs_scroller__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._thumbs_scroller.ggScrollPosY <= 0)) {
					me._thumbs_scroller.ggScrollPosY = Math.max(me._thumbs_scroller.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._thumbs_scroller__vertScrollFg.style.top = me._thumbs_scroller.ggScrollPosY + 'px';
			let percentScrolled = me._thumbs_scroller.ggScrollPosY / (me._thumbs_scroller__vertScrollBg.offsetHeight - me._thumbs_scroller__vertScrollFg.offsetHeight);
			me._thumbs_scroller__content.style.top = -(Math.round((me._thumbs_scroller.ggContentHeight * (1.0 - me._thumbs_scroller.ggVPercentVisible)) * percentScrolled)) + me._thumbs_scroller.ggContentTopOffset + 'px';
			me._thumbs_scroller.ggScrollPosYPercent = (me._thumbs_scroller__vertScrollFg.offsetTop / me._thumbs_scroller__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._thumbs_scroller.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._thumbs_scroller.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._thumbs_scroller.ggHPercentVisible);
					me._thumbs_scroller.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._thumbs_scroller.clientWidth - (me._thumbs_scroller.ggVertScrollVisible ? 7 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._thumbs_scroller.clientWidth - (me._thumbs_scroller.ggVertScrollVisible ? 7 : 0))) * me._thumbs_scroller.ggHPercentVisible);
					me._thumbs_scroller.ggScrollByXSmooth(diffX);
				}
			}
			if (me._thumbs_scroller.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._thumbs_scroller.ggVPercentVisible);
					me._thumbs_scroller.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._thumbs_scroller.clientHeight - (me._thumbs_scroller.ggHorScrollVisible ? 7 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._thumbs_scroller.clientHeight - (me._thumbs_scroller.ggHorScrollVisible ? 7 : 0))) * me._thumbs_scroller.ggVPercentVisible);
					me._thumbs_scroller.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._thumbs_scroller__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._thumbs_scroller.ggDragInertiaX *= 0.96;
				me._thumbs_scroller.ggDragInertiaY *= 0.96;
				me._thumbs_scroller.ggScrollByX(me._thumbs_scroller.ggDragInertiaX);
				me._thumbs_scroller.ggScrollByY(me._thumbs_scroller.ggDragInertiaY);
				if (Math.abs(me._thumbs_scroller.ggDragInertiaX) < 1.0 && Math.abs(me._thumbs_scroller.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 10);
			me._thumbs_scroller__content.onmouseup = null;
			me._thumbs_scroller__content.onmousemove = null;
			me._thumbs_scroller__content.ontouchend = null;
			me._thumbs_scroller__content.ontouchmove = null;
			me._thumbs_scroller__content.onpointerup = null;
			me._thumbs_scroller__content.onpointermove = null;
			setTimeout(function() { me._thumbs_scroller.ggIsDragging = false; }, 100);
		}
		me._thumbs_scroller__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._thumbs_scroller.ggDragStartX) > 10 || Math.abs(eventY - me._thumbs_scroller.ggDragStartY) > 10) me._thumbs_scroller.ggIsDragging = true;
			var diffX = (eventX - me._thumbs_scroller.ggDragLastX) * me._thumbs_scroller.ggHPercentVisible;
			var diffY = (eventY - me._thumbs_scroller.ggDragLastY) * me._thumbs_scroller.ggVPercentVisible;
			me._thumbs_scroller.ggDragInertiaX = -diffX;
			me._thumbs_scroller.ggDragInertiaY = -diffY;
			me._thumbs_scroller.ggDragLastX = eventX;
			me._thumbs_scroller.ggDragLastY = eventY;
			me._thumbs_scroller.ggScrollByX(-diffX);
			me._thumbs_scroller.ggScrollByY(-diffY);
		}
		me._thumbs_scroller__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._thumbs_scroller.ggDragLastX = me._thumbs_scroller.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._thumbs_scroller.ggDragLastY = me._thumbs_scroller.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._thumbs_scroller__content.onmouseup = me._thumbs_scroller__content.mousetouchend;
			me._thumbs_scroller__content.ontouchend = me._thumbs_scroller__content.mousetouchend;
			me._thumbs_scroller__content.onmousemove = me._thumbs_scroller__content.mousetouchmove;
			me._thumbs_scroller__content.ontouchmove = me._thumbs_scroller__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._thumbs_scroller__content.onpointerup = me._thumbs_scroller__content.ontouchend;
				me._thumbs_scroller__content.onpointermove = me._thumbs_scroller__content.ontouchmove;
			}
		}
		els.onmousedown = me._thumbs_scroller__content.mousetouchstart;
		els.ontouchstart = me._thumbs_scroller__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._thumbs_scroller__content.mousetouchstart;
		}
		elVertScrollBg = me._thumbs_scroller__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 7px; height: 230.303px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._thumbs_scroller__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 7px; height: 230.303px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._thumbs_scroller.ggScrollPosY = 0;
		me._thumbs_scroller.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._thumbs_scroller.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbs_scroller.ggDragInertiaY *= 0.96;
					me._thumbs_scroller.ggScrollByY(me._thumbs_scroller.ggDragInertiaY);
					if (Math.abs(me._thumbs_scroller.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._thumbs_scroller.ggDragLastY;
				me._thumbs_scroller.ggDragInertiaY = diffY;
				me._thumbs_scroller.ggDragLastY = e.clientY;
				me._thumbs_scroller.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._thumbs_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbs_scroller.ggDragInertiaY *= 0.96;
					me._thumbs_scroller.ggScrollByY(me._thumbs_scroller.ggDragInertiaY);
					if (Math.abs(me._thumbs_scroller.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me._thumbs_scroller.ggDragLastY;
				me._thumbs_scroller.ggDragInertiaY = diffY;
				me._thumbs_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._thumbs_scroller.ggScrollByY(diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._thumbs_scroller.ggScrollHeight;
			if (e.offsetY < me._thumbs_scroller.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._thumbs_scroller.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._thumbs_scroller__vertScrollBg.getBoundingClientRect();
			var diffY = me._thumbs_scroller.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._thumbs_scroller.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._thumbs_scroller.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._thumbs_scroller.ggScrollByYSmooth(30 * me._thumbs_scroller.ggVPercentVisible * wheelDelta);
		});
		elCornerBg = me._thumbs_scroller__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 7px; height: 7px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="thumbs_scroller";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : calc(100% - 22px);';
		hs+='left : 22px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 22px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 28px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbs_scroller.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbs_scroller.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = me._thumbs_scroller.clientWidth * 1;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = -(Math.round(me._thumbs_scroller.ggScrollPosY / me._thumbs_scroller.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if ((me._thumbs_scroller.ggHorScrollVisible && contentHeight > this.clientHeight - 7) || (!me._thumbs_scroller.ggHorScrollVisible && contentHeight > this.clientHeight)) {
					me._thumbs_scroller__vertScrollBg.style.visibility = 'inherit';
					me._thumbs_scroller__vertScrollFg.style.visibility = 'inherit';
					me._thumbs_scroller.ggVertScrollVisible = true;
				} else {
					me._thumbs_scroller__vertScrollBg.style.visibility = 'hidden';
					me._thumbs_scroller__vertScrollFg.style.visibility = 'hidden';
					me._thumbs_scroller.ggVertScrollVisible = false;
				}
				if(me._thumbs_scroller.ggVertScrollVisible) {
					me._thumbs_scroller.ggAvailableWidth = me._thumbs_scroller.clientWidth - 7;
					if (me._thumbs_scroller.ggHorScrollVisible) {
						me._thumbs_scroller.ggAvailableHeight = me._thumbs_scroller.clientHeight - 7;
						me._thumbs_scroller.ggAvailableHeightWithScale = me._thumbs_scroller.getBoundingClientRect().height - me._thumbs_scroller__vertScrollBg.getBoundingClientRect().width;
						me._thumbs_scroller__cornerBg.style.visibility = 'inherit';
					} else {
						me._thumbs_scroller.ggAvailableHeight = me._thumbs_scroller.clientHeight;
						me._thumbs_scroller.ggAvailableHeightWithScale = me._thumbs_scroller.getBoundingClientRect().height;
						me._thumbs_scroller__cornerBg.style.visibility = 'hidden';
					}
					me._thumbs_scroller__vertScrollBg.style.height = me._thumbs_scroller.ggAvailableHeight + 'px';
					me._thumbs_scroller.ggVPercentVisible = contentHeight != 0 ? me._thumbs_scroller.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._thumbs_scroller.ggVPercentVisible > 1.0) me._thumbs_scroller.ggVPercentVisible = 1.0;
					me._thumbs_scroller.ggScrollHeight =  Math.round(me._thumbs_scroller__vertScrollBg.offsetHeight * me._thumbs_scroller.ggVPercentVisible);
					me._thumbs_scroller__vertScrollFg.style.height = me._thumbs_scroller.ggScrollHeight + 'px';
					me._thumbs_scroller.ggScrollPosY = me._thumbs_scroller.ggScrollPosYPercent * me._thumbs_scroller.ggAvailableHeight;
					me._thumbs_scroller.ggScrollPosY = Math.min(me._thumbs_scroller.ggScrollPosY, me._thumbs_scroller__vertScrollBg.offsetHeight - me._thumbs_scroller__vertScrollFg.offsetHeight);
					me._thumbs_scroller__vertScrollFg.style.top = me._thumbs_scroller.ggScrollPosY + 'px';
					if (me._thumbs_scroller.ggVPercentVisible < 1.0) {
						let percentScrolled = me._thumbs_scroller.ggScrollPosY / (me._thumbs_scroller__vertScrollBg.offsetHeight - me._thumbs_scroller__vertScrollFg.offsetHeight);
						me._thumbs_scroller__content.style.top = -(Math.round((me._thumbs_scroller.ggContentHeight * (1.0 - me._thumbs_scroller.ggVPercentVisible)) * percentScrolled)) + me._thumbs_scroller.ggContentTopOffset + 'px';
					}
				} else {
					me._thumbs_scroller.ggAvailableWidth = me._thumbs_scroller.clientWidth;
					me._thumbs_scroller.ggScrollPosY = 0;
					me._thumbs_scroller.ggScrollPosYPercent = 0.0;
					me._thumbs_scroller__content.style.top = this.ggContentTopOffset + 'px';
					me._thumbs_scroller__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._thumbs_scroller.ggHorScrollVisible || vertScrollWasVisible != me._thumbs_scroller.ggVertScrollVisible) {
					skin.updateSize(me._thumbs_scroller);
					me._thumbs_scroller.ggUpdatePosition();
				}
			}
		}
		el=me._thumbs_cloner=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbs_cloner;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 213;
		el.ggHeight = 28;
		el.ggSizeChanged = false;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me._thumbs_cloner.ggUpdating == true) return;
			me._thumbs_cloner.ggUpdating = true;
			var el=me._thumbs_cloner;
			var curNumCols = 0;
			curNumCols = me._thumbs_cloner.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && !el.ggSizeChanged && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._thumbs_cloner.ggUpdating = false;
				return;
			} else {
				el.ggSizeChanged = false;
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._thumbs_cloner.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			if (tourNodes.length == 0) {
				me._thumbs_cloner.ggUpdating = false;
				return;
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me._thumbs_cloner.getFilteredNodes(tourNodes, filter);
			me._thumbs_cloner.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me._thumbs_cloner.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._thumbs_cloner.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._thumbs_cloner.ggWidth) + 'px';
				parameter.width='100%';
				parameter.height=me._thumbs_cloner.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_thumbs_cloner_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me._thumbs_cloner.ggNodeCount = me._thumbs_cloner.ggNumFilterPassed;
			me._thumbs_cloner.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._thumbs_cloner.parentNode && me._thumbs_cloner.parentNode.classList.contains('ggskin_subelement') && me._thumbs_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._thumbs_cloner.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggId="thumbs_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 28px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbs_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbs_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._thumbs_cloner.childNodes.length; i++) {
				var child=me._thumbs_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._thumbs_cloner.ggUpdatePosition=function (useTransition) {
			var pw = this.parentNode.clientWidth;
			var newWidth = (pw*100)/100.0;
			if (newWidth != this.ggWidth) {
				this.ggWidth = newWidth;
				this.ggSizeChanged = true;
			}
			me._thumbs_cloner.ggUpdate();
		}
		me._thumbs_scroller__content.appendChild(me._thumbs_cloner);
		me._thumbs.appendChild(me._thumbs_scroller);
		el=me._thumbs_top=document.createElement('div');
		el.ggId="thumbs_top";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.745098);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 22px;';
		hs+='left : 22px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 28px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbs_top.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbs_top.onclick=function (e) {
			player.setVariableValue('vis_info', false);
		}
		me._thumbs_top.ggUpdatePosition=function (useTransition) {
		}
		me._thumbs.appendChild(me._thumbs_top);
		el=me._thumbs_triangle=document.createElement('div');
		el.ggId="thumbs_triangle";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 36px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		hs+='width: 0 !important; height: 0 !important; border-top: 22px solid rgba(255, 255, 255, 0.74); border-left: 22px solid transparent; border-bottom: 0; border-right: 0; backdrop-filter: blur(2px); -webkit-backdrop-filter: blur(2px);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbs_triangle.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbs_triangle.ggUpdatePosition=function (useTransition) {
		}
		me._thumbs.appendChild(me._thumbs_triangle);
		me._safe_area_main.appendChild(me._thumbs);
		el=me._share=document.createElement('div');
		el.ggId="share";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 145px;';
		hs+='left : 72px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 88px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		hs+='max-width: 600px; min-width: 250px';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._share.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._share.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_controls') == false)) || 
				((player.getVariableValue('vis_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._share.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._share.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._share.style.transition='opacity 300ms ease 0ms';
				if (me._share.ggCurrentLogicStateVisible == 0) {
					me._share.style.visibility="hidden";
					me._share.ggVisible=false;
				}
				else {
					me._share.style.visibility=(Number(me._share.style.opacity)>0||!me._share.style.opacity)?'inherit':'hidden';
					me._share.ggVisible=true;
				}
			}
		}
		me._share.logicBlock_visible();
		me._share.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_share') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._share.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._share.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._share.style.transition='opacity 300ms ease 0ms';
				if (me._share.ggCurrentLogicStateAlpha == 0) {
					me._share.style.visibility=me._share.ggVisible?'inherit':'hidden';
					me._share.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._share.style.opacity == 0.0) { me._share.style.visibility="hidden"; } }, 305);
					me._share.style.opacity=0;
				}
			}
		}
		me._share.logicBlock_alpha();
		me._share.ggUpdatePosition=function (useTransition) {
		}
		el=me._share_bg=document.createElement('div');
		el.ggId="share_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.686275);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 36px;';
		hs+='left : 22px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 72px;';
		hs+='pointer-events:auto;';
		hs+='backdrop-filter: blur(2px); -webkit-backdrop-filter: blur(2px);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._share_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._share_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._copy_btn=document.createElement('div');
		els=me._copy_btn__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjE4cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNCAyNCIgaGVpZ2h0PSIxOHB4Ij4KIDxnPgogIDxyZWN0IGZpbGw9Im5vbmUiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIvPgogPC9nPgogPGc+CiAgPHBhdGggZD0iTTE1LDIwSDVWN2MwLTAuNTUtMC40NS0xLTEtMWgwQzMuNDUsNiwzLDYuNDUsMyw3djEzYzAsMS4xLDAuOSwyLDIsMmgxMGMwLjU1LDAsMS0wLjQ1LDEtMXYwQzE2LDIwLjQ1LDE1LjU1LDIwLDE1LDIweiBNMjAsMTZWNGMwLTEuMS'+
			'0wLjktMi0yLTJIOUM3LjksMiw3LDIuOSw3LDR2MTJjMCwxLjEsMC45LDIsMiwyaDlDMTkuMSwxOCwyMCwxNy4xLDIwLDE2eiBNMTgsMTZIOVY0aDlWMTZ6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._copy_btn__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._copy_btn__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDE4IDE4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHk9IjBweCIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE4ID'+
			'E4OyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDojZGZlMDM2O30mI3hkOwo8L3N0eWxlPgogPGc+CiAgPHJlY3Qgd2lkdGg9IjE4IiBjbGFzcz0ic3QwIiBoZWlnaHQ9IjE4Ii8+CiA8L2c+CiA8Zz4KICA8cGF0aCBkPSJNMTEuMiwxNUgzLjhWNS4yYzAtMC40LTAuMy0wLjgtMC44LTAuOGwwLDBjLTAuNCwwLTAuOCwwLjMtMC44LDAuOFYxNWMwLDAuOCwwLjcsMS41LDEuNSwxLjVoNy41JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC40LDAsMC44LTAuMywwLjgtMC44bDAsMEMxMiwxNS4zLDExLjcsMTUsMTEuMiwxNXogTTE1LDEy'+
			'VjNjMC0wLjgtMC43LTEuNS0xLjUtMS41SDYuOEM1LjksMS41LDUuMiwyLjIsNS4yLDN2OSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAsMC44LDAuNywxLjUsMS41LDEuNWg2LjhDMTQuMywxMy41LDE1LDEyLjgsMTUsMTJ6IE0xMy41LDEySDYuOFYzaDYuOFYxMnoiIGNsYXNzPSJzdDEiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._copy_btn__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="copy_btn";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg svg_shadow";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : 20px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._copy_btn.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._copy_btn.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_share_copy') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._copy_btn.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._copy_btn.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._copy_btn.style.transition='';
				if (me._copy_btn.ggCurrentLogicStateVisible == 0) {
					me._copy_btn.style.visibility=(Number(me._copy_btn.style.opacity)>0||!me._copy_btn.style.opacity)?'inherit':'hidden';
					me._copy_btn.ggVisible=true;
				}
				else {
					me._copy_btn.style.visibility="hidden";
					me._copy_btn.ggVisible=false;
				}
			}
		}
		me._copy_btn.logicBlock_visible();
		me._copy_btn.onclick=function (e) {
			text = document.URL
i = text.indexOf("#");
if (i >= 1) {
text = text.substring(0, i);
}
text = text + "#" + player.getCurrentNode() + "," + (Math.round(player.getPan() * 100) / 100) + "," + (Math.round(player.getTilt() * 100) / 100) + "," + (Math.round(player.getFov() * 100) / 100) + "," + player.getProjection();

dummy = document.createElement('input');
document.body.appendChild(dummy);
dummy.value = text;
dummy.select();
document.execCommand('copy');
document.body.removeChild(dummy);
alert("The current view has been copied.");
		}
		me._copy_btn.onmouseenter=function (e) {
			me._copy_btn__img.style.visibility='hidden';
			me._copy_btn__imgo.style.visibility='inherit';
			me.elementMouseOver['copy_btn']=true;
		}
		me._copy_btn.onmouseleave=function (e) {
			me._copy_btn__img.style.visibility='inherit';
			me._copy_btn__imgo.style.visibility='hidden';
			me.elementMouseOver['copy_btn']=false;
		}
		me._copy_btn.ggUpdatePosition=function (useTransition) {
		}
		me._share_bg.appendChild(me._copy_btn);
		el=me._twitter_btn=document.createElement('div');
		els=me._twitter_btn__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI4LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDI4IDI4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHk9IjBweCIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI4ID'+
			'I4OyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNmZmZmZmY7fQo8L3N0eWxlPgogPHBhdGggZD0iTTE2LDEyLjNsNy45LTkuMUgyMmwtNi44LDcuOUw5LjcsMy4ySDMuNGw4LjIsMTJsLTguMiw5LjZoMS45bDcuMi04LjRsNS44LDguNGg2LjNMMTYsMTIuM0wxNiwxMi4zeiAgIE0xMy40LDE1LjNsLTAuOC0xLjJMNiw0LjZoMi45bDUuNCw3LjdsMC44LDEuMmw3LDEwaC0yLjlMMTMuNCwxNS4zTDEzLjQsMTUuM3oiIGNsYXNzPSJzdDAiLz4KPC9zdmc+Cg==';
		me._twitter_btn__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._twitter_btn__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI4LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDI4IDI4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHk9IjBweCIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI4ID'+
			'I4OyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNkZmUwMzY7fQo8L3N0eWxlPgogPHBhdGggZD0iTTE2LDEyLjNsNy45LTkuMUgyMmwtNi44LDcuOUw5LjcsMy4ySDMuNGw4LjIsMTJsLTguMiw5LjZoMS45bDcuMi04LjRsNS44LDguNGg2LjNMMTYsMTIuM0wxNiwxMi4zeiAgIE0xMy40LDE1LjNsLTAuOC0xLjJMNiw0LjZoMi45bDUuNCw3LjdsMC44LDEuMmw3LDEwaC0yLjlMMTMuNCwxNS4zTDEzLjQsMTUuM3oiIGNsYXNzPSJzdDAiLz4KPC9zdmc+Cg==';
		me._twitter_btn__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="twitter_btn";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg svg_shadow";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : 20px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._twitter_btn.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._twitter_btn.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_share_twitter') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._twitter_btn.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._twitter_btn.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._twitter_btn.style.transition='';
				if (me._twitter_btn.ggCurrentLogicStateVisible == 0) {
					me._twitter_btn.style.visibility=(Number(me._twitter_btn.style.opacity)>0||!me._twitter_btn.style.opacity)?'inherit':'hidden';
					me._twitter_btn.ggVisible=true;
				}
				else {
					me._twitter_btn.style.visibility="hidden";
					me._twitter_btn.ggVisible=false;
				}
			}
		}
		me._twitter_btn.logicBlock_visible();
		me._twitter_btn.onclick=function (e) {
			window.open('http://twitter.com/share?url=' + location.href);
		}
		me._twitter_btn.onmouseenter=function (e) {
			me._twitter_btn__img.style.visibility='hidden';
			me._twitter_btn__imgo.style.visibility='inherit';
			me.elementMouseOver['twitter_btn']=true;
		}
		me._twitter_btn.onmouseleave=function (e) {
			me._twitter_btn__img.style.visibility='inherit';
			me._twitter_btn__imgo.style.visibility='hidden';
			me.elementMouseOver['twitter_btn']=false;
		}
		me._twitter_btn.ggUpdatePosition=function (useTransition) {
		}
		me._share_bg.appendChild(me._twitter_btn);
		el=me._facebook_btn=document.createElement('div');
		els=me._facebook_btn__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjE4cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNCAyNCIgaGVpZ2h0PSIxOHB4Ij4KIDxyZWN0IGZpbGw9Im5vbmUiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIvPgogPHBhdGggZD0iTTIyLDEyYzAtNS41Mi00LjQ4LTEwLTEwLTEwUzIsNi40OCwyLDEyYzAsNC44NCwzLjQ0LDguODcsOCw5LjhWMTVIOHYtM2gyVjkuNUMxMCw3LjU3LDExLjU3LDYsMTMuNSw2SDE2djNoLTIgYy0wLjU1LDAtMSwwLjQ1LTEsMXYyaDN2M2gtM3Y2Ljk1QzE4LjA1LD'+
			'IxLjQ1LDIyLDE3LjE5LDIyLDEyeiIvPgo8L3N2Zz4K';
		me._facebook_btn__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._facebook_btn__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDE4IDE4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHk9IjBweCIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE4ID'+
			'E4OyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDojZGZlMDM2O30mI3hkOwo8L3N0eWxlPgogPHJlY3Qgd2lkdGg9IjE4IiBjbGFzcz0ic3QwIiBoZWlnaHQ9IjE4Ii8+CiA8cGF0aCBkPSJNMTYuNSw5YzAtNC4xLTMuNC03LjUtNy41LTcuNVMxLjUsNC45LDEuNSw5YzAsMy42LDIuNiw2LjcsNiw3LjN2LTUuMUg2VjloMS41VjcuMWMwLTEuNCwxLjItMi42LDIuNi0yLjZIMTImI3hkOyYjeGE7JiN4OTt2Mi4yaC0xLjVjLTAuNCwwLTAuOCwwLjMtMC44LDAuOFY5SDEydjIuMkg5Ljh2NS4yQzEzLjUsMTYuMSwxNi41LDEyLjks'+
			'MTYuNSw5eiIgY2xhc3M9InN0MSIvPgo8L3N2Zz4K';
		me._facebook_btn__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="facebook_btn";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg svg_shadow";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : 20px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._facebook_btn.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._facebook_btn.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_share_facebook') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._facebook_btn.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._facebook_btn.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._facebook_btn.style.transition='';
				if (me._facebook_btn.ggCurrentLogicStateVisible == 0) {
					me._facebook_btn.style.visibility=(Number(me._facebook_btn.style.opacity)>0||!me._facebook_btn.style.opacity)?'inherit':'hidden';
					me._facebook_btn.ggVisible=true;
				}
				else {
					me._facebook_btn.style.visibility="hidden";
					me._facebook_btn.ggVisible=false;
				}
			}
		}
		me._facebook_btn.logicBlock_visible();
		me._facebook_btn.onclick=function (e) {
			window.open('https://www.facebook.com/sharer/sharer.php?u=' + location.href);
		}
		me._facebook_btn.onmouseenter=function (e) {
			me._facebook_btn__img.style.visibility='hidden';
			me._facebook_btn__imgo.style.visibility='inherit';
			me.elementMouseOver['facebook_btn']=true;
		}
		me._facebook_btn.onmouseleave=function (e) {
			me._facebook_btn__img.style.visibility='inherit';
			me._facebook_btn__imgo.style.visibility='hidden';
			me.elementMouseOver['facebook_btn']=false;
		}
		me._facebook_btn.ggUpdatePosition=function (useTransition) {
		}
		me._share_bg.appendChild(me._facebook_btn);
		me._share.appendChild(me._share_bg);
		el=me._share_triangle=document.createElement('div');
		el.ggId="share_triangle";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 36px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		hs+='width: 0 !important; height: 0 !important; border-top: 22px solid rgba(255, 255, 255, 0.68); border-left: 22px solid transparent; border-bottom: 0; border-right: 0; backdrop-filter: blur(2px); -webkit-backdrop-filter: blur(2px);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._share_triangle.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._share_triangle.ggUpdatePosition=function (useTransition) {
		}
		me._share.appendChild(me._share_triangle);
		me._safe_area_main.appendChild(me._share);
		el=me._info=document.createElement('div');
		el.ggId="info";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 33%;';
		hs+='left : 72px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 88px;';
		hs+='visibility : hidden;';
		hs+='width : 25%;';
		hs+='pointer-events:none;';
		hs+='max-width: 600px; min-width: 420px';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._info.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_controls') == false)) || 
				((player.getVariableValue('vis_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._info.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._info.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._info.style.transition='opacity 300ms ease 0ms';
				if (me._info.ggCurrentLogicStateVisible == 0) {
					me._info.style.visibility="hidden";
					me._info.ggVisible=false;
				}
				else {
					me._info.style.visibility=(Number(me._info.style.opacity)>0||!me._info.style.opacity)?'inherit':'hidden';
					me._info.ggVisible=true;
				}
			}
		}
		me._info.logicBlock_visible();
		me._info.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_info') == true)) && 
				((player._(me.ggUserdata.description) != ""))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._info.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._info.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._info.style.transition='opacity 300ms ease 0ms';
				if (me._info.ggCurrentLogicStateAlpha == 0) {
					me._info.style.visibility=me._info.ggVisible?'inherit':'hidden';
					me._info.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._info.style.opacity == 0.0) { me._info.style.visibility="hidden"; } }, 305);
					me._info.style.opacity=0;
				}
			}
		}
		me._info.logicBlock_alpha();
		me._info.ggUpdatePosition=function (useTransition) {
		}
		el=me._info_text=document.createElement('div');
		els=me._info_text__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_text";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text plex_sans_regular";
		el.ggType='text';
		hs ='';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : 22px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 22px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='background : rgba(255,255,255,0.745098);';
		hs+='border : 0px solid #000000;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 20px 25px 25px 25px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		hs+="max-height: min(50vh,calc(100vh - 300px)); word-wrap: break-word; overflow-wrap:break-word; backdrop-filter: blur(2px); -webkit-backdrop-filter: blur(2px);";
		els.setAttribute('style',hs);
		me._info_text.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			params.push(String(player._(me.ggUserdata.description)));
			var hs = player._("<b class=\'info_headline\'>%1<\/b><p class=\'info_text\'>%2<\/p>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._info_text.ggUpdateText();
		player.addListener('changenode', function() {
			me._info_text.ggUpdateText();
		});
		el.appendChild(els);
		me._info_text.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_text.ggUpdatePosition=function (useTransition) {
		}
		me._info.appendChild(me._info_text);
		el=me._info_triangle=document.createElement('div');
		el.ggId="info_triangle";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 36px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		hs+='width: 0 !important; height: 0 !important; border-top: 22px solid rgba(255, 255, 255, 0.74); border-left: 22px solid transparent; border-bottom: 0; border-right: 0; backdrop-filter: blur(2px); -webkit-backdrop-filter: blur(2px);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._info_triangle.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_triangle.ggUpdatePosition=function (useTransition) {
		}
		me._info.appendChild(me._info_triangle);
		me._safe_area_main.appendChild(me._info);
		el=me._floorplan=document.createElement('div');
		el.ggId="floorplan";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 50%;';
		hs+='left : 72px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 88px;';
		hs+='visibility : hidden;';
		hs+='width : 25%;';
		hs+='pointer-events:none;';
		hs+='max-height: min(50vh,calc(100vh - 392px)); max-width: 600px; min-width: 420px';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._floorplan.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._floorplan.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_controls') == false)) || 
				((player.getVariableValue('vis_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._floorplan.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._floorplan.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._floorplan.style.transition='opacity 500ms ease 0ms';
				if (me._floorplan.ggCurrentLogicStateVisible == 0) {
					me._floorplan.style.visibility="hidden";
					me._floorplan.ggVisible=false;
				}
				else {
					me._floorplan.style.visibility=(Number(me._floorplan.style.opacity)>0||!me._floorplan.style.opacity)?'inherit':'hidden';
					me._floorplan.ggVisible=true;
				}
			}
		}
		me._floorplan.logicBlock_visible();
		me._floorplan.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_floorplan') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._floorplan.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._floorplan.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._floorplan.style.transition='opacity 500ms ease 0ms';
				if (me._floorplan.ggCurrentLogicStateAlpha == 0) {
					me._floorplan.style.visibility=me._floorplan.ggVisible?'inherit':'hidden';
					me._floorplan.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._floorplan.style.opacity == 0.0) { me._floorplan.style.visibility="hidden"; } }, 505);
					me._floorplan.style.opacity=0;
				}
			}
		}
		me._floorplan.logicBlock_alpha();
		me._floorplan.ggUpdatePosition=function (useTransition) {
		}
		el=me._floorplan_bg=document.createElement('div');
		el.ggId="floorplan_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.686275);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 22px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 28px);';
		hs+='pointer-events:auto;';
		hs+='backdrop-filter: blur(2px); -webkit-backdrop-filter: blur(2px);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._floorplan_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._floorplan_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._floorplan_el=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapLayers = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = '_none';
		el.ggId="floorplan_el";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='height : calc(100% - 50px);';
		hs+='left : 25px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._floorplan_el.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._floorplan_el.ggUpdatePosition=function (useTransition) {
		}
		me._floorplan_bg.appendChild(me._floorplan_el);
		me._floorplan.appendChild(me._floorplan_bg);
		el=me._floorplan_triangle=document.createElement('div');
		el.ggId="floorplan_triangle";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 36px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		hs+='width: 0 !important; height: 0 !important; border-top: 22px solid rgba(255, 255, 255, 0.68); border-left: 22px solid transparent; border-bottom: 0; border-right: 0; backdrop-filter: blur(2px); -webkit-backdrop-filter: blur(2px);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._floorplan_triangle.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._floorplan_triangle.ggUpdatePosition=function (useTransition) {
		}
		me._floorplan.appendChild(me._floorplan_triangle);
		me._safe_area_main.appendChild(me._floorplan);
		el=me._map=document.createElement('div');
		el.ggId="map";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 50%;';
		hs+='left : 72px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 88px;';
		hs+='visibility : hidden;';
		hs+='width : 25%;';
		hs+='pointer-events:none;';
		hs+='max-height: min(50vh,calc(100vh - 350px)); max-width: 600px; min-width: 420px';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_controls') == false)) || 
				((player.getVariableValue('vis_popup') == true)) || 
				((player.getVariableValue('vis_pdf_popup') == true)) || 
				((player.getVariableValue('vis_video_youtube_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map.style.transition='opacity 500ms ease 0ms';
				if (me._map.ggCurrentLogicStateVisible == 0) {
					me._map.style.visibility="hidden";
					me._map.ggVisible=false;
				}
				else {
					me._map.style.visibility=(Number(me._map.style.opacity)>0||!me._map.style.opacity)?'inherit':'hidden';
					me._map.ggVisible=true;
				}
			}
		}
		me._map.logicBlock_visible();
		me._map.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_map') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map.style.transition='opacity 500ms ease 0ms';
				if (me._map.ggCurrentLogicStateAlpha == 0) {
					me._map.style.visibility=me._map.ggVisible?'inherit':'hidden';
					me._map.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._map.style.opacity == 0.0) { me._map.style.visibility="hidden"; } }, 505);
					me._map.style.opacity=0;
				}
			}
		}
		me._map.logicBlock_alpha();
		me._map.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_bg=document.createElement('div');
		el.ggId="map_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.686275);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 22px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 28px);';
		hs+='pointer-events:auto;';
		hs+='backdrop-filter: blur(2px); -webkit-backdrop-filter: blur(2px);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_el=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapLayers = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = '_none';
		el.ggId="map_el";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='height : calc(100% - 50px);';
		hs+='left : 25px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_el.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_el.ggUpdatePosition=function (useTransition) {
		}
		me._map_bg.appendChild(me._map_el);
		me._map.appendChild(me._map_bg);
		el=me._map_triangle=document.createElement('div');
		el.ggId="map_triangle";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 36px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		hs+='width: 0 !important; height: 0 !important; border-top: 22px solid rgba(255, 255, 255, 0.68); border-left: 22px solid transparent; border-bottom: 0; border-right: 0; backdrop-filter: blur(2px); -webkit-backdrop-filter: blur(2px);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_triangle.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_triangle.ggUpdatePosition=function (useTransition) {
		}
		me._map.appendChild(me._map_triangle);
		me._safe_area_main.appendChild(me._map);
		el=me._cloner_container=document.createElement('div');
		el.ggId="cloner_container";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 28px;';
		hs+='left : 90px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 32px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 180px);';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._cloner_container.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._cloner_container.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('opt_proj_title') == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._cloner_container.ggCurrentLogicStateSize != newLogicStateSize) {
				me._cloner_container.ggCurrentLogicStateSize = newLogicStateSize;
				me._cloner_container.style.transition='width 0s, height 0s, opacity 500ms ease 0ms';
				if (me._cloner_container.ggCurrentLogicStateSize == 0) {
					me._cloner_container.style.width='calc(50% - 120px)';
					me._cloner_container.style.height='28px';
					skin.updateSize(me._cloner_container);
				}
				else {
					me._cloner_container.style.width='calc(100% - 180px)';
					me._cloner_container.style.height='28px';
					skin.updateSize(me._cloner_container);
				}
			}
		}
		me._cloner_container.logicBlock_size();
		me._cloner_container.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('has_categories') == false)) || 
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._cloner_container.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._cloner_container.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._cloner_container.style.transition='width 0s, height 0s, opacity 500ms ease 0ms';
				if (me._cloner_container.ggCurrentLogicStateVisible == 0) {
					me._cloner_container.style.visibility="hidden";
					me._cloner_container.ggVisible=false;
				}
				else {
					me._cloner_container.style.visibility=(Number(me._cloner_container.style.opacity)>0||!me._cloner_container.style.opacity)?'inherit':'hidden';
					me._cloner_container.ggVisible=true;
				}
			}
		}
		me._cloner_container.logicBlock_visible();
		me._cloner_container.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_controls') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._cloner_container.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._cloner_container.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._cloner_container.style.transition='width 0s, height 0s, opacity 500ms ease 0ms';
				if (me._cloner_container.ggCurrentLogicStateAlpha == 0) {
					me._cloner_container.style.visibility=me._cloner_container.ggVisible?'inherit':'hidden';
					me._cloner_container.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._cloner_container.style.opacity == 0.0) { me._cloner_container.style.visibility="hidden"; } }, 505);
					me._cloner_container.style.opacity=0;
				}
			}
		}
		me._cloner_container.logicBlock_alpha();
		me._cloner_container.ggUpdatePosition=function (useTransition) {
		}
		el=me._categories_cloner=document.createElement('div');
		el.ggNumRepeat = 100;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 173;
		el.ggHeight = 28;
		el.ggSizeChanged = false;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.ggGoUp = function() {
			if (me._categories_cloner.ggCloneOffset + me._categories_cloner.ggNumCols <= me._categories_cloner.ggNumFilterPassed) {
				me._categories_cloner.ggCloneOffset += me._categories_cloner.ggNumCols;
				me._categories_cloner.ggCloneOffsetChanged = true;
				me._categories_cloner.ggUpdate();
			}
		}
		el.ggGoDown = function() {
			if (me._categories_cloner.ggCloneOffset > 0) {
				me._categories_cloner.ggCloneOffset -= me._categories_cloner.ggNumCols;
				me._categories_cloner.ggCloneOffset = Math.max(me._categories_cloner.ggCloneOffset, 0);
				me._categories_cloner.ggCloneOffsetChanged = true;
				me._categories_cloner.ggUpdate();
			}
		}
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me._categories_cloner.ggUpdating == true) return;
			me._categories_cloner.ggUpdating = true;
			var el=me._categories_cloner;
			var curNumCols = 0;
			var parentWidth = me._categories_cloner.parentNode.classList.contains('ggskin_subelement') ? (me._categories_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea') ? me._categories_cloner.parentNode.parentNode.ggAvailableWidth : me._categories_cloner.parentNode.parentNode.clientWidth) : me._categories_cloner.parentNode.clientWidth;
			if (parentWidth == 0) parentWidth = me._categories_cloner.parentNode.parentNode.clientWidth;
			curNumCols = Math.floor(((parentWidth - me._categories_cloner.offsetLeft) * me._categories_cloner.ggNumRepeat / 100.0) / me._categories_cloner.offsetWidth);
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && !el.ggSizeChanged && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) ) && (!me._categories_cloner.ggCloneOffsetChanged)) {
				me._categories_cloner.ggUpdating = false;
				return;
			} else {
				el.ggSizeChanged = false;
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._categories_cloner.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			if (tourNodes.length == 0) {
				me._categories_cloner.ggUpdating = false;
				return;
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			me._categories_cloner.ggNumFilterPassed = 0;
			var firstNode;
			for (var i = 0; i < el.ggTagTable.length; i++) {
				var cItem = el.ggTagTable[i];
				firstNode = '';
				cItem.nodecount = 0;
				for (var j=0; j < tourNodes.length; j++) {
					var nodeData = player.getNodeUserdata(tourNodes[j]);
					if ((nodeData['tags'].indexOf(cItem.tag) != -1) || (cItem.tag=='')) {
						var passed = true;
						if (filter.length > 0) {
							for (var k=0; k < filter.length; k++) {
								if (nodeData['tags'].indexOf(filter[k].trim()) == -1) passed = false;
							}
						}
						if (passed) {
							cItem.nodecount++;
							if (firstNode == '') firstNode = tourNodes[j];
						}
					}
				}
				cItem.firstnode=firstNode;
				if (cItem.nodecount == 0) continue;
				me._categories_cloner.ggNumFilterPassed++;
				var nodeId = {};
				nodeId['tag'] = cItem.tag;
				nodeId['title'] = cItem.title;
				nodeId['description'] = cItem.description;
				nodeId['nodecount'] = cItem.nodecount;
				nodeId['firstnode'] = cItem.firstnode;
				if (!keepCloning || i < me._categories_cloner.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._categories_cloner.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._categories_cloner.ggWidth) + 'px';
				parameter.width=me._categories_cloner.ggWidth + 'px';
				parameter.height=me._categories_cloner.ggHeight + 'px';
				parameter.index=currentIndex;
				var inst = new SkinCloner_categories_cloner_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					keepCloning = false;
				}
			}
			player.setVariableValue('categories_cloner_hasDown', me._categories_cloner.ggCloneOffset > 0);
			player.setVariableValue('categories_cloner_hasUp', me._categories_cloner.ggCloneOffset + me._categories_cloner.ggNumCols < me._categories_cloner.ggNumFilterPassed);
			me._categories_cloner.ggNodeCount = me._categories_cloner.ggNumFilterPassed;
			me._categories_cloner.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._categories_cloner.parentNode && me._categories_cloner.parentNode.classList.contains('ggskin_subelement') && me._categories_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._categories_cloner.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggTagTable = [
			];
		el.ggId="categories_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 28px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 173px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._categories_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._categories_cloner.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('categories_cloner_hasUp') == true)) || 
				((player.getVariableValue('categories_cloner_hasDown') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._categories_cloner.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._categories_cloner.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._categories_cloner.style.transition='left 0s, top 0s';
				if (me._categories_cloner.ggCurrentLogicStatePosition == 0) {
					me._categories_cloner.style.left='32px';
					me._categories_cloner.style.top='0px';
				}
				else {
					me._categories_cloner.style.left='0px';
					me._categories_cloner.style.top='0px';
				}
			}
		}
		me._categories_cloner.logicBlock_position();
		me._categories_cloner.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_popup') == true)) || 
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._categories_cloner.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._categories_cloner.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._categories_cloner.style.transition='left 0s, top 0s';
				if (me._categories_cloner.ggCurrentLogicStateVisible == 0) {
					me._categories_cloner.style.visibility="hidden";
					me._categories_cloner.ggVisible=false;
				}
				else {
					me._categories_cloner.style.visibility=(Number(me._categories_cloner.style.opacity)>0||!me._categories_cloner.style.opacity)?'inherit':'hidden';
					me._categories_cloner.ggVisible=true;
				}
			}
		}
		me._categories_cloner.logicBlock_visible();
		me._categories_cloner.ggCurrentLogicStatePosition = -1;
		me._categories_cloner.ggCurrentLogicStateVisible = -1;
		me._categories_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._categories_cloner.childNodes.length; i++) {
				var child=me._categories_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._categories_cloner.ggUpdatePosition=function (useTransition) {
			me._categories_cloner.ggUpdate();
		}
		me._cloner_container.appendChild(me._categories_cloner);
		el=me._pagination_container=document.createElement('div');
		el.ggId="pagination_container";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : -26px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 56px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pagination_container.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pagination_container.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('categories_cloner_hasUp') == true)) || 
				((player.getVariableValue('categories_cloner_hasDown') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._pagination_container.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._pagination_container.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._pagination_container.style.transition='';
				if (me._pagination_container.ggCurrentLogicStateVisible == 0) {
					me._pagination_container.style.visibility=(Number(me._pagination_container.style.opacity)>0||!me._pagination_container.style.opacity)?'inherit':'hidden';
					me._pagination_container.ggVisible=true;
				}
				else {
					me._pagination_container.style.visibility="hidden";
					me._pagination_container.ggVisible=false;
				}
			}
		}
		me._pagination_container.logicBlock_visible();
		me._pagination_container.ggUpdatePosition=function (useTransition) {
		}
		el=me._categories_up=document.createElement('div');
		els=me._categories_up__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjE4cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjE4cHgiPgogPHBhdGggZD0iTTEwIDE3bDUtNS01LTV2MTB6Ii8+CiA8cGF0aCBmaWxsPSJub25lIiBkPSJNMCAyNFYwaDI0djI0SDB6Ii8+Cjwvc3ZnPgo=';
		me._categories_up__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._categories_up__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDE4IDE4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHk9IjBweCIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE4ID'+
			'E4OyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I2RmZTAzNjt9JiN4ZDsKCS5zdDF7ZmlsbDpub25lO30mI3hkOwo8L3N0eWxlPgogPHBhdGggZD0iTTcuNSwxMi44TDExLjIsOUw3LjUsNS4yVjEyLjh6IiBjbGFzcz0ic3QwIi8+CiA8cGF0aCBkPSJNMCwxOFYwaDE4djE4SDB6IiBjbGFzcz0ic3QxIi8+Cjwvc3ZnPgo=';
		me._categories_up__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="categories_up";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 24px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._categories_up.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._categories_up.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('categories_cloner_hasUp') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._categories_up.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._categories_up.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._categories_up.style.transition='';
				if (me._categories_up.ggCurrentLogicStateVisible == 0) {
					me._categories_up.style.visibility="hidden";
					me._categories_up.ggVisible=false;
				}
				else {
					me._categories_up.style.visibility=(Number(me._categories_up.style.opacity)>0||!me._categories_up.style.opacity)?'inherit':'hidden';
					me._categories_up.ggVisible=true;
				}
			}
		}
		me._categories_up.logicBlock_visible();
		me._categories_up.onclick=function (e) {
			skin.findElements('categories_cloner')[0].ggGoUp();
		}
		me._categories_up.onmouseenter=function (e) {
			me._categories_up__img.style.visibility='hidden';
			me._categories_up__imgo.style.visibility='inherit';
			me.elementMouseOver['categories_up']=true;
		}
		me._categories_up.onmouseleave=function (e) {
			me._categories_up__img.style.visibility='inherit';
			me._categories_up__imgo.style.visibility='hidden';
			me.elementMouseOver['categories_up']=false;
		}
		me._categories_up.ggUpdatePosition=function (useTransition) {
		}
		me._pagination_container.appendChild(me._categories_up);
		el=me._categories_up_disabled=document.createElement('div');
		els=me._categories_up_disabled__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjE4cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjE4cHgiPgogPHBhdGggZD0iTTEwIDE3bDUtNS01LTV2MTB6Ii8+CiA8cGF0aCBmaWxsPSJub25lIiBkPSJNMCAyNFYwaDI0djI0SDB6Ii8+Cjwvc3ZnPgo=';
		me._categories_up_disabled__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="categories_up_disabled";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 24px;';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._categories_up_disabled.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._categories_up_disabled.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('categories_cloner_hasUp') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._categories_up_disabled.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._categories_up_disabled.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._categories_up_disabled.style.transition='';
				if (me._categories_up_disabled.ggCurrentLogicStateVisible == 0) {
					me._categories_up_disabled.style.visibility=(Number(me._categories_up_disabled.style.opacity)>0||!me._categories_up_disabled.style.opacity)?'inherit':'hidden';
					me._categories_up_disabled.ggVisible=true;
				}
				else {
					me._categories_up_disabled.style.visibility="hidden";
					me._categories_up_disabled.ggVisible=false;
				}
			}
		}
		me._categories_up_disabled.logicBlock_visible();
		me._categories_up_disabled.ggUpdatePosition=function (useTransition) {
		}
		me._pagination_container.appendChild(me._categories_up_disabled);
		el=me._categories_down=document.createElement('div');
		els=me._categories_down__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjE4cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjE4cHgiPgogPHBhdGggZD0iTTE0IDdsLTUgNSA1IDVWN3oiLz4KIDxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0yNCAwdjI0SDBWMGgyNHoiLz4KPC9zdmc+Cg==';
		me._categories_down__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._categories_down__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDE4IDE4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHk9IjBweCIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE4ID'+
			'E4OyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I2RmZTAzNjt9JiN4ZDsKCS5zdDF7ZmlsbDpub25lO30mI3hkOwo8L3N0eWxlPgogPHBhdGggZD0iTTEwLjUsNS4yTDYuOCw5bDMuOCwzLjhWNS4yeiIgY2xhc3M9InN0MCIvPgogPHBhdGggZD0iTTE4LDB2MThIMFYwSDE4eiIgY2xhc3M9InN0MSIvPgo8L3N2Zz4K';
		me._categories_down__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="categories_down";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._categories_down.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._categories_down.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('categories_cloner_hasDown') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._categories_down.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._categories_down.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._categories_down.style.transition='';
				if (me._categories_down.ggCurrentLogicStateVisible == 0) {
					me._categories_down.style.visibility="hidden";
					me._categories_down.ggVisible=false;
				}
				else {
					me._categories_down.style.visibility=(Number(me._categories_down.style.opacity)>0||!me._categories_down.style.opacity)?'inherit':'hidden';
					me._categories_down.ggVisible=true;
				}
			}
		}
		me._categories_down.logicBlock_visible();
		me._categories_down.onclick=function (e) {
			skin.findElements('categories_cloner')[0].ggGoDown();
		}
		me._categories_down.onmouseenter=function (e) {
			me._categories_down__img.style.visibility='hidden';
			me._categories_down__imgo.style.visibility='inherit';
			me.elementMouseOver['categories_down']=true;
		}
		me._categories_down.onmouseleave=function (e) {
			me._categories_down__img.style.visibility='inherit';
			me._categories_down__imgo.style.visibility='hidden';
			me.elementMouseOver['categories_down']=false;
		}
		me._categories_down.ggUpdatePosition=function (useTransition) {
		}
		me._pagination_container.appendChild(me._categories_down);
		el=me._categories_down_disabled=document.createElement('div');
		els=me._categories_down_disabled__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjE4cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjE4cHgiPgogPHBhdGggZD0iTTE0IDdsLTUgNSA1IDVWN3oiLz4KIDxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0yNCAwdjI0SDBWMGgyNHoiLz4KPC9zdmc+Cg==';
		me._categories_down_disabled__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="categories_down_disabled";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._categories_down_disabled.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._categories_down_disabled.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('categories_cloner_hasDown') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._categories_down_disabled.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._categories_down_disabled.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._categories_down_disabled.style.transition='';
				if (me._categories_down_disabled.ggCurrentLogicStateVisible == 0) {
					me._categories_down_disabled.style.visibility=(Number(me._categories_down_disabled.style.opacity)>0||!me._categories_down_disabled.style.opacity)?'inherit':'hidden';
					me._categories_down_disabled.ggVisible=true;
				}
				else {
					me._categories_down_disabled.style.visibility="hidden";
					me._categories_down_disabled.ggVisible=false;
				}
			}
		}
		me._categories_down_disabled.logicBlock_visible();
		me._categories_down_disabled.ggUpdatePosition=function (useTransition) {
		}
		me._pagination_container.appendChild(me._categories_down_disabled);
		me._cloner_container.appendChild(me._pagination_container);
		me._safe_area_main.appendChild(me._cloner_container);
		el=me._project_title=document.createElement('div');
		els=me._project_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="project_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text krona shadow_title";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 180px;';
		hs+='position : absolute;';
		hs+='right : 32px;';
		hs+='top : 32px;';
		hs+='visibility : hidden;';
		hs+='width : calc(50% - 40px);';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='pointer-events: none;';
		hs+='font-size: 28px;';
		hs+='font-weight: inherit;';
		hs+='text-align: right;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._project_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(player.getNodeUserdata('_master').title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._project_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._project_title.ggUpdateText();
		});
		el.appendChild(els);
		me._project_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._project_title.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_popup') == false)) && 
				((player.getVariableValue('opt_proj_title') == true)) && 
				((player.getVariableValue('resp_phone') == false)) && 
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._project_title.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._project_title.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._project_title.style.transition='';
				if (me._project_title.ggCurrentLogicStateVisible == 0) {
					me._project_title.style.visibility=(Number(me._project_title.style.opacity)>0||!me._project_title.style.opacity)?'inherit':'hidden';
					me._project_title.ggVisible=true;
				}
				else {
					me._project_title.style.visibility="hidden";
					me._project_title.ggVisible=false;
				}
			}
		}
		me._project_title.logicBlock_visible();
		me._project_title.ggUpdatePosition=function (useTransition) {
		}
		me._safe_area_main.appendChild(me._project_title);
		me.divSkin.appendChild(me._safe_area_main);
		el=me._safe_area_project_title_phone=document.createElement('div');
		el.ggId="safe_area_project_title_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : calc(100% - env(safe-area-inset-top) - env(safe-area-inset-bottom));';
		hs+='left : env(safe-area-inset-left);';
		hs+='position : absolute;';
		hs+='top : env(safe-area-inset-top);';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - env(safe-area-inset-left) - env(safe-area-inset-right));';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._safe_area_project_title_phone.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._safe_area_project_title_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._project_title_phone=document.createElement('div');
		els=me._project_title_phone__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="project_title_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text krona shadow_title";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 132px;';
		hs+='position : absolute;';
		hs+='right : 10px;';
		hs+='top : 50px;';
		hs+='visibility : hidden;';
		hs+='width : 60%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='pointer-events: none;';
		hs+='font-size: 22px;';
		hs+='font-weight: inherit;';
		hs+='text-align: right;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._project_title_phone.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(player.getNodeUserdata('_master').title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._project_title_phone.ggUpdateText();
		player.addListener('changenode', function() {
			me._project_title_phone.ggUpdateText();
		});
		el.appendChild(els);
		me._project_title_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._project_title_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('resp_phone') == true)) && 
				((player.getVariableValue('opt_proj_title') == true)) && 
				((player.getVariableValue('vis_popup') == false)) && 
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._project_title_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._project_title_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._project_title_phone.style.transition='';
				if (me._project_title_phone.ggCurrentLogicStateVisible == 0) {
					me._project_title_phone.style.visibility=(Number(me._project_title_phone.style.opacity)>0||!me._project_title_phone.style.opacity)?'inherit':'hidden';
					me._project_title_phone.ggVisible=true;
				}
				else {
					me._project_title_phone.style.visibility="hidden";
					me._project_title_phone.ggVisible=false;
				}
			}
		}
		me._project_title_phone.logicBlock_visible();
		me._project_title_phone.ggUpdatePosition=function (useTransition) {
		}
		me._safe_area_project_title_phone.appendChild(me._project_title_phone);
		me.divSkin.appendChild(me._safe_area_project_title_phone);
		el=me._screentint=document.createElement('div');
		el.ggId="screentint";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='backdrop-filter: blur(5px); -webkit-backdrop-filter: blur(5px);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._screentint.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._screentint.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_popup') == true)) && 
				((player.getVariableValue('resp_phone') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._screentint.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._screentint.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._screentint.style.transition='';
				if (me._screentint.ggCurrentLogicStateVisible == 0) {
					me._screentint.style.visibility=(Number(me._screentint.style.opacity)>0||!me._screentint.style.opacity)?'inherit':'hidden';
					me._screentint.ggVisible=true;
				}
				else {
					me._screentint.style.visibility="hidden";
					me._screentint.ggVisible=false;
				}
			}
		}
		me._screentint.logicBlock_visible();
		me._screentint.onclick=function (e) {
			player.setVariableValue('vis_url_popup', false);
			player.setVariableValue('vis_image_popup', false);
			player.setVariableValue('vis_pdf_popup', false);
			player.setVariableValue('vis_video_youtube_popup', false);
			player.setVariableValue('vis_video_vimeo_popup', false);
			player.setVariableValue('vis_video_file_popup', false);
			player.setVariableValue('vis_video_url_popup', false);
		}
		me._screentint.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._screentint);
		el=me._image_popup=document.createElement('div');
		el.ggId="image_popup";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 80%;';
		hs+='left : 10%;';
		hs+='position : absolute;';
		hs+='top : 10%;';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_popup.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_popup.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_image_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_popup.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_popup.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_popup.style.transition='';
				if (me._image_popup.ggCurrentLogicStateVisible == 0) {
					me._image_popup.style.visibility=(Number(me._image_popup.style.opacity)>0||!me._image_popup.style.opacity)?'inherit':'hidden';
					me._image_popup.ggVisible=true;
				}
				else {
					me._image_popup.style.visibility="hidden";
					me._image_popup.ggVisible=false;
				}
			}
		}
		me._image_popup.logicBlock_visible();
		me._image_popup.ggUpdatePosition=function (useTransition) {
		}
		el=me._loading_image=document.createElement('div');
		els=me._loading_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjY0IiB2aWV3Qm94PSIwIDAgMzIgMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaGVpZ2h0PSI2NCI+CiA8Y2lyY2xlIGN5PSIzIiByPSIwIiBjeD0iMTYiPgogIDxhbmltYXRlIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBjYWxjTW9kZT0ic3BsaW5lIiB2YWx1ZXM9IjA7MzswOzAiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiBhdHRyaWJ1dGVOYW1lPSJyIiBkdXI9IjFzIiBiZWdpbj0iMCIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN5PSIzIiByPSIwIiB0cmFuc2'+
			'Zvcm09InJvdGF0ZSg0NSAxNiAxNikiIGN4PSIxNiI+CiAgPGFuaW1hdGUgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGNhbGNNb2RlPSJzcGxpbmUiIHZhbHVlcz0iMDszOzA7MCIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGF0dHJpYnV0ZU5hbWU9InIiIGR1cj0iMXMiIGJlZ2luPSIwLjEyNXMiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSBjeT0iMyIgcj0iMCIgdHJhbnNmb3JtPSJyb3RhdGUoOTAgMTYgMTYpIiBjeD0iMTYiPgogIDxhbmltYXRlIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBjYWxjTW9kZT0ic3BsaW5lIiB2YWx1'+
			'ZXM9IjA7MzswOzAiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiBhdHRyaWJ1dGVOYW1lPSJyIiBkdXI9IjFzIiBiZWdpbj0iMC4yNXMiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSBjeT0iMyIgcj0iMCIgdHJhbnNmb3JtPSJyb3RhdGUoMTM1IDE2IDE2KSIgY3g9IjE2Ij4KICA8YW5pbWF0ZSByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgY2FsY01vZGU9InNwbGluZSIgdmFsdWVzPSIwOzM7MDswIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgYXR0cmlidXRlTmFtZT0ici'+
			'IgZHVyPSIxcyIgYmVnaW49IjAuMzc1cyIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN5PSIzIiByPSIwIiB0cmFuc2Zvcm09InJvdGF0ZSgxODAgMTYgMTYpIiBjeD0iMTYiPgogIDxhbmltYXRlIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBjYWxjTW9kZT0ic3BsaW5lIiB2YWx1ZXM9IjA7MzswOzAiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiBhdHRyaWJ1dGVOYW1lPSJyIiBkdXI9IjFzIiBiZWdpbj0iMC41cyIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN5PSIzIiByPSIwIiB0cmFuc2Zvcm09InJvdGF0ZSgyMjUgMTYgMTYpIiBj'+
			'eD0iMTYiPgogIDxhbmltYXRlIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBjYWxjTW9kZT0ic3BsaW5lIiB2YWx1ZXM9IjA7MzswOzAiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiBhdHRyaWJ1dGVOYW1lPSJyIiBkdXI9IjFzIiBiZWdpbj0iMC42MjVzIi8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgY3k9IjMiIHI9IjAiIHRyYW5zZm9ybT0icm90YXRlKDI3MCAxNiAxNikiIGN4PSIxNiI+CiAgPGFuaW1hdGUgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGNhbGNNb2RlPSJzcGxpbmUiIHZhbHVlcz0iMDszOzA7MCIga2V5U3BsaW5lcz'+
			'0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGF0dHJpYnV0ZU5hbWU9InIiIGR1cj0iMXMiIGJlZ2luPSIwLjc1cyIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN5PSIzIiByPSIwIiB0cmFuc2Zvcm09InJvdGF0ZSgzMTUgMTYgMTYpIiBjeD0iMTYiPgogIDxhbmltYXRlIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBjYWxjTW9kZT0ic3BsaW5lIiB2YWx1ZXM9IjA7MzswOzAiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiBhdHRyaWJ1dGVOYW1lPSJyIiBkdXI9IjFzIiBiZWdpbj0iMC44NzVz'+
			'Ii8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgY3k9IjMiIHI9IjAiIHRyYW5zZm9ybT0icm90YXRlKDE4MCAxNiAxNikiIGN4PSIxNiI+CiAgPGFuaW1hdGUgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGNhbGNNb2RlPSJzcGxpbmUiIHZhbHVlcz0iMDszOzA7MCIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGF0dHJpYnV0ZU5hbWU9InIiIGR1cj0iMXMiIGJlZ2luPSIwLjVzIi8+CiA8L2NpcmNsZT4KPC9zdmc+Cg==';
		me._loading_image__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="loading_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._loading_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loading_image.ggUpdatePosition=function (useTransition) {
		}
		me._image_popup.appendChild(me._loading_image);
		el=me._popup_image=document.createElement('div');
		els=me._popup_image__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._popup_image.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._popup_image.ggSubElement.setAttribute('alt', player._(me._popup_image.ggAltText));
			me._popup_image.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._popup_image.ggText_untranslated = img;
			me._popup_image.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._popup_image.ggSubElement.style.width = '0px';
			me._popup_image.ggSubElement.style.height = '0px';
			me._popup_image.ggSubElement.src='';
			me._popup_image.ggSubElement.src=me._popup_image.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._popup_image.ggText != player._(me._popup_image.ggText_untranslated)) {
				me._popup_image.ggText = player._(me._popup_image.ggText_untranslated);
				me._popup_image.ggUpdateImage()
			}
		}
		el.ggText=el.ggText_untranslated=basePath + "";
		el.ggUpdateImage();
		els['ondragstart']=function() { return false; };
		el.ggUpdateText();
		el.ggId="popup_image";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0%;';
		hs+='cursor : pointer;';
		hs+='height : calc(100% - 40px);';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._popup_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._popup_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_image_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._popup_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._popup_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._popup_image.style.transition='';
				if (me._popup_image.ggCurrentLogicStateVisible == 0) {
					me._popup_image.style.visibility=(Number(me._popup_image.style.opacity)>0||!me._popup_image.style.opacity)?'inherit':'hidden';
					me._popup_image.ggSubElement.src=me._popup_image.ggText;
					me._popup_image.ggVisible=true;
				}
				else {
					me._popup_image.style.visibility="hidden";
					me._popup_image.ggSubElement.src='';
					me._popup_image.ggVisible=false;
				}
			}
		}
		me._popup_image.logicBlock_visible();
		me._popup_image.onclick=function (e) {
			player.setVariableValue('vis_image_popup', false);
		}
		me._popup_image.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._popup_image.clientWidth;
			var parentHeight = me._popup_image.clientHeight;
			var img = me._popup_image__img;
			var aspectRatioDiv = me._popup_image.clientWidth / me._popup_image.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			var currentWidth,currentHeight;
			if (aspectRatioDiv > aspectRatioImg) {
				currentHeight = parentHeight;
				currentWidth = Math.round(parentHeight * aspectRatioImg);
				img.style.width='';
				img.style.height=parentHeight + 'px';
			} else {
				currentWidth = parentWidth;
				currentHeight = Math.round(parentWidth / aspectRatioImg);
				img.style.width=parentWidth + 'px';
				img.style.height='';
			};
			if (!me._popup_image.ggScrollbars || currentWidth < me._popup_image.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._popup_image.scrollLeft=currentWidth / 2 - me._popup_image.clientWidth / 2;
			}
			if (!me._popup_image.ggScrollbars || currentHeight < me._popup_image.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._popup_image.scrollTop=currentHeight / 2 - me._popup_image.clientHeight / 2;
			}
		}
		me._image_popup.appendChild(me._popup_image);
		el=me._image_popup_title=document.createElement('div');
		els=me._image_popup_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="image_popup_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text plex_sans_medium";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 30px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 22px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._image_popup_title.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._image_popup_title.ggUpdateText();
		el.appendChild(els);
		me._image_popup_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_popup_title.ggUpdatePosition=function (useTransition) {
		}
		me._image_popup.appendChild(me._image_popup_title);
		me.divSkin.appendChild(me._image_popup);
		el=me._popup_close=document.createElement('div');
		els=me._popup_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjE4cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjE4cHgiPgogPHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgwVjB6Ii8+CiA8cGF0aCBkPSJNMTkgNi40MUwxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgMTAuNTkgMTIgNSAxNy41OSA2LjQxIDE5IDEyIDEzLjQxIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDEyIDE5IDYuNDF6Ii8+Cjwvc3ZnPgo=';
		me._popup_close__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._popup_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDE4IDE4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHk9IjBweCIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE4ID'+
			'E4OyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDojZGZlMDM2O30mI3hkOwo8L3N0eWxlPgogPHBhdGggZD0iTTAsMGgxOHYxOEgwVjB6IiBjbGFzcz0ic3QwIi8+CiA8cGF0aCBkPSJNMTQuMiw0LjhsLTEuMS0xLjFMOSw3LjlMNC44LDMuOEwzLjgsNC44TDcuOSw5bC00LjIsNC4ybDEuMSwxLjFMOSwxMC4xbDQuMiw0LjJsMS4xLTEuMUwxMC4xLDlMMTQuMiw0Ljh6IiBjbGFzcz0ic3QxIi8+Cjwvc3ZnPgo=';
		me._popup_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="popup_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg svg_shadow";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._popup_close.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._popup_close.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_popup') == true)) && 
				((player.getVariableValue('resp_phone') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._popup_close.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._popup_close.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._popup_close.style.transition='';
				if (me._popup_close.ggCurrentLogicStateVisible == 0) {
					me._popup_close.style.visibility=(Number(me._popup_close.style.opacity)>0||!me._popup_close.style.opacity)?'inherit':'hidden';
					me._popup_close.ggVisible=true;
				}
				else {
					me._popup_close.style.visibility="hidden";
					me._popup_close.ggVisible=false;
				}
			}
		}
		me._popup_close.logicBlock_visible();
		me._popup_close.onclick=function (e) {
			player.setVariableValue('vis_url_popup', false);
			player.setVariableValue('vis_image_popup', false);
			player.setVariableValue('vis_video_file_popup', false);
			player.setVariableValue('vis_video_url_popup', false);
		}
		me._popup_close.onmouseenter=function (e) {
			me._popup_close__img.style.visibility='hidden';
			me._popup_close__imgo.style.visibility='inherit';
			me.elementMouseOver['popup_close']=true;
		}
		me._popup_close.onmouseleave=function (e) {
			me._popup_close__img.style.visibility='inherit';
			me._popup_close__imgo.style.visibility='hidden';
			me.elementMouseOver['popup_close']=false;
		}
		me._popup_close.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._popup_close);
		el=me._sounds_splashscreen=document.createElement('div');
		el.ggId="sounds_splashscreen";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 140px;';
		hs+='left : calc(50% - ((320px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((140px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 320px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._sounds_splashscreen.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._sounds_splashscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_sounds_splashscreen') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._sounds_splashscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._sounds_splashscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._sounds_splashscreen.style.transition='';
				if (me._sounds_splashscreen.ggCurrentLogicStateVisible == 0) {
					me._sounds_splashscreen.style.visibility=(Number(me._sounds_splashscreen.style.opacity)>0||!me._sounds_splashscreen.style.opacity)?'inherit':'hidden';
					me._sounds_splashscreen.ggVisible=true;
				}
				else {
					me._sounds_splashscreen.style.visibility="hidden";
					me._sounds_splashscreen.ggVisible=false;
				}
			}
		}
		me._sounds_splashscreen.logicBlock_visible();
		me._sounds_splashscreen.ggUpdatePosition=function (useTransition) {
		}
		el=me._sounds_splashscreen_bg=document.createElement('div');
		el.ggId="sounds_splashscreen_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.686275);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='backdrop-filter: blur(5px); -webkit-backdrop-filter: blur(5px);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._sounds_splashscreen_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._sounds_splashscreen_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._sounds_off=document.createElement('div');
		els=me._sounds_off__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjE4cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNCAyNCIgaGVpZ2h0PSIxOHB4Ij4KIDxnPgogIDxyZWN0IGZpbGw9Im5vbmUiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIvPgogPC9nPgogPGc+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0xNi4yNSwxMy40MkMxNi40LDEyLjk3LDE2LjUsMTIuNSwxNi41LDEyYzAtMS43Ny0xLjAyLTMuMjktMi41LTQuMDN2My4yTDE2LjI1LDEzLjQyeiIvPgogICA8cGF0aCBkPSJNMTksMTJjMCwxLjIxLTAuMzEsMi4zNC'+
			'0wLjg1LDMuMzJsMS40NiwxLjQ2QzIwLjQ4LDE1LjM5LDIxLDEzLjc2LDIxLDEyYzAtMy44My0yLjQtNy4xMS01Ljc4LTguNCBDMTQuNjMsMy4zNywxNCwzLjgzLDE0LDQuNDZ2MC4xOWMwLDAuMzgsMC4yNSwwLjcxLDAuNjEsMC44NUMxNy4xOCw2LjU0LDE5LDkuMDYsMTksMTJ6Ii8+CiAgIDxwYXRoIGQ9Ik0yLjEsMy41MUwyLjEsMy41MWMtMC4zOSwwLjM5LTAuMzksMS4wMiwwLDEuNDFMNi4xNyw5SDRjLTAuNTUsMC0xLDAuNDUtMSwxdjRjMCwwLjU1LDAuNDUsMSwxLDFoM2wzLjI5LDMuMjkgYzAuNjMsMC42MywxLjcxLDAuMTgsMS43MS0wLjcxdi0yLjc2bDMuMzIsMy4zMmMtMC4yMywwLjEz'+
			'LTAuNDcsMC4yNC0wLjcxLDAuMzVjLTAuMzcsMC4xNi0wLjYsMC41Mi0wLjYsMC45MXYwIGMwLDAuNywwLjcsMS4yLDEuMzUsMC45NGMwLjUtMC4yLDAuOTktMC40NSwxLjQ0LTAuNzNsMi4yOCwyLjI4YzAuMzksMC4zOSwxLjAyLDAuMzksMS40MSwwbDAsMGMwLjM5LTAuMzksMC4zOS0xLjAyLDAtMS40MSBMMy41MSwzLjUxQzMuMTIsMy4xMiwyLjQ5LDMuMTIsMi4xLDMuNTF6Ii8+CiAgIDxwYXRoIGQ9Ik0xMiw5LjE3VjYuNDFjMC0wLjg5LTEuMDgtMS4zNC0xLjcxLTAuNzFMOS40MSw2LjU5TDEyLDkuMTd6Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._sounds_off__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._sounds_off__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDE4IDE4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHk9IjBweCIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE4ID'+
			'E4OyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7fQoJLnN0MXtmaWxsOiNkZmUwMzY7fQo8L3N0eWxlPgogPGc+CiAgPHJlY3Qgd2lkdGg9IjE4IiBjbGFzcz0ic3QwIiBoZWlnaHQ9IjE4Ii8+CiA8L2c+CiA8Zz4KICA8Zz4KICAgPHBhdGggZD0iTTEyLjIsMTAuMWMwLjEtMC4zLDAuMi0wLjcsMC4yLTEuMWMwLTEuMy0wLjgtMi41LTEuOS0zdjIuNEwxMi4yLDEwLjF6IiBjbGFzcz0ic3QxIi8+CiAgIDxwYXRoIGQ9Ik0xNC4yLDljMCwwLjktMC4yLDEuOC0wLjYsMi41bDEuMSwxLjFjMC43LTEsMS0yLjMsMS0zLjZjMC0yLjktMS44LTUuMy00LjMtNi4zYy0wLjQt'+
			'MC4yLTAuOSwwLjItMC45LDAuNiAgICB2MC4xYzAsMC4zLDAuMiwwLjUsMC41LDAuNkMxMi45LDQuOSwxNC4yLDYuOCwxNC4yLDl6IiBjbGFzcz0ic3QxIi8+CiAgIDxwYXRoIGQ9Ik0xLjYsMi42TDEuNiwyLjZjLTAuMywwLjMtMC4zLDAuOCwwLDEuMWwzLjEsMy4xSDNjLTAuNCwwLTAuOCwwLjMtMC44LDAuOHYzYzAsMC40LDAuMywwLjgsMC44LDAuOGgyLjIgICAgbDIuNSwyLjVDOC4yLDE0LjIsOSwxMy45LDksMTMuMnYtMi4xbDIuNSwyLjVjLTAuMiwwLjEtMC40LDAuMi0wLjUsMC4zYy0wLjMsMC4xLTAuNCwwLjQtMC40LDAuN2wwLDBjMCwwLjUsMC41LDAuOSwxLDAuNyAgICBjMC40LTAuMS'+
			'wwLjctMC4zLDEuMS0wLjVsMS43LDEuN2MwLjMsMC4zLDAuOCwwLjMsMS4xLDBsMCwwYzAuMy0wLjMsMC4zLTAuOCwwLTEuMUwyLjYsMi42QzIuMywyLjMsMS45LDIuMywxLjYsMi42eiIgY2xhc3M9InN0MSIvPgogICA8cGF0aCBkPSJNOSw2LjlWNC44YzAtMC43LTAuOC0xLTEuMy0wLjVMNy4xLDQuOUw5LDYuOXoiIGNsYXNzPSJzdDEiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._sounds_off__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="sounds_off";
		el.ggDx=65;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg svg_shadow";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : calc(50% - ((80px + 0px) / 2) + 65px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._sounds_off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._sounds_off.onclick=function (e) {
			player.mute("_all");
			player.setVariableValue('sounds_splashscreen_accepted', true);
			player.setVariableValue('toggle_audio', false);
		}
		me._sounds_off.onmouseenter=function (e) {
			me._sounds_off__img.style.visibility='hidden';
			me._sounds_off__imgo.style.visibility='inherit';
			me.elementMouseOver['sounds_off']=true;
		}
		me._sounds_off.onmouseleave=function (e) {
			me._sounds_off__img.style.visibility='inherit';
			me._sounds_off__imgo.style.visibility='hidden';
			me.elementMouseOver['sounds_off']=false;
		}
		me._sounds_off.ggUpdatePosition=function (useTransition) {
		}
		me._sounds_splashscreen_bg.appendChild(me._sounds_off);
		el=me._sounds_on=document.createElement('div');
		els=me._sounds_on__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjE4cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNCAyNCIgaGVpZ2h0PSIxOHB4Ij4KIDxnPgogIDxyZWN0IGZpbGw9Im5vbmUiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIvPgogPC9nPgogPGc+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0zLDEwdjRjMCwwLjU1LDAuNDUsMSwxLDFoM2wzLjI5LDMuMjljMC42MywwLjYzLDEuNzEsMC4xOCwxLjcxLTAuNzFWNi40MWMwLTAuODktMS4wOC0xLjM0LTEuNzEtMC43MUw3LDlINCBDMy40NSw5LDMsOS40NSwzLD'+
			'EweiBNMTYuNSwxMmMwLTEuNzctMS4wMi0zLjI5LTIuNS00LjAzdjguMDVDMTUuNDgsMTUuMjksMTYuNSwxMy43NywxNi41LDEyeiBNMTQsNC40NXYwLjIgYzAsMC4zOCwwLjI1LDAuNzEsMC42LDAuODVDMTcuMTgsNi41MywxOSw5LjA2LDE5LDEycy0xLjgyLDUuNDctNC40LDYuNWMtMC4zNiwwLjE0LTAuNiwwLjQ3LTAuNiwwLjg1djAuMiBjMCwwLjYzLDAuNjMsMS4wNywxLjIxLDAuODVDMTguNiwxOS4xMSwyMSwxNS44NCwyMSwxMnMtMi40LTcuMTEtNS43OS04LjRDMTQuNjMsMy4zNywxNCwzLjgyLDE0LDQuNDV6Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._sounds_on__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._sounds_on__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDE4IDE4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHk9IjBweCIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE4ID'+
			'E4OyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7fQoJLnN0MXtmaWxsOiNkZmUwMzY7fQo8L3N0eWxlPgogPGc+CiAgPHJlY3Qgd2lkdGg9IjE4IiBjbGFzcz0ic3QwIiBoZWlnaHQ9IjE4Ii8+CiA8L2c+CiA8Zz4KICA8Zz4KICAgPHBhdGggZD0iTTIuMiw3LjV2M2MwLDAuNCwwLjMsMC44LDAuOCwwLjhoMi4ybDIuNSwyLjVDOC4yLDE0LjIsOSwxMy45LDksMTMuMlY0LjhjMC0wLjctMC44LTEtMS4zLTAuNUw1LjIsNi44SDMgICAgQzIuNiw2LjgsMi4yLDcuMSwyLjIsNy41eiBNMTIuNCw5YzAtMS4zLTAuOC0yLjUtMS45LTN2NkMxMS42LDExLjUsMTIuNCwxMC4z'+
			'LDEyLjQsOXogTTEwLjUsMy4zdjAuMWMwLDAuMywwLjIsMC41LDAuNSwwLjYgICAgYzEuOSwwLjgsMy4zLDIuNywzLjMsNC45cy0xLjQsNC4xLTMuMyw0LjljLTAuMywwLjEtMC41LDAuNC0wLjUsMC42djAuMWMwLDAuNSwwLjUsMC44LDAuOSwwLjZjMi41LTEsNC4zLTMuNCw0LjMtNi4zICAgIFMxNCwzLjcsMTEuNCwyLjdDMTEsMi41LDEwLjUsMi45LDEwLjUsMy4zeiIgY2xhc3M9InN0MSIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._sounds_on__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="sounds_on";
		el.ggDx=-65;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg svg_shadow";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : calc(50% - ((80px + 0px) / 2) - 65px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._sounds_on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._sounds_on.onclick=function (e) {
			player.startAutoplayMedia();
			player.setVariableValue('sounds_splashscreen_accepted', true);
		}
		me._sounds_on.onmouseenter=function (e) {
			me._sounds_on__img.style.visibility='hidden';
			me._sounds_on__imgo.style.visibility='inherit';
			me.elementMouseOver['sounds_on']=true;
		}
		me._sounds_on.onmouseleave=function (e) {
			me._sounds_on__img.style.visibility='inherit';
			me._sounds_on__imgo.style.visibility='hidden';
			me.elementMouseOver['sounds_on']=false;
		}
		me._sounds_on.ggUpdatePosition=function (useTransition) {
		}
		me._sounds_splashscreen_bg.appendChild(me._sounds_on);
		me._sounds_splashscreen.appendChild(me._sounds_splashscreen_bg);
		me.divSkin.appendChild(me._sounds_splashscreen);
		el=me._screentint_phone=document.createElement('div');
		el.ggId="screentint_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='backdrop-filter: blur(5px); -webkit-backdrop-filter: blur(5px);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._screentint_phone.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._screentint_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_thumbs') == true)) || 
				((player.getVariableValue('vis_phone_info') == true)) || 
				((player.getVariableValue('vis_phone_floorplan') == true)) || 
				((player.getVariableValue('vis_phone_map') == true)) || 
				((player.getVariableValue('vis_phone_image') == true)) || 
				((player.getVariableValue('vis_phone_pdf') == true)) || 
				((player.getVariableValue('vis_phone_youtube') == true)) || 
				((player.getVariableValue('vis_phone_vimeo') == true)) || 
				((player.getVariableValue('vis_phone_video_file') == true)) || 
				((player.getVariableValue('vis_phone_video_url') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._screentint_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._screentint_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._screentint_phone.style.transition='';
				if (me._screentint_phone.ggCurrentLogicStateVisible == 0) {
					me._screentint_phone.style.visibility=(Number(me._screentint_phone.style.opacity)>0||!me._screentint_phone.style.opacity)?'inherit':'hidden';
					me._screentint_phone.ggVisible=true;
				}
				else {
					me._screentint_phone.style.visibility="hidden";
					me._screentint_phone.ggVisible=false;
				}
			}
		}
		me._screentint_phone.logicBlock_visible();
		me._screentint_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._safe_area_phone=document.createElement('div');
		el.ggId="safe_area_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : calc(100% - env(safe-area-inset-top) - env(safe-area-inset-bottom));';
		hs+='left : env(safe-area-inset-left);';
		hs+='position : absolute;';
		hs+='top : env(safe-area-inset-top);';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - env(safe-area-inset-left) - env(safe-area-inset-right));';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._safe_area_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._safe_area_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._close_popup_phone=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="close_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 80px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._close_popup_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._close_popup_phone.onclick=function (e) {
			player.setVariableValue('vis_phone_thumbs', false);
			player.setVariableValue('vis_phone_nodes', false);
			player.setVariableValue('vis_phone_info', false);
			player.setVariableValue('vis_phone_floorplan', false);
			player.setVariableValue('vis_phone_map', false);
			player.setVariableValue('vis_phone_image', false);
			player.setVariableValue('vis_phone_pdf', false);
			player.setVariableValue('vis_phone_youtube', false);
			player.setVariableValue('vis_phone_vimeo', false);
			player.setVariableValue('vis_phone_video_file', false);
			player.setVariableValue('vis_phone_video_url', false);
		}
		me._close_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_close_popup_phone=document.createElement('div');
		els=me._btn_close_popup_phone__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjE4cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjE4cHgiPgogPHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgwVjB6Ii8+CiA8cGF0aCBkPSJNMTkgNi40MUwxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgMTAuNTkgMTIgNSAxNy41OSA2LjQxIDE5IDEyIDEzLjQxIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDEyIDE5IDYuNDF6Ii8+Cjwvc3ZnPgo=';
		me._btn_close_popup_phone__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._btn_close_popup_phone__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDE4IDE4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHk9IjBweCIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE4ID'+
			'E4OyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDojZGZlMDM2O30mI3hkOwo8L3N0eWxlPgogPHBhdGggZD0iTTAsMGgxOHYxOEgwVjB6IiBjbGFzcz0ic3QwIi8+CiA8cGF0aCBkPSJNMTQuMiw0LjhsLTEuMS0xLjFMOSw3LjlMNC44LDMuOEwzLjgsNC44TDcuOSw5bC00LjIsNC4ybDEuMSwxLjFMOSwxMC4xbDQuMiw0LjJsMS4xLTEuMUwxMC4xLDlMMTQuMiw0Ljh6IiBjbGFzcz0ic3QxIi8+Cjwvc3ZnPgo=';
		me._btn_close_popup_phone__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="btn_close_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg svg_shadow";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : 20px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_close_popup_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_close_popup_phone.onmouseenter=function (e) {
			me._btn_close_popup_phone__img.style.visibility='hidden';
			me._btn_close_popup_phone__imgo.style.visibility='inherit';
			me.elementMouseOver['btn_close_popup_phone']=true;
		}
		me._btn_close_popup_phone.onmouseleave=function (e) {
			me._btn_close_popup_phone__img.style.visibility='inherit';
			me._btn_close_popup_phone__imgo.style.visibility='hidden';
			me.elementMouseOver['btn_close_popup_phone']=false;
		}
		me._btn_close_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		me._close_popup_phone.appendChild(me._btn_close_popup_phone);
		me._safe_area_phone.appendChild(me._close_popup_phone);
		el=me._back_to_categories_phone=document.createElement('div');
		els=me._back_to_categories_phone__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjE4cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNCAyNCIgaGVpZ2h0PSIxOHB4Ij4KIDxnPgogIDxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wLDBoMjR2MjRIMFYweiIvPgogPC9nPgogPGc+CiAgPGc+CiAgIDxnPgogICAgPHBhdGggZD0iTTE5LDExSDcuODNsNC44OC00Ljg4YzAuMzktMC4zOSwwLjM5LTEuMDMsMC0xLjQybDAsMGMtMC4zOS0wLjM5LTEuMDItMC4zOS0xLjQxLDBsLTYuNTksNi41OSBjLTAuMzksMC4zOS0wLjM5LDEuMDIsMCwxLj'+
			'QxbDYuNTksNi41OWMwLjM5LDAuMzksMS4wMiwwLjM5LDEuNDEsMGwwLDBjMC4zOS0wLjM5LDAuMzktMS4wMiwwLTEuNDFMNy44MywxM0gxOSBjMC41NSwwLDEtMC40NSwxLTFsMCwwQzIwLDExLjQ1LDE5LjU1LDExLDE5LDExeiIvPgogICA8L2c+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._back_to_categories_phone__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._back_to_categories_phone__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDE4IDE4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHk9IjBweCIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE4ID'+
			'E4OyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDojZGZlMDM2O30mI3hkOwo8L3N0eWxlPgogPGc+CiAgPHBhdGggZD0iTTAsMGgxOHYxOEgwVjB6IiBjbGFzcz0ic3QwIi8+CiA8L2c+CiA8Zz4KICA8Zz4KICAgPGc+CiAgICA8cGF0aCBkPSJNMTQuMiw4LjJINS45bDMuNy0zLjdjMC4zLTAuMywwLjMtMC44LDAtMS4xbDAsMGMtMC4zLTAuMy0wLjgtMC4zLTEuMSwwTDMuNSw4LjVjLTAuMywwLjMtMC4zLDAuOCwwLDEuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2w0LjksNC45YzAuMywwLjMsMC44LDAuMywxLjEs'+
			'MGwwLDBjMC4zLTAuMywwLjMtMC44LDAtMS4xTDUuOSw5LjhoOC40QzE0LjcsOS44LDE1LDkuNCwxNSw5bDAsMEMxNSw4LjYsMTQuNyw4LjIsMTQuMiw4LjJ6IiBjbGFzcz0ic3QxIi8+CiAgIDwvZz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._back_to_categories_phone__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="back_to_categories_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg svg_shadow";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : 20px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._back_to_categories_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._back_to_categories_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_nodes') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._back_to_categories_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._back_to_categories_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._back_to_categories_phone.style.transition='';
				if (me._back_to_categories_phone.ggCurrentLogicStateVisible == 0) {
					me._back_to_categories_phone.style.visibility=(Number(me._back_to_categories_phone.style.opacity)>0||!me._back_to_categories_phone.style.opacity)?'inherit':'hidden';
					me._back_to_categories_phone.ggVisible=true;
				}
				else {
					me._back_to_categories_phone.style.visibility="hidden";
					me._back_to_categories_phone.ggVisible=false;
				}
			}
		}
		me._back_to_categories_phone.logicBlock_visible();
		me._back_to_categories_phone.onclick=function (e) {
			player.setVariableValue('vis_phone_nodes', false);
		}
		me._back_to_categories_phone.onmouseenter=function (e) {
			me._back_to_categories_phone__img.style.visibility='hidden';
			me._back_to_categories_phone__imgo.style.visibility='inherit';
			me.elementMouseOver['back_to_categories_phone']=true;
		}
		me._back_to_categories_phone.onmouseleave=function (e) {
			me._back_to_categories_phone__img.style.visibility='inherit';
			me._back_to_categories_phone__imgo.style.visibility='hidden';
			me.elementMouseOver['back_to_categories_phone']=false;
		}
		me._back_to_categories_phone.ggUpdatePosition=function (useTransition) {
		}
		me._safe_area_phone.appendChild(me._back_to_categories_phone);
		el=me._nodes_scroller_phone=document.createElement('div');
		els=me._nodes_scroller_phone__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 99px;';
		hs+='left : 50%;';
		hs+='margin-left : -74.5px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 149px;';
		hs+="";
		els.setAttribute('style',hs);
		me._nodes_scroller_phone.ggScrollByX = function(diffX) {
			if(!me._nodes_scroller_phone.ggHorScrollVisible || diffX == 0 || me._nodes_scroller_phone.ggHPercentVisible >= 1.0) return;
			me._nodes_scroller_phone.ggScrollPosX = (me._nodes_scroller_phone__horScrollFg.offsetLeft + diffX);
			me._nodes_scroller_phone.ggScrollPosX = Math.max(me._nodes_scroller_phone.ggScrollPosX, 0);
			me._nodes_scroller_phone.ggScrollPosX = Math.min(me._nodes_scroller_phone.ggScrollPosX, me._nodes_scroller_phone__horScrollBg.offsetWidth - me._nodes_scroller_phone__horScrollFg.offsetWidth);
			me._nodes_scroller_phone__horScrollFg.style.left = me._nodes_scroller_phone.ggScrollPosX + 'px';
			let percentScrolled = me._nodes_scroller_phone.ggScrollPosX / (me._nodes_scroller_phone__horScrollBg.offsetWidth - me._nodes_scroller_phone__horScrollFg.offsetWidth);
			me._nodes_scroller_phone__content.style.left = -(Math.round((me._nodes_scroller_phone.ggContentWidth * (1.0 - me._nodes_scroller_phone.ggHPercentVisible)) * percentScrolled)) + me._nodes_scroller_phone.ggContentLeftOffset + 'px';
			me._nodes_scroller_phone.ggScrollPosXPercent = (me._nodes_scroller_phone__horScrollFg.offsetLeft / me._nodes_scroller_phone__horScrollBg.offsetWidth);
		}
		me._nodes_scroller_phone.ggScrollByXSmooth = function(diffX) {
			if(!me._nodes_scroller_phone.ggHorScrollVisible || diffX == 0 || me._nodes_scroller_phone.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._nodes_scroller_phone.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._nodes_scroller_phone.ggScrollPosX >= me._nodes_scroller_phone__horScrollBg.offsetWidth - me._nodes_scroller_phone__horScrollFg.offsetWidth)) {
					me._nodes_scroller_phone.ggScrollPosX = Math.min(me._nodes_scroller_phone.ggScrollPosX, me._nodes_scroller_phone__horScrollBg.offsetWidth - me._nodes_scroller_phone__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._nodes_scroller_phone.ggScrollPosX <= 0)) {
					me._nodes_scroller_phone.ggScrollPosX = Math.max(me._nodes_scroller_phone.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._nodes_scroller_phone__horScrollFg.style.left = me._nodes_scroller_phone.ggScrollPosX + 'px';
			let percentScrolled = me._nodes_scroller_phone.ggScrollPosX / (me._nodes_scroller_phone__horScrollBg.offsetWidth - me._nodes_scroller_phone__horScrollFg.offsetWidth);
			me._nodes_scroller_phone__content.style.left = -(Math.round((me._nodes_scroller_phone.ggContentWidth * (1.0 - me._nodes_scroller_phone.ggHPercentVisible)) * percentScrolled)) + me._nodes_scroller_phone.ggContentLeftOffset + 'px';
			me._nodes_scroller_phone.ggScrollPosXPercent = (me._nodes_scroller_phone__horScrollFg.offsetLeft / me._nodes_scroller_phone__horScrollBg.offsetWidth);
			}, 10);
		}
		me._nodes_scroller_phone.ggScrollByY = function(diffY) {
			if(!me._nodes_scroller_phone.ggVertScrollVisible || diffY == 0 || me._nodes_scroller_phone.ggVPercentVisible >= 1.0) return;
			me._nodes_scroller_phone.ggScrollPosY = (me._nodes_scroller_phone__vertScrollFg.offsetTop + diffY);
			me._nodes_scroller_phone.ggScrollPosY = Math.max(me._nodes_scroller_phone.ggScrollPosY, 0);
			me._nodes_scroller_phone.ggScrollPosY = Math.min(me._nodes_scroller_phone.ggScrollPosY, me._nodes_scroller_phone__vertScrollBg.offsetHeight - me._nodes_scroller_phone__vertScrollFg.offsetHeight);
			me._nodes_scroller_phone__vertScrollFg.style.top = me._nodes_scroller_phone.ggScrollPosY + 'px';
			let percentScrolled = me._nodes_scroller_phone.ggScrollPosY / (me._nodes_scroller_phone__vertScrollBg.offsetHeight - me._nodes_scroller_phone__vertScrollFg.offsetHeight);
			me._nodes_scroller_phone__content.style.top = -(Math.round((me._nodes_scroller_phone.ggContentHeight * (1.0 - me._nodes_scroller_phone.ggVPercentVisible)) * percentScrolled)) + me._nodes_scroller_phone.ggContentTopOffset + 'px';
			me._nodes_scroller_phone.ggScrollPosYPercent = (me._nodes_scroller_phone__vertScrollFg.offsetTop / me._nodes_scroller_phone__vertScrollBg.offsetHeight);
		}
		me._nodes_scroller_phone.ggScrollByYSmooth = function(diffY) {
			if(!me._nodes_scroller_phone.ggVertScrollVisible || diffY == 0 || me._nodes_scroller_phone.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._nodes_scroller_phone.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._nodes_scroller_phone.ggScrollPosY >= me._nodes_scroller_phone__vertScrollBg.offsetHeight - me._nodes_scroller_phone__vertScrollFg.offsetHeight)) {
					me._nodes_scroller_phone.ggScrollPosY = Math.min(me._nodes_scroller_phone.ggScrollPosY, me._nodes_scroller_phone__vertScrollBg.offsetHeight - me._nodes_scroller_phone__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._nodes_scroller_phone.ggScrollPosY <= 0)) {
					me._nodes_scroller_phone.ggScrollPosY = Math.max(me._nodes_scroller_phone.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._nodes_scroller_phone__vertScrollFg.style.top = me._nodes_scroller_phone.ggScrollPosY + 'px';
			let percentScrolled = me._nodes_scroller_phone.ggScrollPosY / (me._nodes_scroller_phone__vertScrollBg.offsetHeight - me._nodes_scroller_phone__vertScrollFg.offsetHeight);
			me._nodes_scroller_phone__content.style.top = -(Math.round((me._nodes_scroller_phone.ggContentHeight * (1.0 - me._nodes_scroller_phone.ggVPercentVisible)) * percentScrolled)) + me._nodes_scroller_phone.ggContentTopOffset + 'px';
			me._nodes_scroller_phone.ggScrollPosYPercent = (me._nodes_scroller_phone__vertScrollFg.offsetTop / me._nodes_scroller_phone__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._nodes_scroller_phone.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._nodes_scroller_phone.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._nodes_scroller_phone.ggHPercentVisible);
					me._nodes_scroller_phone.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._nodes_scroller_phone.clientWidth - (me._nodes_scroller_phone.ggVertScrollVisible ? 8 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._nodes_scroller_phone.clientWidth - (me._nodes_scroller_phone.ggVertScrollVisible ? 8 : 0))) * me._nodes_scroller_phone.ggHPercentVisible);
					me._nodes_scroller_phone.ggScrollByXSmooth(diffX);
				}
			}
			if (me._nodes_scroller_phone.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._nodes_scroller_phone.ggVPercentVisible);
					me._nodes_scroller_phone.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._nodes_scroller_phone.clientHeight - (me._nodes_scroller_phone.ggHorScrollVisible ? 8 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._nodes_scroller_phone.clientHeight - (me._nodes_scroller_phone.ggHorScrollVisible ? 8 : 0))) * me._nodes_scroller_phone.ggVPercentVisible);
					me._nodes_scroller_phone.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._nodes_scroller_phone__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._nodes_scroller_phone.ggDragInertiaX *= 0.96;
				me._nodes_scroller_phone.ggDragInertiaY *= 0.96;
				me._nodes_scroller_phone.ggScrollByX(me._nodes_scroller_phone.ggDragInertiaX);
				me._nodes_scroller_phone.ggScrollByY(me._nodes_scroller_phone.ggDragInertiaY);
				if (Math.abs(me._nodes_scroller_phone.ggDragInertiaX) < 1.0 && Math.abs(me._nodes_scroller_phone.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 10);
			me._nodes_scroller_phone__content.onmouseup = null;
			me._nodes_scroller_phone__content.onmousemove = null;
			me._nodes_scroller_phone__content.ontouchend = null;
			me._nodes_scroller_phone__content.ontouchmove = null;
			me._nodes_scroller_phone__content.onpointerup = null;
			me._nodes_scroller_phone__content.onpointermove = null;
			setTimeout(function() { me._nodes_scroller_phone.ggIsDragging = false; }, 100);
		}
		me._nodes_scroller_phone__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._nodes_scroller_phone.ggDragStartX) > 10 || Math.abs(eventY - me._nodes_scroller_phone.ggDragStartY) > 10) me._nodes_scroller_phone.ggIsDragging = true;
			var diffX = (eventX - me._nodes_scroller_phone.ggDragLastX) * me._nodes_scroller_phone.ggHPercentVisible;
			var diffY = (eventY - me._nodes_scroller_phone.ggDragLastY) * me._nodes_scroller_phone.ggVPercentVisible;
			me._nodes_scroller_phone.ggDragInertiaX = -diffX;
			me._nodes_scroller_phone.ggDragInertiaY = -diffY;
			me._nodes_scroller_phone.ggDragLastX = eventX;
			me._nodes_scroller_phone.ggDragLastY = eventY;
			me._nodes_scroller_phone.ggScrollByX(-diffX);
			me._nodes_scroller_phone.ggScrollByY(-diffY);
		}
		me._nodes_scroller_phone__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._nodes_scroller_phone.ggDragLastX = me._nodes_scroller_phone.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._nodes_scroller_phone.ggDragLastY = me._nodes_scroller_phone.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._nodes_scroller_phone__content.onmouseup = me._nodes_scroller_phone__content.mousetouchend;
			me._nodes_scroller_phone__content.ontouchend = me._nodes_scroller_phone__content.mousetouchend;
			me._nodes_scroller_phone__content.onmousemove = me._nodes_scroller_phone__content.mousetouchmove;
			me._nodes_scroller_phone__content.ontouchmove = me._nodes_scroller_phone__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._nodes_scroller_phone__content.onpointerup = me._nodes_scroller_phone__content.ontouchend;
				me._nodes_scroller_phone__content.onpointermove = me._nodes_scroller_phone__content.ontouchmove;
			}
		}
		els.onmousedown = me._nodes_scroller_phone__content.mousetouchstart;
		els.ontouchstart = me._nodes_scroller_phone__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._nodes_scroller_phone__content.mousetouchstart;
		}
		elVertScrollBg = me._nodes_scroller_phone__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 8px; height: 717px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._nodes_scroller_phone__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 8px; height: 717px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._nodes_scroller_phone.ggScrollPosY = 0;
		me._nodes_scroller_phone.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._nodes_scroller_phone.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._nodes_scroller_phone.ggDragInertiaY *= 0.96;
					me._nodes_scroller_phone.ggScrollByY(me._nodes_scroller_phone.ggDragInertiaY);
					if (Math.abs(me._nodes_scroller_phone.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._nodes_scroller_phone.ggDragLastY;
				me._nodes_scroller_phone.ggDragInertiaY = diffY;
				me._nodes_scroller_phone.ggDragLastY = e.clientY;
				me._nodes_scroller_phone.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._nodes_scroller_phone.ggDragLastY = t ? t[0].clientY : e.clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._nodes_scroller_phone.ggDragInertiaY *= 0.96;
					me._nodes_scroller_phone.ggScrollByY(me._nodes_scroller_phone.ggDragInertiaY);
					if (Math.abs(me._nodes_scroller_phone.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me._nodes_scroller_phone.ggDragLastY;
				me._nodes_scroller_phone.ggDragInertiaY = diffY;
				me._nodes_scroller_phone.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._nodes_scroller_phone.ggScrollByY(diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._nodes_scroller_phone.ggScrollHeight;
			if (e.offsetY < me._nodes_scroller_phone.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._nodes_scroller_phone.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._nodes_scroller_phone__vertScrollBg.getBoundingClientRect();
			var diffY = me._nodes_scroller_phone.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._nodes_scroller_phone.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._nodes_scroller_phone.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._nodes_scroller_phone.ggScrollByYSmooth(30 * me._nodes_scroller_phone.ggVPercentVisible * wheelDelta);
		});
		elCornerBg = me._nodes_scroller_phone__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 8px; height: 8px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="nodes_scroller_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : calc(100% - 105px);';
		hs+='left : 25px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._nodes_scroller_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._nodes_scroller_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_nodes') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('vis_phone_thumbs') == true)) && 
				((player.getVariableValue('has_categories') == false))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._nodes_scroller_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._nodes_scroller_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._nodes_scroller_phone.style.transition='';
				if (me._nodes_scroller_phone.ggCurrentLogicStateVisible == 0) {
					me._nodes_scroller_phone.style.visibility=(Number(me._nodes_scroller_phone.style.opacity)>0||!me._nodes_scroller_phone.style.opacity)?'inherit':'hidden';
					me._nodes_scroller_phone.ggVisible=true;
				}
				else if (me._nodes_scroller_phone.ggCurrentLogicStateVisible == 1) {
					me._nodes_scroller_phone.style.visibility=(Number(me._nodes_scroller_phone.style.opacity)>0||!me._nodes_scroller_phone.style.opacity)?'inherit':'hidden';
					me._nodes_scroller_phone.ggVisible=true;
				}
				else {
					me._nodes_scroller_phone.style.visibility="hidden";
					me._nodes_scroller_phone.ggVisible=false;
				}
			}
		}
		me._nodes_scroller_phone.logicBlock_visible();
		me._nodes_scroller_phone.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				var containerWidth = offsetWidthWithScale;
				if (this.ggVertScrollVisible) containerWidth -= 8;
				if (contentWidth < containerWidth) {
					this.ggContent.style.left = '50%';
					this.ggContent.style.marginLeft = ((contentWidth/-2) - (this.ggVertScrollVisible ? (8/2) : 0)) + 'px';
				}
				else {
					this.ggContent.style.left = this.ggContentLeftOffset + 'px';
					this.ggContent.style.marginLeft = '0px';
				}
				this.ggContent.style.top = -(Math.round(me._nodes_scroller_phone.ggScrollPosY / me._nodes_scroller_phone.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if ((me._nodes_scroller_phone.ggHorScrollVisible && contentHeight > this.clientHeight - 8) || (!me._nodes_scroller_phone.ggHorScrollVisible && contentHeight > this.clientHeight)) {
					me._nodes_scroller_phone__vertScrollBg.style.visibility = 'inherit';
					me._nodes_scroller_phone__vertScrollFg.style.visibility = 'inherit';
					me._nodes_scroller_phone.ggVertScrollVisible = true;
				} else {
					me._nodes_scroller_phone__vertScrollBg.style.visibility = 'hidden';
					me._nodes_scroller_phone__vertScrollFg.style.visibility = 'hidden';
					me._nodes_scroller_phone.ggVertScrollVisible = false;
				}
				if(me._nodes_scroller_phone.ggVertScrollVisible) {
					me._nodes_scroller_phone.ggAvailableWidth = me._nodes_scroller_phone.clientWidth - 8;
					if (me._nodes_scroller_phone.ggHorScrollVisible) {
						me._nodes_scroller_phone.ggAvailableHeight = me._nodes_scroller_phone.clientHeight - 8;
						me._nodes_scroller_phone.ggAvailableHeightWithScale = me._nodes_scroller_phone.getBoundingClientRect().height - me._nodes_scroller_phone__vertScrollBg.getBoundingClientRect().width;
						me._nodes_scroller_phone__cornerBg.style.visibility = 'inherit';
					} else {
						me._nodes_scroller_phone.ggAvailableHeight = me._nodes_scroller_phone.clientHeight;
						me._nodes_scroller_phone.ggAvailableHeightWithScale = me._nodes_scroller_phone.getBoundingClientRect().height;
						me._nodes_scroller_phone__cornerBg.style.visibility = 'hidden';
					}
					me._nodes_scroller_phone__vertScrollBg.style.height = me._nodes_scroller_phone.ggAvailableHeight + 'px';
					me._nodes_scroller_phone.ggVPercentVisible = contentHeight != 0 ? me._nodes_scroller_phone.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._nodes_scroller_phone.ggVPercentVisible > 1.0) me._nodes_scroller_phone.ggVPercentVisible = 1.0;
					me._nodes_scroller_phone.ggScrollHeight =  Math.round(me._nodes_scroller_phone__vertScrollBg.offsetHeight * me._nodes_scroller_phone.ggVPercentVisible);
					me._nodes_scroller_phone__vertScrollFg.style.height = me._nodes_scroller_phone.ggScrollHeight + 'px';
					me._nodes_scroller_phone.ggScrollPosY = me._nodes_scroller_phone.ggScrollPosYPercent * me._nodes_scroller_phone.ggAvailableHeight;
					me._nodes_scroller_phone.ggScrollPosY = Math.min(me._nodes_scroller_phone.ggScrollPosY, me._nodes_scroller_phone__vertScrollBg.offsetHeight - me._nodes_scroller_phone__vertScrollFg.offsetHeight);
					me._nodes_scroller_phone__vertScrollFg.style.top = me._nodes_scroller_phone.ggScrollPosY + 'px';
					if (me._nodes_scroller_phone.ggVPercentVisible < 1.0) {
						let percentScrolled = me._nodes_scroller_phone.ggScrollPosY / (me._nodes_scroller_phone__vertScrollBg.offsetHeight - me._nodes_scroller_phone__vertScrollFg.offsetHeight);
						me._nodes_scroller_phone__content.style.top = -(Math.round((me._nodes_scroller_phone.ggContentHeight * (1.0 - me._nodes_scroller_phone.ggVPercentVisible)) * percentScrolled)) + me._nodes_scroller_phone.ggContentTopOffset + 'px';
					}
				} else {
					me._nodes_scroller_phone.ggAvailableWidth = me._nodes_scroller_phone.clientWidth;
					me._nodes_scroller_phone.ggScrollPosY = 0;
					me._nodes_scroller_phone.ggScrollPosYPercent = 0.0;
					me._nodes_scroller_phone__content.style.top = this.ggContentTopOffset + 'px';
					me._nodes_scroller_phone__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._nodes_scroller_phone.ggHorScrollVisible || vertScrollWasVisible != me._nodes_scroller_phone.ggVertScrollVisible) {
					skin.updateSize(me._nodes_scroller_phone);
					me._nodes_scroller_phone.ggUpdatePosition();
				}
			}
		}
		el=me._nodes_cloner_phone=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._nodes_cloner_phone;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 100;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 150;
		el.ggHeight = 100;
		el.ggSizeChanged = false;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me._nodes_cloner_phone.ggUpdating == true) return;
			me._nodes_cloner_phone.ggUpdating = true;
			var el=me._nodes_cloner_phone;
			var curNumCols = 0;
			var parentWidth = me._nodes_cloner_phone.parentNode.classList.contains('ggskin_subelement') ? (me._nodes_cloner_phone.parentNode.parentNode.classList.contains('ggskin_scrollarea') ? me._nodes_cloner_phone.parentNode.parentNode.ggAvailableWidth : me._nodes_cloner_phone.parentNode.parentNode.clientWidth) : me._nodes_cloner_phone.parentNode.clientWidth;
			if (parentWidth == 0) parentWidth = me._nodes_cloner_phone.parentNode.parentNode.clientWidth;
			curNumCols = Math.floor(((parentWidth - me._nodes_cloner_phone.offsetLeft) * me._nodes_cloner_phone.ggNumRepeat / 100.0) / me._nodes_cloner_phone.offsetWidth);
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && !el.ggSizeChanged && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._nodes_cloner_phone.ggUpdating = false;
				return;
			} else {
				el.ggSizeChanged = false;
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._nodes_cloner_phone.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			if (tourNodes.length == 0) {
				me._nodes_cloner_phone.ggUpdating = false;
				return;
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me._nodes_cloner_phone.getFilteredNodes(tourNodes, filter);
			me._nodes_cloner_phone.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me._nodes_cloner_phone.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._nodes_cloner_phone.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._nodes_cloner_phone.ggWidth) + 'px';
				parameter.width=me._nodes_cloner_phone.ggWidth + 'px';
				parameter.height=me._nodes_cloner_phone.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_nodes_cloner_phone_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me._nodes_cloner_phone.ggNodeCount = me._nodes_cloner_phone.ggNumFilterPassed;
			me._nodes_cloner_phone.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._nodes_cloner_phone.parentNode && me._nodes_cloner_phone.parentNode.classList.contains('ggskin_subelement') && me._nodes_cloner_phone.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._nodes_cloner_phone.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "_nope";
		el.ggId="nodes_cloner_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 100px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._nodes_cloner_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._nodes_cloner_phone.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._nodes_cloner_phone.childNodes.length; i++) {
				var child=me._nodes_cloner_phone.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._nodes_cloner_phone.ggUpdatePosition=function (useTransition) {
			me._nodes_cloner_phone.ggUpdate();
		}
		me._nodes_scroller_phone__content.appendChild(me._nodes_cloner_phone);
		me._safe_area_phone.appendChild(me._nodes_scroller_phone);
		el=me._categories_scroller_phone=document.createElement('div');
		els=me._categories_scroller_phone__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 99px;';
		hs+='left : 50%;';
		hs+='margin-left : -74.5px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 149px;';
		hs+="";
		els.setAttribute('style',hs);
		me._categories_scroller_phone.ggScrollByX = function(diffX) {
			if(!me._categories_scroller_phone.ggHorScrollVisible || diffX == 0 || me._categories_scroller_phone.ggHPercentVisible >= 1.0) return;
			me._categories_scroller_phone.ggScrollPosX = (me._categories_scroller_phone__horScrollFg.offsetLeft + diffX);
			me._categories_scroller_phone.ggScrollPosX = Math.max(me._categories_scroller_phone.ggScrollPosX, 0);
			me._categories_scroller_phone.ggScrollPosX = Math.min(me._categories_scroller_phone.ggScrollPosX, me._categories_scroller_phone__horScrollBg.offsetWidth - me._categories_scroller_phone__horScrollFg.offsetWidth);
			me._categories_scroller_phone__horScrollFg.style.left = me._categories_scroller_phone.ggScrollPosX + 'px';
			let percentScrolled = me._categories_scroller_phone.ggScrollPosX / (me._categories_scroller_phone__horScrollBg.offsetWidth - me._categories_scroller_phone__horScrollFg.offsetWidth);
			me._categories_scroller_phone__content.style.left = -(Math.round((me._categories_scroller_phone.ggContentWidth * (1.0 - me._categories_scroller_phone.ggHPercentVisible)) * percentScrolled)) + me._categories_scroller_phone.ggContentLeftOffset + 'px';
			me._categories_scroller_phone.ggScrollPosXPercent = (me._categories_scroller_phone__horScrollFg.offsetLeft / me._categories_scroller_phone__horScrollBg.offsetWidth);
		}
		me._categories_scroller_phone.ggScrollByXSmooth = function(diffX) {
			if(!me._categories_scroller_phone.ggHorScrollVisible || diffX == 0 || me._categories_scroller_phone.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._categories_scroller_phone.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._categories_scroller_phone.ggScrollPosX >= me._categories_scroller_phone__horScrollBg.offsetWidth - me._categories_scroller_phone__horScrollFg.offsetWidth)) {
					me._categories_scroller_phone.ggScrollPosX = Math.min(me._categories_scroller_phone.ggScrollPosX, me._categories_scroller_phone__horScrollBg.offsetWidth - me._categories_scroller_phone__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._categories_scroller_phone.ggScrollPosX <= 0)) {
					me._categories_scroller_phone.ggScrollPosX = Math.max(me._categories_scroller_phone.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._categories_scroller_phone__horScrollFg.style.left = me._categories_scroller_phone.ggScrollPosX + 'px';
			let percentScrolled = me._categories_scroller_phone.ggScrollPosX / (me._categories_scroller_phone__horScrollBg.offsetWidth - me._categories_scroller_phone__horScrollFg.offsetWidth);
			me._categories_scroller_phone__content.style.left = -(Math.round((me._categories_scroller_phone.ggContentWidth * (1.0 - me._categories_scroller_phone.ggHPercentVisible)) * percentScrolled)) + me._categories_scroller_phone.ggContentLeftOffset + 'px';
			me._categories_scroller_phone.ggScrollPosXPercent = (me._categories_scroller_phone__horScrollFg.offsetLeft / me._categories_scroller_phone__horScrollBg.offsetWidth);
			}, 10);
		}
		me._categories_scroller_phone.ggScrollByY = function(diffY) {
			if(!me._categories_scroller_phone.ggVertScrollVisible || diffY == 0 || me._categories_scroller_phone.ggVPercentVisible >= 1.0) return;
			me._categories_scroller_phone.ggScrollPosY = (me._categories_scroller_phone__vertScrollFg.offsetTop + diffY);
			me._categories_scroller_phone.ggScrollPosY = Math.max(me._categories_scroller_phone.ggScrollPosY, 0);
			me._categories_scroller_phone.ggScrollPosY = Math.min(me._categories_scroller_phone.ggScrollPosY, me._categories_scroller_phone__vertScrollBg.offsetHeight - me._categories_scroller_phone__vertScrollFg.offsetHeight);
			me._categories_scroller_phone__vertScrollFg.style.top = me._categories_scroller_phone.ggScrollPosY + 'px';
			let percentScrolled = me._categories_scroller_phone.ggScrollPosY / (me._categories_scroller_phone__vertScrollBg.offsetHeight - me._categories_scroller_phone__vertScrollFg.offsetHeight);
			me._categories_scroller_phone__content.style.top = -(Math.round((me._categories_scroller_phone.ggContentHeight * (1.0 - me._categories_scroller_phone.ggVPercentVisible)) * percentScrolled)) + me._categories_scroller_phone.ggContentTopOffset + 'px';
			me._categories_scroller_phone.ggScrollPosYPercent = (me._categories_scroller_phone__vertScrollFg.offsetTop / me._categories_scroller_phone__vertScrollBg.offsetHeight);
		}
		me._categories_scroller_phone.ggScrollByYSmooth = function(diffY) {
			if(!me._categories_scroller_phone.ggVertScrollVisible || diffY == 0 || me._categories_scroller_phone.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._categories_scroller_phone.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._categories_scroller_phone.ggScrollPosY >= me._categories_scroller_phone__vertScrollBg.offsetHeight - me._categories_scroller_phone__vertScrollFg.offsetHeight)) {
					me._categories_scroller_phone.ggScrollPosY = Math.min(me._categories_scroller_phone.ggScrollPosY, me._categories_scroller_phone__vertScrollBg.offsetHeight - me._categories_scroller_phone__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._categories_scroller_phone.ggScrollPosY <= 0)) {
					me._categories_scroller_phone.ggScrollPosY = Math.max(me._categories_scroller_phone.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._categories_scroller_phone__vertScrollFg.style.top = me._categories_scroller_phone.ggScrollPosY + 'px';
			let percentScrolled = me._categories_scroller_phone.ggScrollPosY / (me._categories_scroller_phone__vertScrollBg.offsetHeight - me._categories_scroller_phone__vertScrollFg.offsetHeight);
			me._categories_scroller_phone__content.style.top = -(Math.round((me._categories_scroller_phone.ggContentHeight * (1.0 - me._categories_scroller_phone.ggVPercentVisible)) * percentScrolled)) + me._categories_scroller_phone.ggContentTopOffset + 'px';
			me._categories_scroller_phone.ggScrollPosYPercent = (me._categories_scroller_phone__vertScrollFg.offsetTop / me._categories_scroller_phone__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._categories_scroller_phone.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._categories_scroller_phone.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._categories_scroller_phone.ggHPercentVisible);
					me._categories_scroller_phone.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._categories_scroller_phone.clientWidth - (me._categories_scroller_phone.ggVertScrollVisible ? 8 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._categories_scroller_phone.clientWidth - (me._categories_scroller_phone.ggVertScrollVisible ? 8 : 0))) * me._categories_scroller_phone.ggHPercentVisible);
					me._categories_scroller_phone.ggScrollByXSmooth(diffX);
				}
			}
			if (me._categories_scroller_phone.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._categories_scroller_phone.ggVPercentVisible);
					me._categories_scroller_phone.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._categories_scroller_phone.clientHeight - (me._categories_scroller_phone.ggHorScrollVisible ? 8 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._categories_scroller_phone.clientHeight - (me._categories_scroller_phone.ggHorScrollVisible ? 8 : 0))) * me._categories_scroller_phone.ggVPercentVisible);
					me._categories_scroller_phone.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._categories_scroller_phone__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._categories_scroller_phone.ggDragInertiaX *= 0.96;
				me._categories_scroller_phone.ggDragInertiaY *= 0.96;
				me._categories_scroller_phone.ggScrollByX(me._categories_scroller_phone.ggDragInertiaX);
				me._categories_scroller_phone.ggScrollByY(me._categories_scroller_phone.ggDragInertiaY);
				if (Math.abs(me._categories_scroller_phone.ggDragInertiaX) < 1.0 && Math.abs(me._categories_scroller_phone.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 10);
			me._categories_scroller_phone__content.onmouseup = null;
			me._categories_scroller_phone__content.onmousemove = null;
			me._categories_scroller_phone__content.ontouchend = null;
			me._categories_scroller_phone__content.ontouchmove = null;
			me._categories_scroller_phone__content.onpointerup = null;
			me._categories_scroller_phone__content.onpointermove = null;
			setTimeout(function() { me._categories_scroller_phone.ggIsDragging = false; }, 100);
		}
		me._categories_scroller_phone__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._categories_scroller_phone.ggDragStartX) > 10 || Math.abs(eventY - me._categories_scroller_phone.ggDragStartY) > 10) me._categories_scroller_phone.ggIsDragging = true;
			var diffX = (eventX - me._categories_scroller_phone.ggDragLastX) * me._categories_scroller_phone.ggHPercentVisible;
			var diffY = (eventY - me._categories_scroller_phone.ggDragLastY) * me._categories_scroller_phone.ggVPercentVisible;
			me._categories_scroller_phone.ggDragInertiaX = -diffX;
			me._categories_scroller_phone.ggDragInertiaY = -diffY;
			me._categories_scroller_phone.ggDragLastX = eventX;
			me._categories_scroller_phone.ggDragLastY = eventY;
			me._categories_scroller_phone.ggScrollByX(-diffX);
			me._categories_scroller_phone.ggScrollByY(-diffY);
		}
		me._categories_scroller_phone__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._categories_scroller_phone.ggDragLastX = me._categories_scroller_phone.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._categories_scroller_phone.ggDragLastY = me._categories_scroller_phone.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._categories_scroller_phone__content.onmouseup = me._categories_scroller_phone__content.mousetouchend;
			me._categories_scroller_phone__content.ontouchend = me._categories_scroller_phone__content.mousetouchend;
			me._categories_scroller_phone__content.onmousemove = me._categories_scroller_phone__content.mousetouchmove;
			me._categories_scroller_phone__content.ontouchmove = me._categories_scroller_phone__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._categories_scroller_phone__content.onpointerup = me._categories_scroller_phone__content.ontouchend;
				me._categories_scroller_phone__content.onpointermove = me._categories_scroller_phone__content.ontouchmove;
			}
		}
		els.onmousedown = me._categories_scroller_phone__content.mousetouchstart;
		els.ontouchstart = me._categories_scroller_phone__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._categories_scroller_phone__content.mousetouchstart;
		}
		elVertScrollBg = me._categories_scroller_phone__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 8px; height: 717px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._categories_scroller_phone__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 8px; height: 717px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._categories_scroller_phone.ggScrollPosY = 0;
		me._categories_scroller_phone.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._categories_scroller_phone.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._categories_scroller_phone.ggDragInertiaY *= 0.96;
					me._categories_scroller_phone.ggScrollByY(me._categories_scroller_phone.ggDragInertiaY);
					if (Math.abs(me._categories_scroller_phone.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._categories_scroller_phone.ggDragLastY;
				me._categories_scroller_phone.ggDragInertiaY = diffY;
				me._categories_scroller_phone.ggDragLastY = e.clientY;
				me._categories_scroller_phone.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._categories_scroller_phone.ggDragLastY = t ? t[0].clientY : e.clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._categories_scroller_phone.ggDragInertiaY *= 0.96;
					me._categories_scroller_phone.ggScrollByY(me._categories_scroller_phone.ggDragInertiaY);
					if (Math.abs(me._categories_scroller_phone.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me._categories_scroller_phone.ggDragLastY;
				me._categories_scroller_phone.ggDragInertiaY = diffY;
				me._categories_scroller_phone.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._categories_scroller_phone.ggScrollByY(diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._categories_scroller_phone.ggScrollHeight;
			if (e.offsetY < me._categories_scroller_phone.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._categories_scroller_phone.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._categories_scroller_phone__vertScrollBg.getBoundingClientRect();
			var diffY = me._categories_scroller_phone.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._categories_scroller_phone.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._categories_scroller_phone.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._categories_scroller_phone.ggScrollByYSmooth(30 * me._categories_scroller_phone.ggVPercentVisible * wheelDelta);
		});
		elCornerBg = me._categories_scroller_phone__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 8px; height: 8px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="categories_scroller_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : calc(100% - 105px);';
		hs+='left : 25px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._categories_scroller_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._categories_scroller_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_nodes') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('vis_phone_thumbs') == true)) && 
				((player.getVariableValue('has_categories') == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._categories_scroller_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._categories_scroller_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._categories_scroller_phone.style.transition='';
				if (me._categories_scroller_phone.ggCurrentLogicStateVisible == 0) {
					me._categories_scroller_phone.style.visibility="hidden";
					me._categories_scroller_phone.ggVisible=false;
				}
				else if (me._categories_scroller_phone.ggCurrentLogicStateVisible == 1) {
					me._categories_scroller_phone.style.visibility=(Number(me._categories_scroller_phone.style.opacity)>0||!me._categories_scroller_phone.style.opacity)?'inherit':'hidden';
					me._categories_scroller_phone.ggVisible=true;
				}
				else {
					me._categories_scroller_phone.style.visibility="hidden";
					me._categories_scroller_phone.ggVisible=false;
				}
			}
		}
		me._categories_scroller_phone.logicBlock_visible();
		me._categories_scroller_phone.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				var containerWidth = offsetWidthWithScale;
				if (this.ggVertScrollVisible) containerWidth -= 8;
				if (contentWidth < containerWidth) {
					this.ggContent.style.left = '50%';
					this.ggContent.style.marginLeft = ((contentWidth/-2) - (this.ggVertScrollVisible ? (8/2) : 0)) + 'px';
				}
				else {
					this.ggContent.style.left = this.ggContentLeftOffset + 'px';
					this.ggContent.style.marginLeft = '0px';
				}
				this.ggContent.style.top = -(Math.round(me._categories_scroller_phone.ggScrollPosY / me._categories_scroller_phone.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if ((me._categories_scroller_phone.ggHorScrollVisible && contentHeight > this.clientHeight - 8) || (!me._categories_scroller_phone.ggHorScrollVisible && contentHeight > this.clientHeight)) {
					me._categories_scroller_phone__vertScrollBg.style.visibility = 'inherit';
					me._categories_scroller_phone__vertScrollFg.style.visibility = 'inherit';
					me._categories_scroller_phone.ggVertScrollVisible = true;
				} else {
					me._categories_scroller_phone__vertScrollBg.style.visibility = 'hidden';
					me._categories_scroller_phone__vertScrollFg.style.visibility = 'hidden';
					me._categories_scroller_phone.ggVertScrollVisible = false;
				}
				if(me._categories_scroller_phone.ggVertScrollVisible) {
					me._categories_scroller_phone.ggAvailableWidth = me._categories_scroller_phone.clientWidth - 8;
					if (me._categories_scroller_phone.ggHorScrollVisible) {
						me._categories_scroller_phone.ggAvailableHeight = me._categories_scroller_phone.clientHeight - 8;
						me._categories_scroller_phone.ggAvailableHeightWithScale = me._categories_scroller_phone.getBoundingClientRect().height - me._categories_scroller_phone__vertScrollBg.getBoundingClientRect().width;
						me._categories_scroller_phone__cornerBg.style.visibility = 'inherit';
					} else {
						me._categories_scroller_phone.ggAvailableHeight = me._categories_scroller_phone.clientHeight;
						me._categories_scroller_phone.ggAvailableHeightWithScale = me._categories_scroller_phone.getBoundingClientRect().height;
						me._categories_scroller_phone__cornerBg.style.visibility = 'hidden';
					}
					me._categories_scroller_phone__vertScrollBg.style.height = me._categories_scroller_phone.ggAvailableHeight + 'px';
					me._categories_scroller_phone.ggVPercentVisible = contentHeight != 0 ? me._categories_scroller_phone.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._categories_scroller_phone.ggVPercentVisible > 1.0) me._categories_scroller_phone.ggVPercentVisible = 1.0;
					me._categories_scroller_phone.ggScrollHeight =  Math.round(me._categories_scroller_phone__vertScrollBg.offsetHeight * me._categories_scroller_phone.ggVPercentVisible);
					me._categories_scroller_phone__vertScrollFg.style.height = me._categories_scroller_phone.ggScrollHeight + 'px';
					me._categories_scroller_phone.ggScrollPosY = me._categories_scroller_phone.ggScrollPosYPercent * me._categories_scroller_phone.ggAvailableHeight;
					me._categories_scroller_phone.ggScrollPosY = Math.min(me._categories_scroller_phone.ggScrollPosY, me._categories_scroller_phone__vertScrollBg.offsetHeight - me._categories_scroller_phone__vertScrollFg.offsetHeight);
					me._categories_scroller_phone__vertScrollFg.style.top = me._categories_scroller_phone.ggScrollPosY + 'px';
					if (me._categories_scroller_phone.ggVPercentVisible < 1.0) {
						let percentScrolled = me._categories_scroller_phone.ggScrollPosY / (me._categories_scroller_phone__vertScrollBg.offsetHeight - me._categories_scroller_phone__vertScrollFg.offsetHeight);
						me._categories_scroller_phone__content.style.top = -(Math.round((me._categories_scroller_phone.ggContentHeight * (1.0 - me._categories_scroller_phone.ggVPercentVisible)) * percentScrolled)) + me._categories_scroller_phone.ggContentTopOffset + 'px';
					}
				} else {
					me._categories_scroller_phone.ggAvailableWidth = me._categories_scroller_phone.clientWidth;
					me._categories_scroller_phone.ggScrollPosY = 0;
					me._categories_scroller_phone.ggScrollPosYPercent = 0.0;
					me._categories_scroller_phone__content.style.top = this.ggContentTopOffset + 'px';
					me._categories_scroller_phone__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._categories_scroller_phone.ggHorScrollVisible || vertScrollWasVisible != me._categories_scroller_phone.ggVertScrollVisible) {
					skin.updateSize(me._categories_scroller_phone);
					me._categories_scroller_phone.ggUpdatePosition();
				}
			}
		}
		el=me._categories_cloner_phone=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._categories_cloner_phone;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 100;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 150;
		el.ggHeight = 100;
		el.ggSizeChanged = false;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me._categories_cloner_phone.ggUpdating == true) return;
			me._categories_cloner_phone.ggUpdating = true;
			var el=me._categories_cloner_phone;
			var curNumCols = 0;
			var parentWidth = me._categories_cloner_phone.parentNode.classList.contains('ggskin_subelement') ? (me._categories_cloner_phone.parentNode.parentNode.classList.contains('ggskin_scrollarea') ? me._categories_cloner_phone.parentNode.parentNode.ggAvailableWidth : me._categories_cloner_phone.parentNode.parentNode.clientWidth) : me._categories_cloner_phone.parentNode.clientWidth;
			if (parentWidth == 0) parentWidth = me._categories_cloner_phone.parentNode.parentNode.clientWidth;
			curNumCols = Math.floor(((parentWidth - me._categories_cloner_phone.offsetLeft) * me._categories_cloner_phone.ggNumRepeat / 100.0) / me._categories_cloner_phone.offsetWidth);
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && !el.ggSizeChanged && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._categories_cloner_phone.ggUpdating = false;
				return;
			} else {
				el.ggSizeChanged = false;
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._categories_cloner_phone.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			if (tourNodes.length == 0) {
				me._categories_cloner_phone.ggUpdating = false;
				return;
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			me._categories_cloner_phone.ggNumFilterPassed = 0;
			var firstNode;
			for (var i = 0; i < el.ggTagTable.length; i++) {
				var cItem = el.ggTagTable[i];
				firstNode = '';
				cItem.nodecount = 0;
				for (var j=0; j < tourNodes.length; j++) {
					var nodeData = player.getNodeUserdata(tourNodes[j]);
					if ((nodeData['tags'].indexOf(cItem.tag) != -1) || (cItem.tag=='')) {
						var passed = true;
						if (filter.length > 0) {
							for (var k=0; k < filter.length; k++) {
								if (nodeData['tags'].indexOf(filter[k].trim()) == -1) passed = false;
							}
						}
						if (passed) {
							cItem.nodecount++;
							if (firstNode == '') firstNode = tourNodes[j];
						}
					}
				}
				cItem.firstnode=firstNode;
				if (cItem.nodecount == 0) continue;
				me._categories_cloner_phone.ggNumFilterPassed++;
				var nodeId = {};
				nodeId['tag'] = cItem.tag;
				nodeId['title'] = cItem.title;
				nodeId['description'] = cItem.description;
				nodeId['nodecount'] = cItem.nodecount;
				nodeId['firstnode'] = cItem.firstnode;
				if (!keepCloning || i < me._categories_cloner_phone.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._categories_cloner_phone.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._categories_cloner_phone.ggWidth) + 'px';
				parameter.width=me._categories_cloner_phone.ggWidth + 'px';
				parameter.height=me._categories_cloner_phone.ggHeight + 'px';
				parameter.index=currentIndex;
				var inst = new SkinCloner_categories_cloner_phone_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me._categories_cloner_phone.ggNodeCount = me._categories_cloner_phone.ggNumFilterPassed;
			me._categories_cloner_phone.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._categories_cloner_phone.parentNode && me._categories_cloner_phone.parentNode.classList.contains('ggskin_subelement') && me._categories_cloner_phone.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._categories_cloner_phone.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggTagTable = [
			];
		el.ggId="categories_cloner_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 100px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._categories_cloner_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._categories_cloner_phone.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._categories_cloner_phone.childNodes.length; i++) {
				var child=me._categories_cloner_phone.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._categories_cloner_phone.ggUpdatePosition=function (useTransition) {
			me._categories_cloner_phone.ggUpdate();
		}
		me._categories_scroller_phone__content.appendChild(me._categories_cloner_phone);
		me._safe_area_phone.appendChild(me._categories_scroller_phone);
		el=me._info_popup_phone=document.createElement('div');
		el.ggId="info_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : calc(100% - 80px);';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._info_popup_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_popup_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_info') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._info_popup_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._info_popup_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._info_popup_phone.style.transition='';
				if (me._info_popup_phone.ggCurrentLogicStateVisible == 0) {
					me._info_popup_phone.style.visibility=(Number(me._info_popup_phone.style.opacity)>0||!me._info_popup_phone.style.opacity)?'inherit':'hidden';
					me._info_popup_phone.ggVisible=true;
				}
				else {
					me._info_popup_phone.style.visibility="hidden";
					me._info_popup_phone.ggVisible=false;
				}
			}
		}
		me._info_popup_phone.logicBlock_visible();
		me._info_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._info_popup_text_phone=document.createElement('div');
		els=me._info_popup_text_phone__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_popup_text_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text plex_sans_regular";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : default;';
		hs+='height : calc(100% - 80px);';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 60px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		hs+="line-height: 1.5;";
		els.setAttribute('style',hs);
		me._info_popup_text_phone.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._info_popup_text_phone.ggUpdateText();
		el.appendChild(els);
		me._info_popup_text_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_popup_text_phone.ggUpdatePosition=function (useTransition) {
		}
		me._info_popup_phone.appendChild(me._info_popup_text_phone);
		el=me._info_popup_title_phone=document.createElement('div');
		els=me._info_popup_title_phone__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_popup_title_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text plex_sans_medium";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._info_popup_title_phone.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._info_popup_title_phone.ggUpdateText();
		el.appendChild(els);
		me._info_popup_title_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_popup_title_phone.ggUpdatePosition=function (useTransition) {
		}
		me._info_popup_phone.appendChild(me._info_popup_title_phone);
		me._safe_area_phone.appendChild(me._info_popup_phone);
		el=me._map_el_phone=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapLayers = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = '_none';
		el.ggId="map_el_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : calc(100% - 105px);';
		hs+='left : 25px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_el_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_el_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_map') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_el_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_el_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_el_phone.style.transition='';
				if (me._map_el_phone.ggCurrentLogicStateVisible == 0) {
					me._map_el_phone.style.visibility=(Number(me._map_el_phone.style.opacity)>0||!me._map_el_phone.style.opacity)?'inherit':'hidden';
					if (me._map_el_phone.ggMapNotLoaded && me._map_el_phone.ggInitMap) {
						me._map_el_phone.ggInitMap(false);
						me._map_el_phone.ggInitMapMarkers(true);
					}
					me._map_el_phone.ggVisible=true;
				}
				else {
					me._map_el_phone.style.visibility="hidden";
					if (me._map_el_phone.ggClearMap) me._map_el_phone.ggClearMap();
					me._map_el_phone.ggVisible=false;
				}
			}
		}
		me._map_el_phone.logicBlock_visible();
		me._map_el_phone.ggUpdatePosition=function (useTransition) {
		}
		me._safe_area_phone.appendChild(me._map_el_phone);
		el=me._floorplan_el_phone=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapLayers = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = '_none';
		el.ggId="floorplan_el_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : calc(100% - 105px);';
		hs+='left : 25px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._floorplan_el_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._floorplan_el_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_floorplan') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._floorplan_el_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._floorplan_el_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._floorplan_el_phone.style.transition='';
				if (me._floorplan_el_phone.ggCurrentLogicStateVisible == 0) {
					me._floorplan_el_phone.style.visibility=(Number(me._floorplan_el_phone.style.opacity)>0||!me._floorplan_el_phone.style.opacity)?'inherit':'hidden';
					if (me._floorplan_el_phone.ggMapNotLoaded && me._floorplan_el_phone.ggInitMap) {
						me._floorplan_el_phone.ggInitMap(false);
						me._floorplan_el_phone.ggInitMapMarkers(true);
					}
					me._floorplan_el_phone.ggVisible=true;
				}
				else {
					me._floorplan_el_phone.style.visibility="hidden";
					if (me._floorplan_el_phone.ggClearMap) me._floorplan_el_phone.ggClearMap();
					me._floorplan_el_phone.ggVisible=false;
				}
			}
		}
		me._floorplan_el_phone.logicBlock_visible();
		me._floorplan_el_phone.ggUpdatePosition=function (useTransition) {
		}
		me._safe_area_phone.appendChild(me._floorplan_el_phone);
		el=me._image_popup_phone=document.createElement('div');
		els=me._image_popup_phone__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._image_popup_phone.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._image_popup_phone.ggSubElement.setAttribute('alt', player._(me._image_popup_phone.ggAltText));
			me._image_popup_phone.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._image_popup_phone.ggText_untranslated = img;
			me._image_popup_phone.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._image_popup_phone.ggSubElement.style.width = '0px';
			me._image_popup_phone.ggSubElement.style.height = '0px';
			me._image_popup_phone.ggSubElement.src='';
			me._image_popup_phone.ggSubElement.src=me._image_popup_phone.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._image_popup_phone.ggText != player._(me._image_popup_phone.ggText_untranslated)) {
				me._image_popup_phone.ggText = player._(me._image_popup_phone.ggText_untranslated);
				me._image_popup_phone.ggUpdateImage()
			}
		}
		el.ggText=el.ggText_untranslated=basePath + "";
		el.ggUpdateImage();
		els['ondragstart']=function() { return false; };
		el.ggUpdateText();
		el.ggId="image_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : calc(100% - 105px);';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_popup_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_popup_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_image') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_popup_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_popup_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_popup_phone.style.transition='';
				if (me._image_popup_phone.ggCurrentLogicStateVisible == 0) {
					me._image_popup_phone.style.visibility=(Number(me._image_popup_phone.style.opacity)>0||!me._image_popup_phone.style.opacity)?'inherit':'hidden';
					me._image_popup_phone.ggSubElement.src=me._image_popup_phone.ggText;
					me._image_popup_phone.ggVisible=true;
				}
				else {
					me._image_popup_phone.style.visibility="hidden";
					me._image_popup_phone.ggSubElement.src='';
					me._image_popup_phone.ggVisible=false;
				}
			}
		}
		me._image_popup_phone.logicBlock_visible();
		me._image_popup_phone.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._image_popup_phone.clientWidth;
			var parentHeight = me._image_popup_phone.clientHeight;
			var img = me._image_popup_phone__img;
			var aspectRatioDiv = me._image_popup_phone.clientWidth / me._image_popup_phone.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if (aspectRatioDiv > aspectRatioImg) {
				currentHeight = parentHeight;
				currentWidth = Math.round(parentHeight * aspectRatioImg);
				img.style.width='';
				img.style.height=parentHeight + 'px';
			} else {
				currentWidth = parentWidth;
				currentHeight = Math.round(parentWidth / aspectRatioImg);
				img.style.width=parentWidth + 'px';
				img.style.height='';
			};
			if (!me._image_popup_phone.ggScrollbars || currentWidth < me._image_popup_phone.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._image_popup_phone.scrollLeft=currentWidth / 2 - me._image_popup_phone.clientWidth / 2;
			}
			if (!me._image_popup_phone.ggScrollbars || currentHeight < me._image_popup_phone.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._image_popup_phone.scrollTop=currentHeight / 2 - me._image_popup_phone.clientHeight / 2;
			}
		}
		me._safe_area_phone.appendChild(me._image_popup_phone);
		me._screentint_phone.appendChild(me._safe_area_phone);
		me.divSkin.appendChild(me._screentint_phone);
		el=me._local_fonts=document.createElement('div');
		el.ggId="local_fonts";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_code ";
		el.ggType='code';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._local_fonts.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._local_fonts.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._local_fonts);
		me._control_buttons.logicBlock_visible();
		me._control_buttons.logicBlock_alpha();
		me._floorplan_btn.logicBlock_visible();
		me.elementMouseOver['floorplan_btn']=false;
		me._map_btn.logicBlock_visible();
		me.elementMouseOver['map_btn']=false;
		me._info_btn.logicBlock_visible();
		me._info_btn_disabled.logicBlock_visible();
		me._info_btn_enabled.logicBlock_visible();
		me.elementMouseOver['info_btn_enabled']=false;
		me._share_btn.logicBlock_visible();
		me.elementMouseOver['share_btn']=false;
		me._vr_btn.logicBlock_visible();
		me.elementMouseOver['vr_btn']=false;
		me._toggle_gyro_btn.logicBlock_visible();
		me._toggle_gyro_off.logicBlock_visible();
		me.elementMouseOver['toggle_gyro_off']=false;
		me._toggle_gyro_on.logicBlock_visible();
		me.elementMouseOver['toggle_gyro_on']=false;
		me._toggle_autorot_btn.logicBlock_visible();
		me._toggle_autorot_off.logicBlock_visible();
		me.elementMouseOver['toggle_autorot_off']=false;
		me._toggle_autorot_on.logicBlock_visible();
		me.elementMouseOver['toggle_autorot_on']=false;
		me._toggle_audio_btn.logicBlock_visible();
		me._toggle_audio_off.logicBlock_visible();
		me.elementMouseOver['toggle_audio_off']=false;
		me._toggle_audio_on.logicBlock_visible();
		me.elementMouseOver['toggle_audio_on']=false;
		me._toggle_fullscreen_btn.logicBlock_visible();
		me._toggle_fullscreen_off.logicBlock_visible();
		me.elementMouseOver['toggle_fullscreen_off']=false;
		me._toggle_fullscreen_on.logicBlock_visible();
		me.elementMouseOver['toggle_fullscreen_on']=false;
		me._language_btn.logicBlock_visible();
		me.elementMouseOver['language_btn']=false;
		me._thumbs_btn.logicBlock_visible();
		me.elementMouseOver['thumbs_btn']=false;
		me._toggle_controls.logicBlock_visible();
		me._toggle_controls_off.logicBlock_visible();
		me.elementMouseOver['toggle_controls_off']=false;
		me._toggle_controls_on.logicBlock_visible();
		me.elementMouseOver['toggle_controls_on']=false;
		me._languages.logicBlock_visible();
		me._languages.logicBlock_alpha();
		me._thumbs.logicBlock_visible();
		me._thumbs.logicBlock_alpha();
		me._share.logicBlock_visible();
		me._share.logicBlock_alpha();
		me._copy_btn.logicBlock_visible();
		me.elementMouseOver['copy_btn']=false;
		me._twitter_btn.logicBlock_visible();
		me.elementMouseOver['twitter_btn']=false;
		me._facebook_btn.logicBlock_visible();
		me.elementMouseOver['facebook_btn']=false;
		me._info.logicBlock_visible();
		me._info.logicBlock_alpha();
		me._floorplan.logicBlock_visible();
		me._floorplan.logicBlock_alpha();
		me._floorplan_el.ggInitMap=function() {};
		me._floorplan_el.ggInitMapMarkers=function() {};
		me._floorplan_el.ggClearMap=function() {};
		me._map.logicBlock_visible();
		me._map.logicBlock_alpha();
		me._map_el.ggInitMap=function() {};
		me._map_el.ggInitMapMarkers=function() {};
		me._map_el.ggClearMap=function() {};
		me._cloner_container.logicBlock_size();
		me._cloner_container.logicBlock_visible();
		me._cloner_container.logicBlock_alpha();
		me._categories_cloner.logicBlock_position();
		me._categories_cloner.logicBlock_visible();
		me._pagination_container.logicBlock_visible();
		me._categories_up.logicBlock_visible();
		me.elementMouseOver['categories_up']=false;
		me._categories_up_disabled.logicBlock_visible();
		me._categories_down.logicBlock_visible();
		me.elementMouseOver['categories_down']=false;
		me._categories_down_disabled.logicBlock_visible();
		me._project_title.logicBlock_visible();
		me._project_title_phone.logicBlock_visible();
		me._screentint.logicBlock_visible();
		me._image_popup.logicBlock_visible();
		me._popup_image.logicBlock_visible();
		me._popup_close.logicBlock_visible();
		me.elementMouseOver['popup_close']=false;
		me._sounds_splashscreen.logicBlock_visible();
		me.elementMouseOver['sounds_off']=false;
		me.elementMouseOver['sounds_on']=false;
		me._screentint_phone.logicBlock_visible();
		me.elementMouseOver['btn_close_popup_phone']=false;
		me._back_to_categories_phone.logicBlock_visible();
		me.elementMouseOver['back_to_categories_phone']=false;
		me._nodes_scroller_phone.logicBlock_visible();
		me._categories_scroller_phone.logicBlock_visible();
		me._info_popup_phone.logicBlock_visible();
		me._map_el_phone.ggInitMap=function() {};
		me._map_el_phone.ggInitMapMarkers=function() {};
		me._map_el_phone.ggClearMap=function() {};
		me._map_el_phone.logicBlock_visible();
		me._floorplan_el_phone.ggInitMap=function() {};
		me._floorplan_el_phone.ggInitMapMarkers=function() {};
		me._floorplan_el_phone.ggClearMap=function() {};
		me._floorplan_el_phone.logicBlock_visible();
		me._image_popup_phone.logicBlock_visible();
		el = me._local_fonts;
		;
		player.addListener('activehotspotchanged', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_activehotspotchanged();
				}
			}
			me._info_btn_disabled.logicBlock_visible();
			me._info_btn_enabled.logicBlock_visible();
			me._info.logicBlock_alpha();
		});
		player.addListener('autorotatechanged', function(event) {
			me._toggle_autorot_off.logicBlock_visible();
			me._toggle_autorot_on.logicBlock_visible();
		});
		player.addListener('changenode', function(event) {
			for(var i = 0; i < me._thumbs_cloner.ggInstances.length; i++) {
				me._thumbs_cloner.ggInstances[i].ggEvent_changenode(event);
			}
			for(var i = 0; i < me._categories_cloner.ggInstances.length; i++) {
				me._categories_cloner.ggInstances[i].ggEvent_changenode(event);
			}
			if (hotspotTemplates.hasOwnProperty('ht_info')) {
				for(var i = 0; i < hotspotTemplates['ht_info'].length; i++) {
					hotspotTemplates['ht_info'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_image')) {
				for(var i = 0; i < hotspotTemplates['ht_image'].length; i++) {
					hotspotTemplates['ht_image'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_changenode();
				}
			}
			me._variable_vis_sounds_splashscreen.logicBlock();
			me._variable_vis_skin.logicBlock();
			me._variable_vis_popup.logicBlock();
			me._variable_opt_share.logicBlock();
			me._control_buttons.logicBlock_visible();
			me._control_buttons.logicBlock_alpha();
			me._floorplan_btn.logicBlock_visible();
			me._map_btn.logicBlock_visible();
			me._info_btn.logicBlock_visible();
			me._info_btn_disabled.logicBlock_visible();
			me._info_btn_enabled.logicBlock_visible();
			me._share_btn.logicBlock_visible();
			me._toggle_gyro_btn.logicBlock_visible();
			me._toggle_gyro_off.logicBlock_visible();
			me._toggle_gyro_on.logicBlock_visible();
			me._toggle_autorot_btn.logicBlock_visible();
			me._toggle_autorot_off.logicBlock_visible();
			me._toggle_autorot_on.logicBlock_visible();
			me._toggle_audio_off.logicBlock_visible();
			me._toggle_audio_on.logicBlock_visible();
			me._toggle_fullscreen_btn.logicBlock_visible();
			me._thumbs_btn.logicBlock_visible();
			me._toggle_controls.logicBlock_visible();
			me._toggle_controls_off.logicBlock_visible();
			me._toggle_controls_on.logicBlock_visible();
			me._languages.logicBlock_visible();
			me._languages.logicBlock_alpha();
			me._languages_cloner.ggUpdateConditionNodeChange();
			me._thumbs.logicBlock_visible();
			me._thumbs.logicBlock_alpha();
			me._thumbs_cloner.ggUpdateConditionNodeChange();
			me._share.logicBlock_visible();
			me._share.logicBlock_alpha();
			me._copy_btn.logicBlock_visible();
			me._twitter_btn.logicBlock_visible();
			me._facebook_btn.logicBlock_visible();
			me._info.logicBlock_visible();
			me._info.logicBlock_alpha();
			me._floorplan.logicBlock_visible();
			me._floorplan.logicBlock_alpha();
			me._map.logicBlock_visible();
			me._map.logicBlock_alpha();
			me._cloner_container.logicBlock_size();
			me._cloner_container.logicBlock_visible();
			me._cloner_container.logicBlock_alpha();
			me._categories_cloner.logicBlock_position();
			me._categories_cloner.logicBlock_visible();
			me._categories_cloner.ggUpdateConditionNodeChange();
			me._pagination_container.logicBlock_visible();
			me._categories_up.logicBlock_visible();
			me._categories_up_disabled.logicBlock_visible();
			me._categories_down.logicBlock_visible();
			me._categories_down_disabled.logicBlock_visible();
			me._project_title.logicBlock_visible();
			me._project_title_phone.logicBlock_visible();
			me._screentint.logicBlock_visible();
			me._image_popup.logicBlock_visible();
			me._popup_image.logicBlock_visible();
			me._popup_close.logicBlock_visible();
			me._sounds_splashscreen.logicBlock_visible();
			me._screentint_phone.logicBlock_visible();
			me._back_to_categories_phone.logicBlock_visible();
			me._nodes_scroller_phone.logicBlock_visible();
			me._nodes_cloner_phone.ggUpdateConditionNodeChange();
			me._categories_scroller_phone.logicBlock_visible();
			me._categories_cloner_phone.ggUpdateConditionNodeChange();
			me._info_popup_phone.logicBlock_visible();
			me._map_el_phone.logicBlock_visible();
			me._floorplan_el_phone.logicBlock_visible();
			me._image_popup_phone.logicBlock_visible();
		});
		player.addListener('changevisitednodes', function(event) {
			for(var i = 0; i < me._thumbs_cloner.ggInstances.length; i++) {
				me._thumbs_cloner.ggInstances[i].ggEvent_changevisitednodes(event);
			}
			for(var i = 0; i < me._categories_cloner.ggInstances.length; i++) {
				me._categories_cloner.ggInstances[i].ggEvent_changevisitednodes(event);
			}
		});
		player.addListener('configloaded', function(event) {
			for(var i = 0; i < me._categories_cloner.ggInstances.length; i++) {
				me._categories_cloner.ggInstances[i].ggEvent_configloaded(event);
			}
			if (hotspotTemplates.hasOwnProperty('ht_info')) {
				for(var i = 0; i < hotspotTemplates['ht_info'].length; i++) {
					hotspotTemplates['ht_info'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_image')) {
				for(var i = 0; i < hotspotTemplates['ht_image'].length; i++) {
					hotspotTemplates['ht_image'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_configloaded();
				}
			}
			me._variable_vis_sounds_splashscreen.logicBlock();
			me._variable_vis_skin.logicBlock();
			me._variable_vis_popup.logicBlock();
			me._variable_opt_maps.logicBlock();
			me._variable_opt_floorplans.logicBlock();
			me._variable_opt_share.logicBlock();
			me._variable_has_fullscreen.logicBlock();
			if (player.getBrowser() == 3) {
   let styleSheets = document.styleSheets;
   for (let i=0; i<styleSheets.length; i++) {
      let styleSheet = styleSheets[i];
      if (styleSheet.href === null) {
         let cssRules = styleSheet.cssRules;
         for (let j=0; j<cssRules.length; j++) {
            let cssRule = cssRules[j];
            if (cssRule.selectorText == ".svg_shadow") {
               cssRule.style.filter = "";
               cssRule.style['-webkit-filter'] = "";
               break;
            }
         }
      }
   }
}
			me._control_buttons.logicBlock_visible();
			me._control_buttons.logicBlock_alpha();
			player.setVariableValue('pos_menu_button', Number("20.00"));
			if (
				(
					((player.getVariableValue('opt_share_facebook') == true))
				)
			) {
				player.setVariableValue('pos_share_button', player.getVariableValue('pos_share_button') + Number("40.00"));
			}
			me._twitter_btn.style.transition='none';
			me._twitter_btn.ggParameter.rx=0;me._twitter_btn.ggParameter.ry=player.getVariableValue('pos_share_button', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''));
			me._twitter_btn.style.transform=parameterToTransform(me._twitter_btn.ggParameter);
			if (
				(
					((player.getVariableValue('opt_share_twitter') == true))
				)
			) {
				player.setVariableValue('pos_share_button', player.getVariableValue('pos_share_button') + Number("40.00"));
			}
			me._copy_btn.style.transition='none';
			me._copy_btn.ggParameter.rx=0;me._copy_btn.ggParameter.ry=player.getVariableValue('pos_share_button', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''));
			me._copy_btn.style.transform=parameterToTransform(me._copy_btn.ggParameter);
			player.setVariableValue('pos_share_button', player.getVariableValue('pos_share_button') + Number("70.00"));
			me._share_bg.style.transition='none';
			me._share_bg.style.width = '72px';
			me._share_bg.style.height = '' + player.getVariableValue('pos_share_button', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : '')) + 'px';
			me._share_bg.ggUpdatePosition();
			skin.updateSize(me._share_bg);
			me._floorplan_btn.logicBlock_visible();
			me._map_btn.logicBlock_visible();
			me._info_btn.logicBlock_visible();
			me._info_btn_disabled.logicBlock_visible();
			me._info_btn_enabled.logicBlock_visible();
			me._share_btn.logicBlock_visible();
			me._toggle_gyro_btn.logicBlock_visible();
			me._toggle_autorot_btn.logicBlock_visible();
			me._toggle_audio_btn.logicBlock_visible();
			me._toggle_audio_off.logicBlock_visible();
			me._toggle_audio_on.logicBlock_visible();
			me._toggle_fullscreen_btn.logicBlock_visible();
			me._language_btn.logicBlock_visible();
			me._thumbs_btn.logicBlock_visible();
			me._toggle_controls.logicBlock_visible();
			me._toggle_controls_off.logicBlock_visible();
			me._toggle_controls_on.logicBlock_visible();
			me._languages.logicBlock_visible();
			me._languages.logicBlock_alpha();
			me._languages_scroller.ggUpdatePosition();
			me._languages_cloner.ggTranslations = player.getProjectTranslations();
			me._languages_cloner.ggUpdate();
			me._thumbs.logicBlock_visible();
			me._thumbs.logicBlock_alpha();
			me._thumbs_scroller.ggUpdatePosition();
			me._share.logicBlock_visible();
			me._share.logicBlock_alpha();
			me._copy_btn.logicBlock_visible();
			me._twitter_btn.logicBlock_visible();
			me._facebook_btn.logicBlock_visible();
			me._info.logicBlock_visible();
			me._info.logicBlock_alpha();
			me._floorplan.logicBlock_visible();
			me._floorplan.logicBlock_alpha();
			me._map.logicBlock_visible();
			me._map.logicBlock_alpha();
			me._cloner_container.logicBlock_size();
			me._cloner_container.logicBlock_visible();
			me._cloner_container.logicBlock_alpha();
			me._categories_cloner.logicBlock_position();
			me._categories_cloner.logicBlock_visible();
			if (
				(
					((skin._categories_cloner.ggNodeCount <= 1))
				)
			) {
				player.setVariableValue('has_categories', false);
			}
			me._pagination_container.logicBlock_visible();
			me._categories_up.logicBlock_visible();
			me._categories_up_disabled.logicBlock_visible();
			me._categories_down.logicBlock_visible();
			me._categories_down_disabled.logicBlock_visible();
			me._project_title.logicBlock_visible();
			me._project_title_phone.logicBlock_visible();
			me._screentint.logicBlock_visible();
			me._image_popup.logicBlock_visible();
			me._popup_image.logicBlock_visible();
			me._popup_close.logicBlock_visible();
			me._sounds_splashscreen.logicBlock_visible();
			me._screentint_phone.logicBlock_visible();
			me._back_to_categories_phone.logicBlock_visible();
			me._nodes_scroller_phone.ggUpdatePosition();
			me._nodes_scroller_phone.logicBlock_visible();
			me._categories_scroller_phone.ggUpdatePosition();
			me._categories_scroller_phone.logicBlock_visible();
			me._info_popup_phone.logicBlock_visible();
			me._map_el_phone.logicBlock_visible();
			me._floorplan_el_phone.logicBlock_visible();
			me._image_popup_phone.logicBlock_visible();
		});
		player.addListener('fullscreenenter', function(event) {
			me._toggle_fullscreen_off.logicBlock_visible();
			me._toggle_fullscreen_on.logicBlock_visible();
		});
		player.addListener('fullscreenexit', function(event) {
			me._toggle_fullscreen_off.logicBlock_visible();
			me._toggle_fullscreen_on.logicBlock_visible();
		});
		player.addListener('gyroavailable', function(event) {
			me._toggle_gyro_btn.logicBlock_visible();
		});
		player.addListener('gyrochanged', function(event) {
			me._toggle_gyro_off.logicBlock_visible();
			me._toggle_gyro_on.logicBlock_visible();
		});
		player.addListener('hastouch', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_info')) {
				for(var i = 0; i < hotspotTemplates['ht_info'].length; i++) {
					hotspotTemplates['ht_info'][i].ggEvent_hastouch();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_image')) {
				for(var i = 0; i < hotspotTemplates['ht_image'].length; i++) {
					hotspotTemplates['ht_image'][i].ggEvent_hastouch();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_hastouch();
				}
			}
		});
		player.addListener('playerstatechanged', function(event) {
			player.setVariableValue('pos_menu_button', Number("0.00"));
			if (
				(
					((player.getIsTour() == true)) && 
					((player.getVariableValue('has_categories') == false)) || 
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('pos_menu_button', player.getVariableValue('pos_menu_button') + Number("42.00"));
			}
			me._language_btn.style.transition='none';
			me._language_btn.ggParameter.rx=0;me._language_btn.ggParameter.ry=player.getVariableValue('pos_menu_button', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''));
			me._language_btn.style.transform=parameterToTransform(me._language_btn.ggParameter);
			player.setVariableValue('pos_languages', Number(player.getVariableValue('pos_menu_button', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''))));
			me._languages.style.transition='none';
			me._languages.ggParameter.rx=0;me._languages.ggParameter.ry=player.getVariableValue('pos_languages', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''));
			me._languages.style.transform=parameterToTransform(me._languages.ggParameter);
			if (
				(
					((player.getProjectTranslations().length > 1))
				)
			) {
				player.setVariableValue('pos_menu_button', player.getVariableValue('pos_menu_button') + Number("42.00"));
			}
			me._toggle_fullscreen_btn.style.transition='none';
			me._toggle_fullscreen_btn.ggParameter.rx=0;me._toggle_fullscreen_btn.ggParameter.ry=player.getVariableValue('pos_menu_button', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''));
			me._toggle_fullscreen_btn.style.transform=parameterToTransform(me._toggle_fullscreen_btn.ggParameter);
			if (
				(
					((player.getVariableValue('opt_fullscreen') == true)) && 
					((player.getVariableValue('has_fullscreen') == true))
				)
			) {
				player.setVariableValue('pos_menu_button', player.getVariableValue('pos_menu_button') + Number("42.00"));
			}
			me._toggle_audio_btn.style.transition='none';
			me._toggle_audio_btn.ggParameter.rx=0;me._toggle_audio_btn.ggParameter.ry=player.getVariableValue('pos_menu_button', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''));
			me._toggle_audio_btn.style.transform=parameterToTransform(me._toggle_audio_btn.ggParameter);
			if (
				(
					((player.getHasSounds() == true))
				)
			) {
				player.setVariableValue('pos_menu_button', player.getVariableValue('pos_menu_button') + Number("42.00"));
			}
			me._toggle_autorot_btn.style.transition='none';
			me._toggle_autorot_btn.ggParameter.rx=0;me._toggle_autorot_btn.ggParameter.ry=player.getVariableValue('pos_menu_button', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''));
			me._toggle_autorot_btn.style.transform=parameterToTransform(me._toggle_autorot_btn.ggParameter);
			if (
				(
					((player.getVariableValue('opt_autorotation') == true))
				)
			) {
				player.setVariableValue('pos_menu_button', player.getVariableValue('pos_menu_button') + Number("42.00"));
			}
			me._toggle_gyro_btn.style.transition='none';
			me._toggle_gyro_btn.ggParameter.rx=0;me._toggle_gyro_btn.ggParameter.ry=player.getVariableValue('pos_menu_button', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''));
			me._toggle_gyro_btn.style.transform=parameterToTransform(me._toggle_gyro_btn.ggParameter);
			if (
				(
					((player.getVariableValue('opt_gyro') == true)) && 
					((player.getGyroAvailable() == true))
				)
			) {
				player.setVariableValue('pos_menu_button', player.getVariableValue('pos_menu_button') + Number("42.00"));
			}
			me._vr_btn.style.transition='none';
			me._vr_btn.ggParameter.rx=0;me._vr_btn.ggParameter.ry=player.getVariableValue('pos_menu_button', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''));
			me._vr_btn.style.transform=parameterToTransform(me._vr_btn.ggParameter);
			if (
				(
					((player.hasVR() == true))
				)
			) {
				player.setVariableValue('pos_menu_button', player.getVariableValue('pos_menu_button') + Number("42.00"));
			}
			me._share_btn.style.transition='none';
			me._share_btn.ggParameter.rx=0;me._share_btn.ggParameter.ry=player.getVariableValue('pos_menu_button', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''));
			me._share_btn.style.transform=parameterToTransform(me._share_btn.ggParameter);
			player.setVariableValue('pos_share', Number(player.getVariableValue('pos_menu_button', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''))));
			player.setVariableValue('pos_share', player.getVariableValue('pos_share') + Number("16.00"));
			me._share.style.transition='none';
			me._share.ggParameter.rx=0;me._share.ggParameter.ry=player.getVariableValue('pos_share', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''));
			me._share.style.transform=parameterToTransform(me._share.ggParameter);
			if (
				(
					((player.getVariableValue('opt_share') == true))
				)
			) {
				player.setVariableValue('pos_menu_button', player.getVariableValue('pos_menu_button') + Number("42.00"));
			}
			me._info_btn.style.transition='none';
			me._info_btn.ggParameter.rx=0;me._info_btn.ggParameter.ry=player.getVariableValue('pos_menu_button', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''));
			me._info_btn.style.transform=parameterToTransform(me._info_btn.ggParameter);
			player.setVariableValue('pos_info', Number(player.getVariableValue('pos_menu_button', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''))));
			player.setVariableValue('pos_info', player.getVariableValue('pos_info') + Number("16.00"));
			me._info.style.transition='none';
			me._info.ggParameter.rx=0;me._info.ggParameter.ry=player.getVariableValue('pos_info', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''));
			me._info.style.transform=parameterToTransform(me._info.ggParameter);
			if (
				(
					((player.getVariableValue('opt_info') == true))
				)
			) {
				player.setVariableValue('pos_menu_button', player.getVariableValue('pos_menu_button') + Number("42.00"));
			}
			me._map_btn.style.transition='none';
			me._map_btn.ggParameter.rx=0;me._map_btn.ggParameter.ry=player.getVariableValue('pos_menu_button', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''));
			me._map_btn.style.transform=parameterToTransform(me._map_btn.ggParameter);
			player.setVariableValue('pos_map', Number(player.getVariableValue('pos_menu_button', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''))));
			player.setVariableValue('pos_map', player.getVariableValue('pos_map') + Number("16.00"));
			me._map.style.transition='none';
			me._map.ggParameter.rx=0;me._map.ggParameter.ry=player.getVariableValue('pos_map', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''));
			me._map.style.transform=parameterToTransform(me._map.ggParameter);
			if (
				(
					((player.getVariableValue('opt_maps') == true))
				)
			) {
				player.setVariableValue('pos_menu_button', player.getVariableValue('pos_menu_button') + Number("42.00"));
			}
			me._floorplan_btn.style.transition='none';
			me._floorplan_btn.ggParameter.rx=0;me._floorplan_btn.ggParameter.ry=player.getVariableValue('pos_menu_button', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''));
			me._floorplan_btn.style.transform=parameterToTransform(me._floorplan_btn.ggParameter);
			player.setVariableValue('pos_floorplan', Number(player.getVariableValue('pos_menu_button', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''))));
			player.setVariableValue('pos_floorplan', player.getVariableValue('pos_floorplan') + Number("16.00"));
			me._floorplan.style.transition='none';
			me._floorplan.ggParameter.rx=0;me._floorplan.ggParameter.ry=player.getVariableValue('pos_floorplan', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''));
			me._floorplan.style.transform=parameterToTransform(me._floorplan.ggParameter);
		});
		player.addListener('sizechanged', function(event) {
			me._variable_resp_desktop.logicBlock();
			me._variable_resp_tablet.logicBlock();
			me._variable_resp_phone.logicBlock();
		});
		player.addListener('soundspermittedchanged', function(event) {
			me._variable_vis_sounds_splashscreen.logicBlock();
		});
		player.addListener('varchanged_categories_cloner_hasDown', function(event) {
			me._categories_cloner.logicBlock_position();
			me._pagination_container.logicBlock_visible();
			me._categories_down.logicBlock_visible();
			me._categories_down_disabled.logicBlock_visible();
		});
		player.addListener('varchanged_categories_cloner_hasUp', function(event) {
			me._categories_cloner.logicBlock_position();
			me._pagination_container.logicBlock_visible();
			me._categories_up.logicBlock_visible();
			me._categories_up_disabled.logicBlock_visible();
		});
		player.addListener('varchanged_has_categories', function(event) {
			me._thumbs_btn.logicBlock_visible();
			me._cloner_container.logicBlock_visible();
			me._nodes_scroller_phone.logicBlock_visible();
			me._categories_scroller_phone.logicBlock_visible();
		});
		player.addListener('varchanged_has_fullscreen', function(event) {
			me._toggle_fullscreen_btn.logicBlock_visible();
		});
		player.addListener('varchanged_opt_autorotation', function(event) {
			me._toggle_autorot_btn.logicBlock_visible();
		});
		player.addListener('varchanged_opt_floorplans', function(event) {
			me._floorplan_btn.logicBlock_visible();
		});
		player.addListener('varchanged_opt_fullscreen', function(event) {
			me._toggle_fullscreen_btn.logicBlock_visible();
		});
		player.addListener('varchanged_opt_gyro', function(event) {
			me._toggle_gyro_btn.logicBlock_visible();
		});
		player.addListener('varchanged_opt_info', function(event) {
			me._info_btn.logicBlock_visible();
		});
		player.addListener('varchanged_opt_maps', function(event) {
			me._map_btn.logicBlock_visible();
		});
		player.addListener('varchanged_opt_proj_title', function(event) {
			me._cloner_container.logicBlock_size();
			me._project_title.logicBlock_visible();
			me._project_title_phone.logicBlock_visible();
		});
		player.addListener('varchanged_opt_share', function(event) {
			me._share_btn.logicBlock_visible();
		});
		player.addListener('varchanged_opt_share_copy', function(event) {
			me._variable_opt_share.logicBlock();
			me._copy_btn.logicBlock_visible();
		});
		player.addListener('varchanged_opt_share_facebook', function(event) {
			me._variable_opt_share.logicBlock();
			me._facebook_btn.logicBlock_visible();
		});
		player.addListener('varchanged_opt_share_twitter', function(event) {
			me._variable_opt_share.logicBlock();
			me._twitter_btn.logicBlock_visible();
		});
		player.addListener('varchanged_resp_phone', function(event) {
			me._thumbs_btn.logicBlock_visible();
			me._cloner_container.logicBlock_visible();
			me._categories_cloner.logicBlock_visible();
			me._project_title.logicBlock_visible();
			me._project_title_phone.logicBlock_visible();
			me._screentint.logicBlock_visible();
			me._popup_close.logicBlock_visible();
		});
		player.addListener('varchanged_sounds_splashscreen_accepted', function(event) {
			me._variable_vis_sounds_splashscreen.logicBlock();
		});
		player.addListener('varchanged_toggle_audio', function(event) {
			me._toggle_audio_off.logicBlock_visible();
			me._toggle_audio_on.logicBlock_visible();
		});
		player.addListener('varchanged_vis_controls', function(event) {
			me._control_buttons.logicBlock_alpha();
			me._toggle_controls_off.logicBlock_visible();
			me._toggle_controls_on.logicBlock_visible();
			me._languages.logicBlock_visible();
			me._thumbs.logicBlock_visible();
			me._share.logicBlock_visible();
			me._info.logicBlock_visible();
			me._floorplan.logicBlock_visible();
			me._map.logicBlock_visible();
			me._cloner_container.logicBlock_alpha();
		});
		player.addListener('varchanged_vis_floorplan', function(event) {
			me._floorplan.logicBlock_alpha();
		});
		player.addListener('varchanged_vis_image_popup', function(event) {
			me._variable_vis_popup.logicBlock();
			me._image_popup.logicBlock_visible();
			me._popup_image.logicBlock_visible();
		});
		player.addListener('varchanged_vis_info', function(event) {
			me._info.logicBlock_alpha();
		});
		player.addListener('varchanged_vis_languages', function(event) {
			me._languages.logicBlock_alpha();
		});
		player.addListener('varchanged_vis_map', function(event) {
			me._map.logicBlock_alpha();
		});
		player.addListener('varchanged_vis_pdf_popup', function(event) {
			me._variable_vis_popup.logicBlock();
			me._map.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_floorplan', function(event) {
			me._variable_vis_popup.logicBlock();
			me._screentint_phone.logicBlock_visible();
			me._floorplan_el_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_image', function(event) {
			me._variable_vis_popup.logicBlock();
			me._screentint_phone.logicBlock_visible();
			me._image_popup_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_info', function(event) {
			me._variable_vis_popup.logicBlock();
			me._screentint_phone.logicBlock_visible();
			me._info_popup_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_map', function(event) {
			me._variable_vis_popup.logicBlock();
			me._screentint_phone.logicBlock_visible();
			me._map_el_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_nodes', function(event) {
			me._variable_vis_popup.logicBlock();
			me._back_to_categories_phone.logicBlock_visible();
			me._nodes_scroller_phone.logicBlock_visible();
			me._categories_scroller_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_pdf', function(event) {
			me._variable_vis_popup.logicBlock();
			me._screentint_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_thumbs', function(event) {
			me._variable_vis_popup.logicBlock();
			me._screentint_phone.logicBlock_visible();
			me._nodes_scroller_phone.logicBlock_visible();
			me._categories_scroller_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_video_file', function(event) {
			me._variable_vis_popup.logicBlock();
			me._screentint_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_video_url', function(event) {
			me._variable_vis_popup.logicBlock();
			me._screentint_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_vimeo', function(event) {
			me._variable_vis_popup.logicBlock();
			me._screentint_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_youtube', function(event) {
			me._variable_vis_popup.logicBlock();
			me._screentint_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_popup', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_info')) {
				for(var i = 0; i < hotspotTemplates['ht_info'].length; i++) {
					hotspotTemplates['ht_info'][i].ggEvent_varchanged_vis_popup();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_image')) {
				for(var i = 0; i < hotspotTemplates['ht_image'].length; i++) {
					hotspotTemplates['ht_image'][i].ggEvent_varchanged_vis_popup();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_varchanged_vis_popup();
				}
			}
			me._control_buttons.logicBlock_visible();
			me._toggle_controls.logicBlock_visible();
			me._languages.logicBlock_visible();
			me._thumbs.logicBlock_visible();
			me._share.logicBlock_visible();
			me._info.logicBlock_visible();
			me._floorplan.logicBlock_visible();
			me._map.logicBlock_visible();
			me._categories_cloner.logicBlock_visible();
			me._project_title.logicBlock_visible();
			me._project_title_phone.logicBlock_visible();
			me._screentint.logicBlock_visible();
			me._popup_close.logicBlock_visible();
		});
		player.addListener('varchanged_vis_share', function(event) {
			me._share.logicBlock_alpha();
		});
		player.addListener('varchanged_vis_skin', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_info')) {
				for(var i = 0; i < hotspotTemplates['ht_info'].length; i++) {
					hotspotTemplates['ht_info'][i].ggEvent_varchanged_vis_skin();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_image')) {
				for(var i = 0; i < hotspotTemplates['ht_image'].length; i++) {
					hotspotTemplates['ht_image'][i].ggEvent_varchanged_vis_skin();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_varchanged_vis_skin();
				}
			}
			me._toggle_controls.logicBlock_visible();
			me._project_title.logicBlock_visible();
			me._project_title_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_sounds_splashscreen', function(event) {
			me._variable_vis_skin.logicBlock();
			me._sounds_splashscreen.logicBlock_visible();
		});
		player.addListener('varchanged_vis_thumbs', function(event) {
			me._thumbs.logicBlock_alpha();
		});
		player.addListener('varchanged_vis_url_popup', function(event) {
			me._variable_vis_popup.logicBlock();
		});
		player.addListener('varchanged_vis_video_file_popup', function(event) {
			me._variable_vis_popup.logicBlock();
		});
		player.addListener('varchanged_vis_video_url_popup', function(event) {
			me._variable_vis_popup.logicBlock();
		});
		player.addListener('varchanged_vis_video_vimeo_popup', function(event) {
			me._variable_vis_popup.logicBlock();
		});
		player.addListener('varchanged_vis_video_youtube_popup', function(event) {
			me._variable_vis_popup.logicBlock();
			me._map.logicBlock_visible();
		});
		player.addListener('viewerinit', function(event) {
			for(var i = 0; i < me._categories_cloner.ggInstances.length; i++) {
				me._categories_cloner.ggInstances[i].ggEvent_viewerinit(event);
			}
			me._languages_cloner.ggUpdate();
			me._thumbs_cloner.ggUpdate();
			me._categories_cloner.ggUpdate();
			me._nodes_cloner_phone.ggUpdate();
			me._categories_cloner_phone.ggUpdate();
		});
		player.addListener('vrchanged', function(event) {
			me._vr_btn.logicBlock_visible();
		});
	};
	function SkinCloner_nodes_cloner_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._node_title_bg=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._node_title_bg;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="node_title_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.686275);';
		hs+='border-color : #ffffff;';
		hs+='border-style : solid;';
		hs+='border-width : 1px 0px 0px 0px;';
		hs+='cursor : pointer;';
		hs+='height : 28px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 170px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._node_title_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node_title_bg.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['node_title_bg'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._node_title_bg.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._node_title_bg.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._node_title_bg.style.transition='background-color 0s';
				if (me._node_title_bg.ggCurrentLogicStateBackgroundColor == 0) {
					me._node_title_bg.style.backgroundColor="rgba(223,224,54,1)";
				}
				else {
					me._node_title_bg.style.backgroundColor="rgba(255,255,255,0.686275)";
				}
			}
		}
		me._node_title_bg.logicBlock_backgroundcolor();
		me._node_title_bg.onclick=function (e) {
			if (me._node_title_bg.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
		}
		me._node_title_bg.onmouseenter=function (e) {
			me.elementMouseOver['node_title_bg']=true;
			me._node_title_bg.logicBlock_backgroundcolor();
		}
		me._node_title_bg.onmouseleave=function (e) {
			me.elementMouseOver['node_title_bg']=false;
			me._node_title_bg.logicBlock_backgroundcolor();
		}
		me._node_title_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._node_title=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._node_title;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._node_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="node_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text plex_sans_regular";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #ffffff;';
		hs+='color : #000000;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 142px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 0px 0px 8px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._node_title.ggUpdateText=function() {
			var params = [];
			params.push(player._(String(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._node_title.ggUpdateText();
		el.appendChild(els);
		me._node_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node_title.ggUpdatePosition=function (useTransition) {
		}
		me._node_title_bg.appendChild(me._node_title);
		el=me._node_visited=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._node_visited;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._node_visited__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDAwMDAwIiB3aWR0aD0iMThweCIgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGwtb3BhY2l0eT0iMSIgaGVpZ2h0PSIxOHB4Ij4KIDxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMFYweiIvPgogPHBhdGggZD0iTTkgMTYuMTdMNS41MyAxMi43Yy0uMzktLjM5LTEuMDItLjM5LTEuNDEgMC0uMzkuMzktLjM5IDEuMDIgMCAxLjQxbDQuMTggNC4xOGMuMzkuMzkgMS4wMi4zOSAxLjQxIDBMMjAuMjkgNy43MWMuMzktLjM5LjM5LTEuMDIgMC0xLjQxLS4zOS0uMzktMS4wMi0uMzktMS40MSAwTDkgMTYuMTd6Ii'+
			'8+Cjwvc3ZnPgo=';
		me._node_visited__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="node_visited";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 4px;';
		hs+='top : 4px;';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._node_visited.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node_visited.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._node_visited.ggElementNodeId()) == true)) || 
				((me._node_visited.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._node_visited.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._node_visited.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._node_visited.style.transition='';
				if (me._node_visited.ggCurrentLogicStateVisible == 0) {
					me._node_visited.style.visibility=(Number(me._node_visited.style.opacity)>0||!me._node_visited.style.opacity)?'inherit':'hidden';
					me._node_visited.ggVisible=true;
				}
				else {
					me._node_visited.style.visibility="hidden";
					me._node_visited.ggVisible=false;
				}
			}
		}
		me._node_visited.logicBlock_visible();
		me._node_visited.ggUpdatePosition=function (useTransition) {
		}
		me._node_title_bg.appendChild(me._node_visited);
		me.__div.appendChild(me._node_title_bg);
		me._node_title_bg.logicBlock_backgroundcolor();
		me.elementMouseOver['node_title_bg']=false;
		me._node_visited.logicBlock_visible();
			me.ggEvent_changenode=function(event) {
				me._node_visited.logicBlock_visible();
				me._node_visited.logicBlock_visible();
			};
			me.ggEvent_changevisitednodes=function(event) {
				me._node_visited.logicBlock_visible();
			};
	};
	function SkinCloner_categories_cloner_phone_Class(item, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggTag = item['tag'];
		me.ggTitle = item['title'];
		me.ggDescription = item['description'];
		me.ggNodeCount = item['nodecount'];
		me.ggNodeId=item['firstnode'];
		let nodeId=item['firstnode'];
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				var tags = player.userdata.tags;
				if (tags.indexOf(me.ggTag) == -1) return false;
				for(var i=0;i<me.ggParent.ggCurrentFilter.length;i++) {
					if (tags.indexOf(me.ggParent.ggCurrentFilter[i])==-1) return false;
				}
				return true;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._category_image_phone=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._category_image_phone;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._category_image_phone__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		if (nodeId) els.setAttribute('src',basePath + "images/category_image_phone_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 4px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="category_image_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='height : 90px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._category_image_phone.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._category_image_phone.onclick=function (e) {
			if (me._category_image_phone.isDragging()) return;
			skin._nodes_cloner_phone.ggText=me.ggTag;
			if (skin._nodes_cloner_phone.ggText=='') {
				skin._nodes_cloner_phone.ggUpdate([]);
			} else {
				skin._nodes_cloner_phone.ggUpdate(skin._nodes_cloner_phone.ggText.split(','));
			}
			skin.updateSize(skin.divSkin);
			player.setVariableValue('vis_phone_nodes', true);
		}
		me._category_image_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._category_title_phone=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._category_title_phone;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._category_title_phone__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="category_title_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text plex_sans_regular svg_shadow";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 18px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._category_title_phone.ggUpdateText=function() {
			var params = [];
			params.push(player._(String(me.ggTitle)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._category_title_phone.ggUpdateText();
		player.addListener('clonerchanged', function() {
			me._category_title_phone.ggUpdateText();
		});
		el.appendChild(els);
		me._category_title_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._category_title_phone.ggUpdatePosition=function (useTransition) {
		}
		me._category_image_phone.appendChild(me._category_title_phone);
		me.__div.appendChild(me._category_image_phone);
	};
	function SkinCloner_nodes_cloner_phone_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._node_image_phone=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._node_image_phone;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._node_image_phone__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.loading = 'lazy';
		if (nodeId) els.setAttribute('src',basePath + "images/category_image_phone_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 4px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="node_image_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='height : 90px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._node_image_phone.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._node_image_phone.onclick=function (e) {
			if (me._node_image_phone.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
			player.setVariableValue('vis_phone_nodes', false);
			player.setVariableValue('vis_phone_thumbs', false);
		}
		me._node_image_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._node_title_phone=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._node_title_phone;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._node_title_phone__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="node_title_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text plex_sans_regular svg_shadow";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 18px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._node_title_phone.ggUpdateText=function() {
			var params = [];
			params.push(player._(String(me.ggTitle)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._node_title_phone.ggUpdateText();
		player.addListener('clonerchanged', function() {
			me._node_title_phone.ggUpdateText();
		});
		el.appendChild(els);
		me._node_title_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node_title_phone.ggUpdatePosition=function (useTransition) {
		}
		me._node_image_phone.appendChild(me._node_title_phone);
		me.__div.appendChild(me._node_image_phone);
	};
	function SkinCloner_thumbs_cloner_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._thumb_title_bg=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumb_title_bg;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="thumb_title_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle backdrop-filter: blur(2px); -webkit-backdrop-filter: blur(2px);";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.745098);';
		hs+='border-color : #ffffff;';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 1px 0px;';
		hs+='cursor : pointer;';
		hs+='height : 28px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumb_title_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumb_title_bg.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['thumb_title_bg'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._thumb_title_bg.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._thumb_title_bg.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._thumb_title_bg.style.transition='background-color 0s';
				if (me._thumb_title_bg.ggCurrentLogicStateBackgroundColor == 0) {
					me._thumb_title_bg.style.backgroundColor="rgba(223,224,54,1)";
				}
				else {
					me._thumb_title_bg.style.backgroundColor="rgba(255,255,255,0.745098)";
				}
			}
		}
		me._thumb_title_bg.logicBlock_backgroundcolor();
		me._thumb_title_bg.onclick=function (e) {
			if (me._thumb_title_bg.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
		}
		me._thumb_title_bg.onmouseenter=function (e) {
			me.elementMouseOver['thumb_title_bg']=true;
			me._thumb_title_bg.logicBlock_backgroundcolor();
		}
		me._thumb_title_bg.onmouseleave=function (e) {
			me.elementMouseOver['thumb_title_bg']=false;
			me._thumb_title_bg.logicBlock_backgroundcolor();
		}
		me._thumb_title_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumb_title=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumb_title;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumb_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="thumb_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text plex_sans_regular";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #ffffff;';
		hs+='color : #000000;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : 15px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 55px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 0px 0px 8px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._thumb_title.ggUpdateText=function() {
			var params = [];
			params.push(player._(String(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._thumb_title.ggUpdateText();
		el.appendChild(els);
		me._thumb_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumb_title.ggUpdatePosition=function (useTransition) {
		}
		me._thumb_title_bg.appendChild(me._thumb_title);
		el=me._thumb_visited=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumb_visited;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumb_visited__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDAwMDAwIiB3aWR0aD0iMThweCIgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGwtb3BhY2l0eT0iMSIgaGVpZ2h0PSIxOHB4Ij4KIDxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMFYweiIvPgogPHBhdGggZD0iTTkgMTYuMTdMNS41MyAxMi43Yy0uMzktLjM5LTEuMDItLjM5LTEuNDEgMC0uMzkuMzktLjM5IDEuMDIgMCAxLjQxbDQuMTggNC4xOGMuMzkuMzkgMS4wMi4zOSAxLjQxIDBMMjAuMjkgNy43MWMuMzktLjM5LjM5LTEuMDIgMC0xLjQxLS4zOS0uMzktMS4wMi0uMzktMS40MSAwTDkgMTYuMTd6Ii'+
			'8+Cjwvc3ZnPgo=';
		me._thumb_visited__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumb_visited";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 15px;';
		hs+='top : 4px;';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumb_visited.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumb_visited.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._thumb_visited.ggElementNodeId()) == true)) || 
				((me._thumb_visited.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumb_visited.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumb_visited.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumb_visited.style.transition='';
				if (me._thumb_visited.ggCurrentLogicStateVisible == 0) {
					me._thumb_visited.style.visibility=(Number(me._thumb_visited.style.opacity)>0||!me._thumb_visited.style.opacity)?'inherit':'hidden';
					me._thumb_visited.ggVisible=true;
				}
				else {
					me._thumb_visited.style.visibility="hidden";
					me._thumb_visited.ggVisible=false;
				}
			}
		}
		me._thumb_visited.logicBlock_visible();
		me._thumb_visited.ggUpdatePosition=function (useTransition) {
		}
		me._thumb_title_bg.appendChild(me._thumb_visited);
		me.__div.appendChild(me._thumb_title_bg);
		me._thumb_title_bg.logicBlock_backgroundcolor();
		me.elementMouseOver['thumb_title_bg']=false;
		me._thumb_visited.logicBlock_visible();
			me.ggEvent_changenode=function(event) {
				me._thumb_visited.logicBlock_visible();
				me._thumb_visited.logicBlock_visible();
			};
			me.ggEvent_changevisitednodes=function(event) {
				me._thumb_visited.logicBlock_visible();
			};
	};
	function SkinCloner_languages_cloner_Class(item, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggTag = item['tag'];
		me.ggTitle = item['title'];
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return true;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._language_title_bg=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._language_title_bg;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="language_title_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle backdrop-filter: blur(2px); -webkit-backdrop-filter: blur(2px);";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.745098);';
		hs+='border-color : #ffffff;';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 1px 0px;';
		hs+='cursor : pointer;';
		hs+='height : 28px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._language_title_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._language_title_bg.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['language_title_bg'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._language_title_bg.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._language_title_bg.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._language_title_bg.style.transition='background-color 0s';
				if (me._language_title_bg.ggCurrentLogicStateBackgroundColor == 0) {
					me._language_title_bg.style.backgroundColor="rgba(223,224,54,1)";
				}
				else {
					me._language_title_bg.style.backgroundColor="rgba(255,255,255,0.745098)";
				}
			}
		}
		me._language_title_bg.logicBlock_backgroundcolor();
		me._language_title_bg.onclick=function (e) {
			if (me._language_title_bg.isDragging()) return;
			player.setLanguage(me.ggTag);
			player.setVariableValue('vis_languages', false);
		}
		me._language_title_bg.onmouseenter=function (e) {
			me.elementMouseOver['language_title_bg']=true;
			me._language_title_bg.logicBlock_backgroundcolor();
		}
		me._language_title_bg.onmouseleave=function (e) {
			me.elementMouseOver['language_title_bg']=false;
			me._language_title_bg.logicBlock_backgroundcolor();
		}
		me._language_title_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._lang_title=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._lang_title;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._lang_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="lang_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text plex_sans_regular";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #ffffff;';
		hs+='color : #000000;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : 15px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 55px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 0px 0px 8px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._lang_title.ggUpdateText=function() {
			var params = [];
			params.push(player._(String(me.ggTitle)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._lang_title.ggUpdateText();
		player.addListener('clonerchanged', function() {
			me._lang_title.ggUpdateText();
		});
		el.appendChild(els);
		me._lang_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._lang_title.ggUpdatePosition=function (useTransition) {
		}
		me._language_title_bg.appendChild(me._lang_title);
		me.__div.appendChild(me._language_title_bg);
		me._language_title_bg.logicBlock_backgroundcolor();
		me.elementMouseOver['language_title_bg']=false;
	};
	function SkinCloner_categories_cloner_Class(item, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggTag = item['tag'];
		me.ggTitle = item['title'];
		me.ggDescription = item['description'];
		me.ggNodeCount = item['nodecount'];
		me.ggNodeId=item['firstnode'];
		let nodeId=item['firstnode'];
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				var tags = player.userdata.tags;
				if (tags.indexOf(me.ggTag) == -1) return false;
				for(var i=0;i<me.ggParent.ggCurrentFilter.length;i++) {
					if (tags.indexOf(me.ggParent.ggCurrentFilter[i])==-1) return false;
				}
				return true;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._category_container=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="category_container";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 28px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 170px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._category_container.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._category_container.onmouseenter=function (e) {
			me.elementMouseOver['category_container']=true;
			me._nodes_scroller.logicBlock_visible();
		}
		me._category_container.onmouseleave=function (e) {
			me.elementMouseOver['category_container']=false;
			me._nodes_scroller.logicBlock_visible();
		}
		me._category_container.ggUpdatePosition=function (useTransition) {
		}
		el=me._nodes_scroller=document.createElement('div');
		els=me._nodes_scroller__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 27px;';
		hs+='left : 0px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 169px;';
		hs+="";
		els.setAttribute('style',hs);
		me._nodes_scroller.ggScrollByX = function(diffX) {
			if(!me._nodes_scroller.ggHorScrollVisible || diffX == 0 || me._nodes_scroller.ggHPercentVisible >= 1.0) return;
			me._nodes_scroller.ggScrollPosX = (me._nodes_scroller__horScrollFg.offsetLeft + diffX);
			me._nodes_scroller.ggScrollPosX = Math.max(me._nodes_scroller.ggScrollPosX, 0);
			me._nodes_scroller.ggScrollPosX = Math.min(me._nodes_scroller.ggScrollPosX, me._nodes_scroller__horScrollBg.offsetWidth - me._nodes_scroller__horScrollFg.offsetWidth);
			me._nodes_scroller__horScrollFg.style.left = me._nodes_scroller.ggScrollPosX + 'px';
			let percentScrolled = me._nodes_scroller.ggScrollPosX / (me._nodes_scroller__horScrollBg.offsetWidth - me._nodes_scroller__horScrollFg.offsetWidth);
			me._nodes_scroller__content.style.left = -(Math.round((me._nodes_scroller.ggContentWidth * (1.0 - me._nodes_scroller.ggHPercentVisible)) * percentScrolled)) + me._nodes_scroller.ggContentLeftOffset + 'px';
			me._nodes_scroller.ggScrollPosXPercent = (me._nodes_scroller__horScrollFg.offsetLeft / me._nodes_scroller__horScrollBg.offsetWidth);
		}
		me._nodes_scroller.ggScrollByXSmooth = function(diffX) {
			if(!me._nodes_scroller.ggHorScrollVisible || diffX == 0 || me._nodes_scroller.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._nodes_scroller.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._nodes_scroller.ggScrollPosX >= me._nodes_scroller__horScrollBg.offsetWidth - me._nodes_scroller__horScrollFg.offsetWidth)) {
					me._nodes_scroller.ggScrollPosX = Math.min(me._nodes_scroller.ggScrollPosX, me._nodes_scroller__horScrollBg.offsetWidth - me._nodes_scroller__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._nodes_scroller.ggScrollPosX <= 0)) {
					me._nodes_scroller.ggScrollPosX = Math.max(me._nodes_scroller.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._nodes_scroller__horScrollFg.style.left = me._nodes_scroller.ggScrollPosX + 'px';
			let percentScrolled = me._nodes_scroller.ggScrollPosX / (me._nodes_scroller__horScrollBg.offsetWidth - me._nodes_scroller__horScrollFg.offsetWidth);
			me._nodes_scroller__content.style.left = -(Math.round((me._nodes_scroller.ggContentWidth * (1.0 - me._nodes_scroller.ggHPercentVisible)) * percentScrolled)) + me._nodes_scroller.ggContentLeftOffset + 'px';
			me._nodes_scroller.ggScrollPosXPercent = (me._nodes_scroller__horScrollFg.offsetLeft / me._nodes_scroller__horScrollBg.offsetWidth);
			}, 10);
		}
		me._nodes_scroller.ggScrollByY = function(diffY) {
			if(!me._nodes_scroller.ggVertScrollVisible || diffY == 0 || me._nodes_scroller.ggVPercentVisible >= 1.0) return;
			me._nodes_scroller.ggScrollPosY = (me._nodes_scroller__vertScrollFg.offsetTop + diffY);
			me._nodes_scroller.ggScrollPosY = Math.max(me._nodes_scroller.ggScrollPosY, 0);
			me._nodes_scroller.ggScrollPosY = Math.min(me._nodes_scroller.ggScrollPosY, me._nodes_scroller__vertScrollBg.offsetHeight - me._nodes_scroller__vertScrollFg.offsetHeight);
			me._nodes_scroller__vertScrollFg.style.top = me._nodes_scroller.ggScrollPosY + 'px';
			let percentScrolled = me._nodes_scroller.ggScrollPosY / (me._nodes_scroller__vertScrollBg.offsetHeight - me._nodes_scroller__vertScrollFg.offsetHeight);
			me._nodes_scroller__content.style.top = -(Math.round((me._nodes_scroller.ggContentHeight * (1.0 - me._nodes_scroller.ggVPercentVisible)) * percentScrolled)) + me._nodes_scroller.ggContentTopOffset + 'px';
			me._nodes_scroller.ggScrollPosYPercent = (me._nodes_scroller__vertScrollFg.offsetTop / me._nodes_scroller__vertScrollBg.offsetHeight);
		}
		me._nodes_scroller.ggScrollByYSmooth = function(diffY) {
			if(!me._nodes_scroller.ggVertScrollVisible || diffY == 0 || me._nodes_scroller.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._nodes_scroller.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._nodes_scroller.ggScrollPosY >= me._nodes_scroller__vertScrollBg.offsetHeight - me._nodes_scroller__vertScrollFg.offsetHeight)) {
					me._nodes_scroller.ggScrollPosY = Math.min(me._nodes_scroller.ggScrollPosY, me._nodes_scroller__vertScrollBg.offsetHeight - me._nodes_scroller__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._nodes_scroller.ggScrollPosY <= 0)) {
					me._nodes_scroller.ggScrollPosY = Math.max(me._nodes_scroller.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._nodes_scroller__vertScrollFg.style.top = me._nodes_scroller.ggScrollPosY + 'px';
			let percentScrolled = me._nodes_scroller.ggScrollPosY / (me._nodes_scroller__vertScrollBg.offsetHeight - me._nodes_scroller__vertScrollFg.offsetHeight);
			me._nodes_scroller__content.style.top = -(Math.round((me._nodes_scroller.ggContentHeight * (1.0 - me._nodes_scroller.ggVPercentVisible)) * percentScrolled)) + me._nodes_scroller.ggContentTopOffset + 'px';
			me._nodes_scroller.ggScrollPosYPercent = (me._nodes_scroller__vertScrollFg.offsetTop / me._nodes_scroller__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._nodes_scroller.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._nodes_scroller.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._nodes_scroller.ggHPercentVisible);
					me._nodes_scroller.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._nodes_scroller.clientWidth - (me._nodes_scroller.ggVertScrollVisible ? 7 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._nodes_scroller.clientWidth - (me._nodes_scroller.ggVertScrollVisible ? 7 : 0))) * me._nodes_scroller.ggHPercentVisible);
					me._nodes_scroller.ggScrollByXSmooth(diffX);
				}
			}
			if (me._nodes_scroller.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._nodes_scroller.ggVPercentVisible);
					me._nodes_scroller.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._nodes_scroller.clientHeight - (me._nodes_scroller.ggHorScrollVisible ? 7 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._nodes_scroller.clientHeight - (me._nodes_scroller.ggHorScrollVisible ? 7 : 0))) * me._nodes_scroller.ggVPercentVisible);
					me._nodes_scroller.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._nodes_scroller__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._nodes_scroller.ggDragInertiaX *= 0.96;
				me._nodes_scroller.ggDragInertiaY *= 0.96;
				me._nodes_scroller.ggScrollByX(me._nodes_scroller.ggDragInertiaX);
				me._nodes_scroller.ggScrollByY(me._nodes_scroller.ggDragInertiaY);
				if (Math.abs(me._nodes_scroller.ggDragInertiaX) < 1.0 && Math.abs(me._nodes_scroller.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 10);
			me._nodes_scroller__content.onmouseup = null;
			me._nodes_scroller__content.onmousemove = null;
			me._nodes_scroller__content.ontouchend = null;
			me._nodes_scroller__content.ontouchmove = null;
			me._nodes_scroller__content.onpointerup = null;
			me._nodes_scroller__content.onpointermove = null;
			setTimeout(function() { me._nodes_scroller.ggIsDragging = false; }, 100);
		}
		me._nodes_scroller__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._nodes_scroller.ggDragStartX) > 10 || Math.abs(eventY - me._nodes_scroller.ggDragStartY) > 10) me._nodes_scroller.ggIsDragging = true;
			var diffX = (eventX - me._nodes_scroller.ggDragLastX) * me._nodes_scroller.ggHPercentVisible;
			var diffY = (eventY - me._nodes_scroller.ggDragLastY) * me._nodes_scroller.ggVPercentVisible;
			me._nodes_scroller.ggDragInertiaX = -diffX;
			me._nodes_scroller.ggDragInertiaY = -diffY;
			me._nodes_scroller.ggDragLastX = eventX;
			me._nodes_scroller.ggDragLastY = eventY;
			me._nodes_scroller.ggScrollByX(-diffX);
			me._nodes_scroller.ggScrollByY(-diffY);
		}
		me._nodes_scroller__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._nodes_scroller.ggDragLastX = me._nodes_scroller.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._nodes_scroller.ggDragLastY = me._nodes_scroller.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._nodes_scroller__content.onmouseup = me._nodes_scroller__content.mousetouchend;
			me._nodes_scroller__content.ontouchend = me._nodes_scroller__content.mousetouchend;
			me._nodes_scroller__content.onmousemove = me._nodes_scroller__content.mousetouchmove;
			me._nodes_scroller__content.ontouchmove = me._nodes_scroller__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._nodes_scroller__content.onpointerup = me._nodes_scroller__content.ontouchend;
				me._nodes_scroller__content.onpointermove = me._nodes_scroller__content.ontouchmove;
			}
		}
		els.onmousedown = me._nodes_scroller__content.mousetouchstart;
		els.ontouchstart = me._nodes_scroller__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._nodes_scroller__content.mousetouchstart;
		}
		elVertScrollBg = me._nodes_scroller__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 7px; height: 300px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._nodes_scroller__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 7px; height: 300px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._nodes_scroller.ggScrollPosY = 0;
		me._nodes_scroller.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._nodes_scroller.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._nodes_scroller.ggDragInertiaY *= 0.96;
					me._nodes_scroller.ggScrollByY(me._nodes_scroller.ggDragInertiaY);
					if (Math.abs(me._nodes_scroller.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._nodes_scroller.ggDragLastY;
				me._nodes_scroller.ggDragInertiaY = diffY;
				me._nodes_scroller.ggDragLastY = e.clientY;
				me._nodes_scroller.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._nodes_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._nodes_scroller.ggDragInertiaY *= 0.96;
					me._nodes_scroller.ggScrollByY(me._nodes_scroller.ggDragInertiaY);
					if (Math.abs(me._nodes_scroller.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me._nodes_scroller.ggDragLastY;
				me._nodes_scroller.ggDragInertiaY = diffY;
				me._nodes_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._nodes_scroller.ggScrollByY(diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._nodes_scroller.ggScrollHeight;
			if (e.offsetY < me._nodes_scroller.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._nodes_scroller.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._nodes_scroller__vertScrollBg.getBoundingClientRect();
			var diffY = me._nodes_scroller.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._nodes_scroller.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._nodes_scroller.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._nodes_scroller.ggScrollByYSmooth(30 * me._nodes_scroller.ggVPercentVisible * wheelDelta);
		});
		elCornerBg = me._nodes_scroller__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 7px; height: 7px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="nodes_scroller";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : 300px;';
		hs+='left : 0px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 28px;';
		hs+='visibility : hidden;';
		hs+='width : 170px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._nodes_scroller.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._nodes_scroller.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['category_container'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._nodes_scroller.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._nodes_scroller.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._nodes_scroller.style.transition='';
				if (me._nodes_scroller.ggCurrentLogicStateVisible == 0) {
					me._nodes_scroller.style.visibility=(Number(me._nodes_scroller.style.opacity)>0||!me._nodes_scroller.style.opacity)?'inherit':'hidden';
					me._nodes_scroller.ggVisible=true;
				}
				else {
					me._nodes_scroller.style.visibility="hidden";
					me._nodes_scroller.ggVisible=false;
				}
			}
		}
		me._nodes_scroller.logicBlock_visible();
		me._nodes_scroller.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = -(Math.round(me._nodes_scroller.ggScrollPosY / me._nodes_scroller.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if ((me._nodes_scroller.ggHorScrollVisible && contentHeight > this.clientHeight - 7) || (!me._nodes_scroller.ggHorScrollVisible && contentHeight > this.clientHeight)) {
					me._nodes_scroller__vertScrollBg.style.visibility = 'inherit';
					me._nodes_scroller__vertScrollFg.style.visibility = 'inherit';
					me._nodes_scroller.ggVertScrollVisible = true;
				} else {
					me._nodes_scroller__vertScrollBg.style.visibility = 'hidden';
					me._nodes_scroller__vertScrollFg.style.visibility = 'hidden';
					me._nodes_scroller.ggVertScrollVisible = false;
				}
				if(me._nodes_scroller.ggVertScrollVisible) {
					me._nodes_scroller.ggAvailableWidth = me._nodes_scroller.clientWidth - 7;
					if (me._nodes_scroller.ggHorScrollVisible) {
						me._nodes_scroller.ggAvailableHeight = me._nodes_scroller.clientHeight - 7;
						me._nodes_scroller.ggAvailableHeightWithScale = me._nodes_scroller.getBoundingClientRect().height - me._nodes_scroller__vertScrollBg.getBoundingClientRect().width;
						me._nodes_scroller__cornerBg.style.visibility = 'inherit';
					} else {
						me._nodes_scroller.ggAvailableHeight = me._nodes_scroller.clientHeight;
						me._nodes_scroller.ggAvailableHeightWithScale = me._nodes_scroller.getBoundingClientRect().height;
						me._nodes_scroller__cornerBg.style.visibility = 'hidden';
					}
					me._nodes_scroller__vertScrollBg.style.height = me._nodes_scroller.ggAvailableHeight + 'px';
					me._nodes_scroller.ggVPercentVisible = contentHeight != 0 ? me._nodes_scroller.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._nodes_scroller.ggVPercentVisible > 1.0) me._nodes_scroller.ggVPercentVisible = 1.0;
					me._nodes_scroller.ggScrollHeight =  Math.round(me._nodes_scroller__vertScrollBg.offsetHeight * me._nodes_scroller.ggVPercentVisible);
					me._nodes_scroller__vertScrollFg.style.height = me._nodes_scroller.ggScrollHeight + 'px';
					me._nodes_scroller.ggScrollPosY = me._nodes_scroller.ggScrollPosYPercent * me._nodes_scroller.ggAvailableHeight;
					me._nodes_scroller.ggScrollPosY = Math.min(me._nodes_scroller.ggScrollPosY, me._nodes_scroller__vertScrollBg.offsetHeight - me._nodes_scroller__vertScrollFg.offsetHeight);
					me._nodes_scroller__vertScrollFg.style.top = me._nodes_scroller.ggScrollPosY + 'px';
					if (me._nodes_scroller.ggVPercentVisible < 1.0) {
						let percentScrolled = me._nodes_scroller.ggScrollPosY / (me._nodes_scroller__vertScrollBg.offsetHeight - me._nodes_scroller__vertScrollFg.offsetHeight);
						me._nodes_scroller__content.style.top = -(Math.round((me._nodes_scroller.ggContentHeight * (1.0 - me._nodes_scroller.ggVPercentVisible)) * percentScrolled)) + me._nodes_scroller.ggContentTopOffset + 'px';
					}
				} else {
					me._nodes_scroller.ggAvailableWidth = me._nodes_scroller.clientWidth;
					me._nodes_scroller.ggScrollPosY = 0;
					me._nodes_scroller.ggScrollPosYPercent = 0.0;
					me._nodes_scroller__content.style.top = this.ggContentTopOffset + 'px';
					me._nodes_scroller__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._nodes_scroller.ggHorScrollVisible || vertScrollWasVisible != me._nodes_scroller.ggVertScrollVisible) {
					skin.updateSize(me._nodes_scroller);
					me._nodes_scroller.ggUpdatePosition();
				}
			}
		}
		el=me._nodes_cloner=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._nodes_cloner;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 170;
		el.ggHeight = 28;
		el.ggSizeChanged = false;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me._nodes_cloner.ggUpdating == true) return;
			me._nodes_cloner.ggUpdating = true;
			var el=me._nodes_cloner;
			var curNumCols = 0;
			curNumCols = me._nodes_cloner.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (parentScope.ggTag) filter.push(parentScope.ggTag);
			filter=filter.concat(parentScope._categories_cloner.ggFilter);
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && !el.ggSizeChanged && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._nodes_cloner.ggUpdating = false;
				return;
			} else {
				el.ggSizeChanged = false;
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._nodes_cloner.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			if (tourNodes.length == 0) {
				me._nodes_cloner.ggUpdating = false;
				return;
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me._nodes_cloner.getFilteredNodes(tourNodes, filter);
			me._nodes_cloner.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me._nodes_cloner.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._nodes_cloner.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._nodes_cloner.ggWidth) + 'px';
				parameter.width=me._nodes_cloner.ggWidth + 'px';
				parameter.height=me._nodes_cloner.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_nodes_cloner_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me._nodes_cloner.ggNodeCount = me._nodes_cloner.ggNumFilterPassed;
			me._nodes_cloner.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._nodes_cloner.parentNode && me._nodes_cloner.parentNode.classList.contains('ggskin_subelement') && me._nodes_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._nodes_cloner.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggId="nodes_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 28px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 170px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._nodes_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._nodes_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._nodes_cloner.childNodes.length; i++) {
				var child=me._nodes_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._nodes_cloner.ggUpdatePosition=function (useTransition) {
			me._nodes_cloner.ggUpdate();
		}
		me._nodes_scroller__content.appendChild(me._nodes_cloner);
		me._category_container.appendChild(me._nodes_scroller);
		el=me._category_bg=document.createElement('div');
		el.ggId="category_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.686275);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 28px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 170px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._category_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._category_bg.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['category_bg'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._category_bg.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._category_bg.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._category_bg.style.transition='background-color 0s';
				if (me._category_bg.ggCurrentLogicStateBackgroundColor == 0) {
					me._category_bg.style.backgroundColor="rgba(223,224,54,1)";
				}
				else {
					me._category_bg.style.backgroundColor="rgba(255,255,255,0.686275)";
				}
			}
		}
		me._category_bg.logicBlock_backgroundcolor();
		me._category_bg.onmouseenter=function (e) {
			me.elementMouseOver['category_bg']=true;
			me._category_bg.logicBlock_backgroundcolor();
		}
		me._category_bg.onmouseleave=function (e) {
			me.elementMouseOver['category_bg']=false;
			me._category_bg.logicBlock_backgroundcolor();
		}
		me._category_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._category_title=document.createElement('div');
		els=me._category_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="category_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text plex_sans_medium";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 170px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 8px 0px 8px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._category_title.ggUpdateText=function() {
			var params = [];
			params.push(player._(String(me.ggTitle)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._category_title.ggUpdateText();
		player.addListener('clonerchanged', function() {
			me._category_title.ggUpdateText();
		});
		el.appendChild(els);
		me._category_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._category_title.ggUpdatePosition=function (useTransition) {
		}
		me._category_bg.appendChild(me._category_title);
		me._category_container.appendChild(me._category_bg);
		me.__div.appendChild(me._category_container);
		me.elementMouseOver['category_container']=false;
		me._nodes_scroller.logicBlock_visible();
		me._category_bg.logicBlock_backgroundcolor();
		me.elementMouseOver['category_bg']=false;
			me.ggEvent_changenode=function(event) {
				for(var i = 0; i < me._nodes_cloner.ggInstances.length; i++) {
					me._nodes_cloner.ggInstances[i].ggEvent_changenode(event);
				}
				me._nodes_cloner.ggUpdateConditionNodeChange();
			};
			me.ggEvent_changevisitednodes=function(event) {
				for(var i = 0; i < me._nodes_cloner.ggInstances.length; i++) {
					me._nodes_cloner.ggInstances[i].ggEvent_changevisitednodes(event);
				}
			};
			me.ggEvent_configloaded=function(event) {
				me._nodes_scroller.ggUpdatePosition();
			};
			me.ggEvent_viewerinit=function(event) {
				me._nodes_cloner.ggUpdate();
			};
	};
	function SkinElement_map_pin_Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.ggUserdata.nodeid=nodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me._map_pin=document.createElement('div');
		el.ggId="map_pin";
		el.ggDx=-147;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 250px;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) - 147px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_pin.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._map_pin.onclick=function (e) {
			player.openNext("{"+me.ggNodeId+"}","");
			player.setVariableValue('vis_phone_map', false);
			player.setVariableValue('vis_phone_floorplan', false);
		}
		me._map_pin.onmouseenter=function (e) {
			if (
				(
					((me.ggUserdata.title != ""))
				)
			) {
				if (player.transitionsDisabled) {
					me._pin_title.style.transition='none';
				} else {
					me._pin_title.style.transition='all 200ms ease-out 0ms';
				}
				me._pin_title.style.opacity='1';
				me._pin_title.style.visibility=me._pin_title.ggVisible?'inherit':'hidden';
			}
			me.elementMouseOver['map_pin']=true;
		}
		me._map_pin.onmouseleave=function (e) {
			if (player.transitionsDisabled) {
				me._pin_title.style.transition='none';
			} else {
				me._pin_title.style.transition='all 200ms ease-out 0ms';
			}
			me._pin_title.style.opacity='0';
			me._pin_title.style.visibility='hidden';
			me.elementMouseOver['map_pin']=false;
		}
		me._map_pin.ggUpdatePosition=function (useTransition) {
		}
		el=me._pin_active=document.createElement('div');
		els=me._pin_active__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDE4IDE4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHk9IjBweCIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE4ID'+
			'E4OyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDojZGZlMDM2O30mI3hkOwo8L3N0eWxlPgogPGc+CiAgPHJlY3Qgd2lkdGg9IjE4IiBjbGFzcz0ic3QwIiBoZWlnaHQ9IjE4Ii8+CiA8L2c+CiA8Zz4KICA8cGF0aCBkPSJNOSwxLjVjLTMuMSwwLTYsMi40LTYsNi4xYzAsMi40LDEuOCw1LjIsNS41LDguNGMwLjMsMC4yLDAuNywwLjIsMSwwYzMuNy0zLjIsNS41LTYsNS41LTguNCYjeGQ7JiN4YTsmI3g5OyYjeDk7QzE1LDMuOSwxMi4yLDEuNSw5LDEuNXogTTksOUM4LjIsOSw3LjUsOC4zLDcuNSw3LjVTOC4yLDYsOSw2czEu'+
			'NSwwLjcsMS41LDEuNVM5LjgsOSw5LDl6IiBjbGFzcz0ic3QxIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._pin_active__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="pin_active";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pin_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._pin_active.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._pin_active.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._pin_active.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._pin_active.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._pin_active.style.transition='';
				if (me._pin_active.ggCurrentLogicStateVisible == 0) {
					me._pin_active.style.visibility=(Number(me._pin_active.style.opacity)>0||!me._pin_active.style.opacity)?'inherit':'hidden';
					me._pin_active.ggVisible=true;
				}
				else {
					me._pin_active.style.visibility="hidden";
					me._pin_active.ggVisible=false;
				}
			}
		}
		me._pin_active.logicBlock_visible();
		me._pin_active.ggUpdatePosition=function (useTransition) {
		}
		me._map_pin.appendChild(me._pin_active);
		el=me._pin_normal=document.createElement('div');
		els=me._pin_normal__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDAwMDAwIiB3aWR0aD0iMThweCIgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGwtb3BhY2l0eT0iMSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjQgMjQiIGhlaWdodD0iMThweCI+CiA8Zz4KICA8cmVjdCBmaWxsPSJub25lIiB3aWR0aD0iMjQiIHk9IjAiIGhlaWdodD0iMjQiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGQ9Ik0xMiwyYy00LjIsMC04LDMuMjItOCw4LjJjMCwzLjE4LDIuNDUsNi45Miw3LjM0LDExLjIzYzAuMzgsMC4zMywwLjk1LDAuMzMsMS4zMywwIEMxNy41NSwxNy4xMiwyMCwxMy4zOCwyMC'+
			'wxMC4yQzIwLDUuMjIsMTYuMiwyLDEyLDJ6IE0xMiwxMmMtMS4xLDAtMi0wLjktMi0yYzAtMS4xLDAuOS0yLDItMmMxLjEsMCwyLDAuOSwyLDIgQzE0LDExLjEsMTMuMSwxMiwxMiwxMnoiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXciLz4KIDwvZz4KPC9zdmc+Cg==';
		me._pin_normal__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="pin_normal";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pin_normal.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._pin_normal.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._pin_normal.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._pin_normal.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._pin_normal.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._pin_normal.style.transition='';
				if (me._pin_normal.ggCurrentLogicStateVisible == 0) {
					me._pin_normal.style.visibility="hidden";
					me._pin_normal.ggVisible=false;
				}
				else {
					me._pin_normal.style.visibility=(Number(me._pin_normal.style.opacity)>0||!me._pin_normal.style.opacity)?'inherit':'hidden';
					me._pin_normal.ggVisible=true;
				}
			}
		}
		me._pin_normal.logicBlock_visible();
		me._pin_normal.ggUpdatePosition=function (useTransition) {
		}
		me._map_pin.appendChild(me._pin_normal);
		el=me._pin_title=document.createElement('div');
		els=me._pin_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="pin_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, 0px) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text plex_sans_regular";
		el.ggType='text';
		hs ='';
		hs+='color : #000000;';
		hs+='cursor : pointer;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='transform : translate(-50%, 0px);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background : #dfe036;';
		hs+='border : 0px solid #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 2px 4px 2px 4px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._pin_title.ggUpdateText=function() {
			var params = [];
			params.push(player._(String(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._pin_title.ggUpdateText();
		el.appendChild(els);
		me._pin_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._pin_title.ggUpdatePosition=function (useTransition) {
		}
		me._map_pin.appendChild(me._pin_title);
		me.elementMouseOver['map_pin']=false;
		me._pin_active.logicBlock_visible();
		me._pin_normal.logicBlock_visible();
			me.ggEvent_changenode=function() {
				me._pin_active.logicBlock_visible();
				me._pin_normal.logicBlock_visible();
			};
	};
	function SkinHotspotClass_ht_node(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node=document.createElement('div');
		el.ggId="ht_node";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='z-index: -1;';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 30px;';
		hs+='position : absolute;';
		hs+='top : 548px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_popup') == false)) && 
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node.style.transition='';
				if (me._ht_node.ggCurrentLogicStateVisible == 0) {
					me._ht_node.style.visibility=(Number(me._ht_node.style.opacity)>0||!me._ht_node.style.opacity)?'inherit':'hidden';
					me._ht_node.ggVisible=true;
				}
				else {
					me._ht_node.style.visibility="hidden";
					me._ht_node.ggVisible=false;
				}
			}
		}
		me._ht_node.logicBlock_visible();
		me._ht_node.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),player._(me.hotspot.target));
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			if (
				(
					((me.hotspot.customimage == ""))
				)
			) {
				me._ht_node_lottie_hover.style.transition='none';
				me._ht_node_lottie_hover.style.visibility=(Number(me._ht_node_lottie_hover.style.opacity)>0||!me._ht_node_lottie_hover.style.opacity)?'inherit':'hidden';
				me._ht_node_lottie_hover.ggVisible=true;
			}
			if (
				(
					((me.hotspot.customimage == ""))
				)
			) {
				me._ht_node_lottie.style.transition='none';
				me._ht_node_lottie.style.visibility='hidden';
				me._ht_node_lottie.ggVisible=false;
			}
			me.elementMouseOver['ht_node']=true;
			me._ht_node_title.logicBlock_alpha();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseleave=function (e) {
			if (
				(
					((me.hotspot.customimage == ""))
				)
			) {
				me._ht_node_lottie_hover.style.transition='none';
				me._ht_node_lottie_hover.style.visibility='hidden';
				me._ht_node_lottie_hover.ggVisible=false;
			}
			if (
				(
					((me.hotspot.customimage == ""))
				)
			) {
				me._ht_node_lottie.style.transition='none';
				me._ht_node_lottie.style.visibility=(Number(me._ht_node_lottie.style.opacity)>0||!me._ht_node_lottie.style.opacity)?'inherit':'hidden';
				me._ht_node_lottie.ggVisible=true;
			}
			me.elementMouseOver['ht_node']=false;
			me._ht_node_title.logicBlock_alpha();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
			player.setActiveHotspot(null);
		}
		me._ht_node.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_node_title=document.createElement('div');
		els=me._ht_node_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_node_title";
		el.ggDx=0;
		el.ggDy=26;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text plex_sans_regular svg_shadow";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 26px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 16px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ht_node_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_node_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_node_title.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_node_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_title.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._ht_node_title.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._ht_node_title.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._ht_node_title.style.transition='left 0s, top 0s, opacity 300ms ease 0ms';
				if (me._ht_node_title.ggCurrentLogicStatePosition == 0) {
					me._ht_node_title.style.left = 'calc(50% - (0px / 2))';
					me._ht_node_title.style.top = 'calc(50% - (0px / 2) - (0px / 2) + -30px)';
				}
				else {
					me._ht_node_title.style.left='calc(50% - ((0px + 0px) / 2) + 0px)';
					me._ht_node_title.style.top='calc(50% - ((0px + 0px) / 2) + 26px)';
				}
			}
		}
		me._ht_node_title.logicBlock_position();
		me._ht_node_title.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node'] == true)) && 
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_node_title.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_node_title.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_node_title.style.transition='left 0s, top 0s, opacity 300ms ease 0ms';
				if (me._ht_node_title.ggCurrentLogicStateAlpha == 0) {
					me._ht_node_title.style.visibility=me._ht_node_title.ggVisible?'inherit':'hidden';
					me._ht_node_title.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_node_title.style.opacity == 0.0) { me._ht_node_title.style.visibility="hidden"; } }, 305);
					me._ht_node_title.style.opacity=0;
				}
			}
		}
		me._ht_node_title.logicBlock_alpha();
		me._ht_node_title.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me._ht_node_title);
		el=me._ht_node_lottie=document.createElement('div');
		el.ggLottie = lottie.loadAnimation({
			container: el,
			path: basePath + 'images/ht_node_lottie.json',
			autoplay: true,
			loop: true,
			rendererSettings: {
				preserveAspectRatio: 'xMinYMin meet'
			}
		});
		el.ggId="ht_node_lottie";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_lottie svg_shadow";
		el.ggType='lottie';
		hs ='';
		hs+='background : rgba(0,0,0,0);';
		hs+='height : 45px;';
		hs+='left : calc(50% - ((45px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((45px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_lottie.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_lottie.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_lottie.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_lottie.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_lottie.style.transition='';
				if (me._ht_node_lottie.ggCurrentLogicStateVisible == 0) {
					me._ht_node_lottie.style.visibility=(Number(me._ht_node_lottie.style.opacity)>0||!me._ht_node_lottie.style.opacity)?'inherit':'hidden';
					me._ht_node_lottie.ggVisible=true;
				}
				else {
					me._ht_node_lottie.style.visibility="hidden";
					me._ht_node_lottie.ggVisible=false;
				}
			}
		}
		me._ht_node_lottie.logicBlock_visible();
		me._ht_node_lottie.logicBlock_cssclasses = function() {
			var newLogicStateCssClasses;
			if (
				((player.getBrowser() == 3))
			)
			{
				newLogicStateCssClasses = 0;
			}
			else {
				newLogicStateCssClasses = -1;
			}
			if (me._ht_node_lottie.ggCurrentLogicStateCssClasses != newLogicStateCssClasses) {
				me._ht_node_lottie.ggCurrentLogicStateCssClasses = newLogicStateCssClasses;
				me._ht_node_lottie.style.transition='';
				if (me._ht_node_lottie.ggCurrentLogicStateCssClasses == 0) {
					me._ht_node_lottie.className = 'ggskin ggskin_lottie ';
				}
				else {
					me._ht_node_lottie.className = 'ggskin ggskin_lottie svg_shadow';
				}
			}
		}
		me._ht_node_lottie.logicBlock_cssclasses();
		me._ht_node_lottie.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me._ht_node_lottie);
		el=me._ht_node_lottie_hover=document.createElement('div');
		el.ggLottie = lottie.loadAnimation({
			container: el,
			path: basePath + 'images/ht_node_lottie_hover.json',
			autoplay: true,
			loop: true,
			rendererSettings: {
				preserveAspectRatio: 'xMinYMin meet'
			}
		});
		el.ggId="ht_node_lottie_hover";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_lottie svg_shadow";
		el.ggType='lottie';
		hs ='';
		hs+='background : rgba(0,0,0,0);';
		hs+='height : 45px;';
		hs+='left : calc(50% - ((45px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((45px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_lottie_hover.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_lottie_hover.logicBlock_cssclasses = function() {
			var newLogicStateCssClasses;
			if (
				((player.getBrowser() == 3))
			)
			{
				newLogicStateCssClasses = 0;
			}
			else {
				newLogicStateCssClasses = -1;
			}
			if (me._ht_node_lottie_hover.ggCurrentLogicStateCssClasses != newLogicStateCssClasses) {
				me._ht_node_lottie_hover.ggCurrentLogicStateCssClasses = newLogicStateCssClasses;
				me._ht_node_lottie_hover.style.transition='';
				if (me._ht_node_lottie_hover.ggCurrentLogicStateCssClasses == 0) {
					me._ht_node_lottie_hover.className = 'ggskin ggskin_lottie ';
				}
				else {
					me._ht_node_lottie_hover.className = 'ggskin ggskin_lottie svg_shadow';
				}
			}
		}
		me._ht_node_lottie_hover.logicBlock_cssclasses();
		me._ht_node_lottie_hover.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me._ht_node_lottie_hover);
		el=me._ht_node_custom_image=document.createElement('div');
		els=me._ht_node_custom_image__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_node_custom_image.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_node_custom_image.ggSubElement.setAttribute('alt', player._(me._ht_node_custom_image.ggAltText));
			me._ht_node_custom_image.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._ht_node_custom_image.ggText_untranslated = img;
			me._ht_node_custom_image.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._ht_node_custom_image.ggSubElement.style.width = '0px';
			me._ht_node_custom_image.ggSubElement.style.height = '0px';
			me._ht_node_custom_image.ggSubElement.src='';
			me._ht_node_custom_image.ggSubElement.src=me._ht_node_custom_image.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._ht_node_custom_image.ggText != player._(me._ht_node_custom_image.ggText_untranslated)) {
				me._ht_node_custom_image.ggText = player._(me._ht_node_custom_image.ggText_untranslated);
				me._ht_node_custom_image.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="ht_node_custom_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_custom_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_custom_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_custom_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_custom_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_custom_image.style.transition='';
				if (me._ht_node_custom_image.ggCurrentLogicStateVisible == 0) {
					me._ht_node_custom_image.style.visibility=(Number(me._ht_node_custom_image.style.opacity)>0||!me._ht_node_custom_image.style.opacity)?'inherit':'hidden';
					me._ht_node_custom_image.ggSubElement.src=me._ht_node_custom_image.ggText;
					me._ht_node_custom_image.ggVisible=true;
				}
				else {
					me._ht_node_custom_image.style.visibility="hidden";
					me._ht_node_custom_image.ggSubElement.src='';
					me._ht_node_custom_image.ggVisible=false;
				}
			}
		}
		me._ht_node_custom_image.logicBlock_visible();
		me._ht_node_custom_image.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_node_custom_image.clientWidth;
			var parentHeight = me._ht_node_custom_image.clientHeight;
			var img = me._ht_node_custom_image__img;
			var aspectRatioDiv = me._ht_node_custom_image.clientWidth / me._ht_node_custom_image.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._ht_node_custom_image.ggScrollbars || currentWidth < me._ht_node_custom_image.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_node_custom_image.scrollLeft=currentWidth / 2 - me._ht_node_custom_image.clientWidth / 2;
			}
			if (!me._ht_node_custom_image.ggScrollbars || currentHeight < me._ht_node_custom_image.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._ht_node_custom_image.scrollTop=currentHeight / 2 - me._ht_node_custom_image.clientHeight / 2;
			}
		}
		me._ht_node.appendChild(me._ht_node_custom_image);
		me._ht_node.logicBlock_visible();
		me.elementMouseOver['ht_node']=false;
		me._ht_node_title.logicBlock_position();
		me._ht_node_title.logicBlock_alpha();
		me._ht_node_lottie.logicBlock_visible();
		me._ht_node_lottie.logicBlock_cssclasses();
		me._ht_node_lottie_hover.logicBlock_cssclasses();
		if ((hotspot) && (hotspot.customimage)) {
			me._ht_node_custom_image.style.width=hotspot.customimagewidth + 'px';
			me._ht_node_custom_image.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._ht_node_custom_image.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._ht_node_custom_image.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._ht_node_custom_image.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._ht_node_title.logicBlock_alpha();
				me._ht_node_lottie.logicBlock_visible();
				me._ht_node_custom_image.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_node.logicBlock_visible();
				me._ht_node_title.logicBlock_alpha();
				me._ht_node_lottie.logicBlock_visible();
				me._ht_node_custom_image.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_node.logicBlock_visible();
				me._ht_node_title.logicBlock_position();
				me._ht_node_title.logicBlock_alpha();
				me._ht_node_lottie.logicBlock_visible();
				me._ht_node_lottie.logicBlock_cssclasses();
				me._ht_node_lottie_hover.logicBlock_cssclasses();
				me._ht_node_custom_image.logicBlock_visible();
			};
			me.ggEvent_hastouch=function() {
				me._ht_node_title.logicBlock_position();
			};
			me.ggEvent_varchanged_vis_popup=function() {
				me._ht_node.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._ht_node.logicBlock_visible();
			};
			me.__div = me._ht_node;
	};
	function SkinHotspotClass_ht_image(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_image=document.createElement('div');
		el.ggId="ht_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='z-index: -1;';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 618px;';
		hs+='position : absolute;';
		hs+='top : 297px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_image.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_popup') == false)) && 
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_image.style.transition='';
				if (me._ht_image.ggCurrentLogicStateVisible == 0) {
					me._ht_image.style.visibility=(Number(me._ht_image.style.opacity)>0||!me._ht_image.style.opacity)?'inherit':'hidden';
					me._ht_image.ggVisible=true;
				}
				else {
					me._ht_image.style.visibility="hidden";
					me._ht_image.ggVisible=false;
				}
			}
		}
		me._ht_image.logicBlock_visible();
		me._ht_image.onclick=function (e) {
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				me._ht_image_bg.ggVisible = !me._ht_image_bg.ggVisible;
				var flag=me._ht_image_bg.ggVisible;
				me._ht_image_bg.style.transition='none';
				me._ht_image_bg.style.visibility=((flag)&&(Number(me._ht_image_bg.style.opacity)>0||!me._ht_image_bg.style.opacity))?'inherit':'hidden';
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				me._ht_image_triangle.ggVisible = !me._ht_image_triangle.ggVisible;
				var flag=me._ht_image_triangle.ggVisible;
				me._ht_image_triangle.style.transition='none';
				me._ht_image_triangle.style.visibility=((flag)&&(Number(me._ht_image_triangle.style.opacity)>0||!me._ht_image_triangle.style.opacity))?'inherit':'hidden';
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				me._ht_image.style.zIndex=me._ht_image_bg.ggVisible?'0':'-1';
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				skin._image_popup_phone.ggSetImage(player._(player.getBasePath()+""+player._(me.hotspot.url)));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_image', true);
			}
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_image.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_image.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_image']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_image.onmouseleave=function (e) {
			me.elementMouseOver['ht_image']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
			player.setActiveHotspot(null);
		}
		me._ht_image.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_image_triangle=document.createElement('div');
		el.ggId="ht_image_triangle";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 22px;';
		hs+='left : 16px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 22px;';
		hs+='pointer-events:auto;';
		hs+='width: 0 !important; height: 0 !important; border-top: 22px solid rgba(255, 255, 255, 0.68); border-left: 22px solid transparent; border-bottom: 0; border-right: 0; transform: translateZ(1px);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_image_triangle.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_triangle.ggUpdatePosition=function (useTransition) {
		}
		me._ht_image.appendChild(me._ht_image_triangle);
		el=me._ht_image_bg=document.createElement('div');
		el.ggId="ht_image_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.686275);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 300px;';
		hs+='left : 38px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 300px;';
		hs+='pointer-events:auto;';
		hs+='transform: translateZ(1px)';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_image_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_image_img=document.createElement('div');
		els=me._ht_image_img__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_image_img.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_image_img.ggSubElement.setAttribute('alt', player._(me._ht_image_img.ggAltText));
			me._ht_image_img.ggUpdateImagePlaceholder();
		}
		el.ggSetImage = function(img) {
			me._ht_image_img.ggText_untranslated = img;
			me._ht_image_img.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._ht_image_img.ggSubElement.style.width = '0px';
			me._ht_image_img.ggSubElement.style.height = '0px';
			me._ht_image_img.ggSubElement.src='';
			me._ht_image_img.ggSubElement.src=me._ht_image_img.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._ht_image_img.ggText != player._(me._ht_image_img.ggText_untranslated)) {
				me._ht_image_img.ggText = player._(me._ht_image_img.ggText_untranslated);
				me._ht_image_img.ggUpdateImage()
			}
		}
		player.addListener('changenode', function() {
			me._ht_image_img.ggUpdateImagePlaceholder();
		});
		el.ggUpdateImagePlaceholder = function() {
			if (me._ht_image_img.ggText != ""+player.getBasePath()+""+player._(me.hotspot.url)+"") {
				me._ht_image_img.ggText=""+player.getBasePath()+""+player._(me.hotspot.url)+"";
				me._ht_image_img.ggUpdateImage()
			}
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="ht_image_img";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 240px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : 280px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_image_img.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_img.onclick=function (e) {
			skin._popup_image.ggSetImage(player._(player.getBasePath()+""+player._(me.hotspot.url)));
				skin._image_popup_title.ggUpdateText=function() {
					var params = [];
					params.push(String(player._(me.hotspot.title)));
					var hs = player._("%1", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			skin._image_popup_title.ggUpdateText();
			skin._image_popup_title.ggTextDiv.scrollTop = 0;
			player.setVariableValue('vis_image_popup', true);
		}
		me._ht_image_img.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_image_img.clientWidth;
			var parentHeight = me._ht_image_img.clientHeight;
			var img = me._ht_image_img__img;
			var aspectRatioDiv = me._ht_image_img.clientWidth / me._ht_image_img.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if (aspectRatioDiv > aspectRatioImg) {
				currentHeight = parentHeight;
				currentWidth = Math.round(parentHeight * aspectRatioImg);
				img.style.width='';
				img.style.height=parentHeight + 'px';
			} else {
				currentWidth = parentWidth;
				currentHeight = Math.round(parentWidth / aspectRatioImg);
				img.style.width=parentWidth + 'px';
				img.style.height='';
			};
			if (!me._ht_image_img.ggScrollbars || currentWidth < me._ht_image_img.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_image_img.scrollLeft=currentWidth / 2 - me._ht_image_img.clientWidth / 2;
			}
			if (!me._ht_image_img.ggScrollbars || currentHeight < me._ht_image_img.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._ht_image_img.scrollTop=currentHeight / 2 - me._ht_image_img.clientHeight / 2;
			}
		}
		me._ht_image_bg.appendChild(me._ht_image_img);
		el=me._ht_image_title=document.createElement('div');
		els=me._ht_image_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_image_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text plex_sans_medium";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 30px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 10px 0px 10px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._ht_image_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_image_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_image_title.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_image_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_title.ggUpdatePosition=function (useTransition) {
		}
		me._ht_image_bg.appendChild(me._ht_image_title);
		me._ht_image.appendChild(me._ht_image_bg);
		el=me._ht_image_icon=document.createElement('div');
		els=me._ht_image_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjE4cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjE4cHgiPgogPHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgwVjB6Ii8+CiA8cGF0aCBkPSJNMjEgMTlWNWMwLTEuMS0uOS0yLTItMkg1Yy0xLjEgMC0yIC45LTIgMnYxNGMwIDEuMS45IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yek04LjkgMTMuOThsMi4xIDIuNTMgMy4xLTMuOTljLjItLjI2LjYtLjI2LjguMDFsMy41MSA0LjY4Yy4yNS4zMy4wMS44LS40LjhINi4wMmMtLjQyIDAtLjY1LS40OC0uMzktLjgxTDguMTIgMT'+
			'RjLjE5LS4yNi41Ny0uMjcuNzgtLjAyeiIvPgo8L3N2Zz4K';
		me._ht_image_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_image_icon__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDE4IDE4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHk9IjBweCIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE4ID'+
			'E4OyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDojZGZlMDM2O30mI3hkOwo8L3N0eWxlPgogPHBhdGggZD0iTTAsMGgxOHYxOEgwVjB6IiBjbGFzcz0ic3QwIi8+CiA8cGF0aCBkPSJNMTUuOCwxNC4yVjMuOGMwLTAuOC0wLjctMS41LTEuNS0xLjVIMy44Yy0wLjgsMC0xLjUsMC43LTEuNSwxLjV2MTAuNWMwLDAuOCwwLjcsMS41LDEuNSwxLjVoMTAuNSYjeGQ7JiN4YTsmI3g5O0MxNS4xLDE1LjgsMTUuOCwxNS4xLDE1LjgsMTQuMnogTTYuNywxMC41bDEuNiwxLjlsMi4zLTNjMC4xLTAuMiwwLjQtMC4yLDAuNiwwbDIuNiwz'+
			'LjVjMC4yLDAuMiwwLDAuNi0wLjMsMC42aC05JiN4ZDsmI3hhOyYjeDk7Yy0wLjMsMC0wLjUtMC40LTAuMy0wLjZsMS45LTIuNEM2LjIsMTAuMyw2LjUsMTAuMyw2LjcsMTAuNXoiIGNsYXNzPSJzdDEiLz4KPC9zdmc+Cg==';
		me._ht_image_icon__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_image_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg svg_shadow";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_image_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_icon.onmouseenter=function (e) {
			me._ht_image_icon__img.style.visibility='hidden';
			me._ht_image_icon__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_image_icon']=true;
			me._ht_image_tooltip.logicBlock_alpha();
		}
		me._ht_image_icon.onmouseleave=function (e) {
			me._ht_image_icon__img.style.visibility='inherit';
			me._ht_image_icon__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_image_icon']=false;
			me._ht_image_tooltip.logicBlock_alpha();
		}
		me._ht_image_icon.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_image_tooltip=document.createElement('div');
		els=me._ht_image_tooltip__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_image_tooltip";
		el.ggDx=0;
		el.ggDy=26;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text plex_sans_regular svg_shadow";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 26px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 16px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ht_image_tooltip.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_image_tooltip.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_image_tooltip.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_image_tooltip.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_tooltip.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._ht_image_tooltip.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._ht_image_tooltip.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._ht_image_tooltip.style.transition='left 0s, top 0s, opacity 300ms ease 0ms';
				if (me._ht_image_tooltip.ggCurrentLogicStatePosition == 0) {
					me._ht_image_tooltip.style.left = 'calc(50% - (0px / 2))';
					me._ht_image_tooltip.style.top = 'calc(50% - (0px / 2) - (0px / 2) + -30px)';
				}
				else {
					me._ht_image_tooltip.style.left='calc(50% - ((0px + 0px) / 2) + 0px)';
					me._ht_image_tooltip.style.top='calc(50% - ((0px + 0px) / 2) + 26px)';
				}
			}
		}
		me._ht_image_tooltip.logicBlock_position();
		me._ht_image_tooltip.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_image_icon'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_image_tooltip.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_image_tooltip.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_image_tooltip.style.transition='left 0s, top 0s, opacity 300ms ease 0ms';
				if (me._ht_image_tooltip.ggCurrentLogicStateAlpha == 0) {
					me._ht_image_tooltip.style.visibility=me._ht_image_tooltip.ggVisible?'inherit':'hidden';
					me._ht_image_tooltip.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_image_tooltip.style.opacity == 0.0) { me._ht_image_tooltip.style.visibility="hidden"; } }, 305);
					me._ht_image_tooltip.style.opacity=0;
				}
			}
		}
		me._ht_image_tooltip.logicBlock_alpha();
		me._ht_image_tooltip.ggUpdatePosition=function (useTransition) {
		}
		me._ht_image_icon.appendChild(me._ht_image_tooltip);
		me._ht_image.appendChild(me._ht_image_icon);
		me._ht_image.logicBlock_visible();
		me.elementMouseOver['ht_image']=false;
		me.elementMouseOver['ht_image_icon']=false;
		me._ht_image_tooltip.logicBlock_position();
		me._ht_image_tooltip.logicBlock_alpha();
			me.ggEvent_changenode=function() {
				me._ht_image.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_image.logicBlock_visible();
				me._ht_image_tooltip.logicBlock_position();
			};
			me.ggEvent_hastouch=function() {
				me._ht_image_tooltip.logicBlock_position();
			};
			me.ggEvent_varchanged_vis_popup=function() {
				me._ht_image.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._ht_image.logicBlock_visible();
			};
			me.__div = me._ht_image;
	};
	function SkinHotspotClass_ht_info(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_info=document.createElement('div');
		el.ggId="ht_info";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='z-index: -1;';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 218px;';
		hs+='position : absolute;';
		hs+='top : 297px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_info.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_info.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_popup') == false)) && 
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_info.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_info.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_info.style.transition='';
				if (me._ht_info.ggCurrentLogicStateVisible == 0) {
					me._ht_info.style.visibility=(Number(me._ht_info.style.opacity)>0||!me._ht_info.style.opacity)?'inherit':'hidden';
					me._ht_info.ggVisible=true;
				}
				else {
					me._ht_info.style.visibility="hidden";
					me._ht_info.ggVisible=false;
				}
			}
		}
		me._ht_info.logicBlock_visible();
		me._ht_info.onclick=function (e) {
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				me._ht_info_text.ggVisible = !me._ht_info_text.ggVisible;
				var flag=me._ht_info_text.ggVisible;
				me._ht_info_text.style.transition='none';
				me._ht_info_text.style.visibility=((flag)&&(Number(me._ht_info_text.style.opacity)>0||!me._ht_info_text.style.opacity))?'inherit':'hidden';
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				me._ht_info_triangle.ggVisible = !me._ht_info_triangle.ggVisible;
				var flag=me._ht_info_triangle.ggVisible;
				me._ht_info_triangle.style.transition='none';
				me._ht_info_triangle.style.visibility=((flag)&&(Number(me._ht_info_triangle.style.opacity)>0||!me._ht_info_triangle.style.opacity))?'inherit':'hidden';
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_info', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				me._ht_info.style.zIndex=me._ht_info_text.ggVisible?'0':'-1';
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
					skin._info_popup_title_phone.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.title)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				skin._info_popup_title_phone.ggUpdateText();
				skin._info_popup_title_phone.ggTextDiv.scrollTop = 0;
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
					skin._info_popup_text_phone.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.description)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				skin._info_popup_text_phone.ggUpdateText();
				skin._info_popup_text_phone.ggTextDiv.scrollTop = 0;
			}
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_info.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_info.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_info']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_info.onmouseleave=function (e) {
			me.elementMouseOver['ht_info']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
			player.setActiveHotspot(null);
		}
		me._ht_info.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_info_triangle=document.createElement('div');
		el.ggId="ht_info_triangle";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 22px;';
		hs+='left : 16px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 22px;';
		hs+='pointer-events:auto;';
		hs+='width: 0 !important; height: 0 !important; border-top: 22px solid rgba(255, 255, 255, 0.74); border-left: 22px solid transparent; border-bottom: 0; border-right: 0; transform: translateZ(1px)';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_info_triangle.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_triangle.ggUpdatePosition=function (useTransition) {
		}
		me._ht_info.appendChild(me._ht_info_triangle);
		el=me._ht_info_text=document.createElement('div');
		els=me._ht_info_text__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_info_text";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : 38px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 300px;';
		hs+='pointer-events:auto;';
		hs+='transform: translateZ(1px)';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='background : rgba(255,255,255,0.745098);';
		hs+='border : 0px solid #000000;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 20px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		hs+="max-height: 300px";
		els.setAttribute('style',hs);
		me._ht_info_text.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			params.push(String(player._(me.hotspot.description)));
			var hs = player._("<b class=\'plex_sans_medium\' style=\'font-size: 16px\'>%1<\/b><p class=\'info_text\'>%2<\/p>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_info_text.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_info_text.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_info_text.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_text.ggUpdatePosition=function (useTransition) {
		}
		me._ht_info.appendChild(me._ht_info_text);
		el=me._ht_info_icon=document.createElement('div');
		els=me._ht_info_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjE4cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjE4cHgiPgogPHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgwVjB6Ii8+CiA8cGF0aCBkPSJNMjAgMkg0Yy0xLjEgMC0xLjk5LjktMS45OSAyTDIgMjJsNC00aDE0YzEuMSAwIDItLjkgMi0yVjRjMC0xLjEtLjktMi0yLTJ6TTcgOWgxMGMuNTUgMCAxIC40NSAxIDFzLS40NSAxLTEgMUg3Yy0uNTUgMC0xLS40NS0xLTFzLjQ1LTEgMS0xem02IDVIN2MtLjU1IDAtMS0uNDUtMS0xcy40NS0xIDEtMWg2Yy41NSAwIDEgLjQ1ID'+
			'EgMXMtLjQ1IDEtMSAxem00LTZIN2MtLjU1IDAtMS0uNDUtMS0xcy40NS0xIDEtMWgxMGMuNTUgMCAxIC40NSAxIDFzLS40NSAxLTEgMXoiLz4KPC9zdmc+Cg==';
		me._ht_info_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_info_icon__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDE4IDE4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHk9IjBweCIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE4ID'+
			'E4OyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDojZGZlMDM2O30mI3hkOwo8L3N0eWxlPgogPHBhdGggZD0iTTAsMGgxOHYxOEgwVjB6IiBjbGFzcz0ic3QwIi8+CiA8cGF0aCBkPSJNMTUsMS41SDNDMi4yLDEuNSwxLjUsMi4yLDEuNSwzbDAsMTMuNWwzLTNIMTVjMC44LDAsMS41LTAuNywxLjUtMS41VjNDMTYuNSwyLjIsMTUuOCwxLjUsMTUsMS41eiBNNS4yLDYuOCYjeGQ7JiN4YTsmI3g5O2g3LjVjMC40LDAsMC44LDAuMywwLjgsMC44cy0wLjMsMC44LTAuOCwwLjhINS4yYy0wLjQsMC0wLjgtMC4zLTAuOC0wLjhTNC44'+
			'LDYuOCw1LjIsNi44eiBNOS44LDEwLjVINS4yYy0wLjQsMC0wLjgtMC4zLTAuOC0wLjgmI3hkOyYjeGE7JiN4OTtTNC44LDksNS4yLDloNC41YzAuNCwwLDAuOCwwLjMsMC44LDAuOFMxMC4yLDEwLjUsOS44LDEwLjV6IE0xMi44LDZINS4yQzQuOCw2LDQuNSw1LjcsNC41LDUuMnMwLjMtMC44LDAuOC0wLjhoNy41JiN4ZDsmI3hhOyYjeDk7YzAuNCwwLDAuOCwwLjMsMC44LDAuOFMxMy4yLDYsMTIuOCw2eiIgY2xhc3M9InN0MSIvPgo8L3N2Zz4K';
		me._ht_info_icon__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_info_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg svg_shadow";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_info_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_icon.onmouseenter=function (e) {
			me._ht_info_icon__img.style.visibility='hidden';
			me._ht_info_icon__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_info_icon']=true;
			me._ht_image_tooltip0.logicBlock_alpha();
		}
		me._ht_info_icon.onmouseleave=function (e) {
			me._ht_info_icon__img.style.visibility='inherit';
			me._ht_info_icon__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_info_icon']=false;
			me._ht_image_tooltip0.logicBlock_alpha();
		}
		me._ht_info_icon.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_image_tooltip0=document.createElement('div');
		els=me._ht_image_tooltip0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_image_tooltip";
		el.ggDx=0;
		el.ggDy=26;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text plex_sans_regular svg_shadow";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 26px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 16px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ht_image_tooltip0.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_image_tooltip0.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_image_tooltip0.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_image_tooltip0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_tooltip0.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._ht_image_tooltip0.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._ht_image_tooltip0.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._ht_image_tooltip0.style.transition='left 0s, top 0s, opacity 300ms ease 0ms';
				if (me._ht_image_tooltip0.ggCurrentLogicStatePosition == 0) {
					me._ht_image_tooltip0.style.left = 'calc(50% - (0px / 2))';
					me._ht_image_tooltip0.style.top = 'calc(50% - (0px / 2) - (0px / 2) + -30px)';
				}
				else {
					me._ht_image_tooltip0.style.left='calc(50% - ((0px + 0px) / 2) + 0px)';
					me._ht_image_tooltip0.style.top='calc(50% - ((0px + 0px) / 2) + 26px)';
				}
			}
		}
		me._ht_image_tooltip0.logicBlock_position();
		me._ht_image_tooltip0.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_info_icon'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_image_tooltip0.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_image_tooltip0.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_image_tooltip0.style.transition='left 0s, top 0s, opacity 300ms ease 0ms';
				if (me._ht_image_tooltip0.ggCurrentLogicStateAlpha == 0) {
					me._ht_image_tooltip0.style.visibility=me._ht_image_tooltip0.ggVisible?'inherit':'hidden';
					me._ht_image_tooltip0.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_image_tooltip0.style.opacity == 0.0) { me._ht_image_tooltip0.style.visibility="hidden"; } }, 305);
					me._ht_image_tooltip0.style.opacity=0;
				}
			}
		}
		me._ht_image_tooltip0.logicBlock_alpha();
		me._ht_image_tooltip0.ggUpdatePosition=function (useTransition) {
		}
		me._ht_info_icon.appendChild(me._ht_image_tooltip0);
		me._ht_info.appendChild(me._ht_info_icon);
		me._ht_info.logicBlock_visible();
		me.elementMouseOver['ht_info']=false;
		me.elementMouseOver['ht_info_icon']=false;
		me._ht_image_tooltip0.logicBlock_position();
		me._ht_image_tooltip0.logicBlock_alpha();
			me.ggEvent_changenode=function() {
				me._ht_info.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_info.logicBlock_visible();
				me._ht_image_tooltip0.logicBlock_position();
			};
			me.ggEvent_hastouch=function() {
				me._ht_image_tooltip0.logicBlock_position();
			};
			me.ggEvent_varchanged_vis_popup=function() {
				me._ht_info.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._ht_info.logicBlock_visible();
			};
			me.__div = me._ht_info;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
			if (hotspot.skinid=='ht_info') {
				hotspot.skinid = 'ht_info';
				hsinst = new SkinHotspotClass_ht_info(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_image') {
				hotspot.skinid = 'ht_image';
				hsinst = new SkinHotspotClass_ht_image(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		{
				hotspot.skinid = 'ht_node';
				hsinst = new SkinHotspotClass_ht_node(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		hotspotTemplates = {};
	}
	player.addListener('hotspotsremoved',function() {
			me.removeSkinHotspots();
	});
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		if (player.isInVR()) return;
		me.ggCurrentTime=new Date().getTime();
		for (const id in hotspotTemplates) {
			const tmpl=hotspotTemplates[id];
			tmpl.forEach(function(hotspot) {
				if (hotspot.hotspotTimerEvent) {
					hotspot.hotspotTimerEvent();
				}
			});
		};
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	hs='.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px; line-height: normal; -webkit-text-size-adjust: 100%; } .ggdefaulthotspot { font-family: "IBM Plex Sans", sans-serif; font-weight: 400; font-size: 16px; -webkit-filter: drop-shadow( 0px 0px 3px rgba(0, 0, 0, 0.75)); filter: drop-shadow( 0px 0px 3px rgba(0, 0, 0, 0.75)); } .ggmarkdown p { margin-top: 0px; } .ggmarkdown a { color: #555; } .ggmarkdown h1:first-child, .ggmarkdown h2:first-child, .ggmarkdown h3:first-child, .ggmarkdown h4:first-child { margin-top: 0px; } .ggmarkdown h1,.ggmarkdown h2,.ggmarkdown h3,.ggmarkdown h4 { margin-top: 1em; margin-bottom: 0.2em; } .ggmarkdown { white-space: normal; } .svg_shadow { -webkit-filter: drop-shadow( 0px 0px 3px rgba(0, 0, 0, 0.75)); filter: drop-shadow( 0px 0px 3px rgba(0, 0, 0, 0.75)); will-change: transform; } .shadow_title { -webkit-filter: drop-shadow( 0px 0px 5px rgba(0, 0, 0, 0.6)); filter: drop-shadow( 0px 0px 5px rgba(0, 0, 0, 0.6)); will-change: transform; } .plex_sans_medium { font-family: "IBM Plex Sans", sans-serif; font-weight: 500; } .plex_sans_regular { font-family: "IBM Plex Sans", sans-serif; font-weight: 400; } .info_headline { font-family: "IBM Plex Sans", sans-serif; font-weight: 500; font-size: 18px } .info_text { font-family: "IBM Plex Sans", sans-serif; font-weight: 400; font-size: 14px } .krona { font-family: "Krona One", sans-serif; } @keyframes pulse { 0% { transform: scale(1.0); } 8% { transform: scale(1.4); } 16% { transform: scale(1.0); } 24% { transform: scale(1.2); } 32% { transform: scale(1.0); } 100% { transform: scale(1.0); } } .ggskin_text>div::-webkit-scrollbar { width: 4px; } .ggskin_text>div { scrollbar-width: thin; }@font-face { font-family: "IBM Plex Sans"; font-style: normal; font-weight: 400; src: local(""), url("$(skinbase)fonts/ibm-plex-sans-latin-regular.woff2") format("woff2"); } @font-face { font-family: "IBM Plex Sans"; font-style: normal; font-weight: 500; src: local(""), url("$(skinbase)fonts/ibm-plex-sans-latin-500.woff2") format("woff2"); } @font-face { font-family: "Krona One"; font-style: normal; font-weight: 400; src: local(""), url("$(skinbase)fonts/krona-one-latin-regular.woff2") format("woff2"); }';
	hs = hs.replace(/\$\(skinbase\)/g,basePath);
	style.appendChild(document.createTextNode(hs));
	document.head.appendChild(style);
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onclick) activeElement.onclick();
		}
	});
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmousedown) activeElement.onmousedown();
		}
	});
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmouseup) activeElement.onmouseup();
		}
	});
	me.skinTimerEvent();
	document.fonts.onloadingdone = () => {
		me.updateSize(me.divSkin);
	}
};