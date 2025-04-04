import { useState, useEffect } from "react"
import { Modal, IconButton, Box, Backdrop, Typography, CircularProgress } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import FullscreenIcon from "@mui/icons-material/Fullscreen"
import DocumentIcon from "@mui/icons-material/Description"
import PropTypes from "prop-types"

const Certificate = ({ certificate }) => {
	const [open, setOpen] = useState(false)
	const [isLoading, setIsLoading] = useState(true)
	const [hasError, setHasError] = useState(false)

	useEffect(() => {
		// Reset states when certificate changes
		setIsLoading(true)
		setHasError(false)
		
		// Preload image
		const img = new Image();
		img.src = certificate.image;
		
		img.onload = () => {
			setIsLoading(false);
		};
		
		img.onerror = () => {
			setHasError(true);
			setIsLoading(false);
		};
		
		return () => {
			// Clean up
			img.onload = null;
			img.onerror = null;
		};
	}, [certificate])

	const handleOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
	}

	return (
		<Box component="div" sx={{ width: "100%" }}>
			{/* Thumbnail Container */}
			<Box
				className=""
				sx={{
					position: "relative",
					overflow: "hidden",
					borderRadius: 3,
					boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
					transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
					bgcolor: "rgba(28, 28, 30, 0.7)",
					backdropFilter: "blur(8px)",
					border: "1px solid rgba(66, 66, 69, 0.2)",
					height: "100%",
					minHeight: "200px",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					"&:hover": {
						transform: "translateY(-4px)",
						boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
						border: "1px solid rgba(66, 66, 69, 0.4)",
						"& .overlay": {
							opacity: 1,
						},
						"& .hover-content": {
							transform: "translate(-50%, -50%)",
							opacity: 1,
						},
						"& .certificate-image": {
							filter: "contrast(1.05) brightness(1) saturate(1.05)",
						},
					},
				}}>
				{isLoading && (
					<Box sx={{ 
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
						position: 'absolute',
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						zIndex: 10,
						bgcolor: 'rgba(28, 28, 30, 0.5)'
					}}>
						<CircularProgress 
							size={40} 
							thickness={4}
							sx={{
								color: '#0A84FF',
								mb: 1
							}}
						/>
						<Typography variant="caption" color="#E5E5EA">
							Loading certificate...
						</Typography>
					</Box>
				)}

				{/* Fallback for Error */}
				{hasError && (
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							justifyContent: 'center',
							height: '100%',
							p: 4,
							color: '#E5E5EA'
						}}
						onClick={handleOpen}
					>
						<DocumentIcon sx={{ fontSize: 64, mb: 2, color: '#0A84FF' }} />
						<Typography variant="body2" textAlign="center">
							Certificate image could not be loaded
						</Typography>
						<Typography variant="caption" color="text.secondary" sx={{ mt: 1 }}>
							Click to view details
						</Typography>
					</Box>
				)}

				{/* Certificate Image with Initial Filter */}
				{!hasError && (
					<Box
						sx={{
							position: "relative",
							width: "100%",
							height: "100%",
							"&::before": {
								content: '""',
								position: "absolute",
								top: 0,
								left: 0,
								right: 0,
								bottom: 0,
								backgroundColor: "rgba(0, 0, 0, 0.05)",
								zIndex: 1,
							},
						}}>
						<img
							className="certificate-image"
							src={certificate.image}
							alt={certificate.title}
							style={{
								width: "100%",
								height: "100%",
								display: isLoading ? "none" : "block",
								objectFit: "cover",
								filter: "contrast(1.05) brightness(0.95) saturate(1.05)",
								transition: "filter 0.3s ease",
							}}
							onClick={handleOpen}
						/>
					</Box>
				)}

				{/* Hover Overlay */}
				<Box
					className="overlay"
					sx={{
						position: "absolute",
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						opacity: 0,
						background: "linear-gradient(to top, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0) 100%)",
						transition: "all 0.3s ease",
						cursor: "pointer",
						zIndex: 2,
					}}
					onClick={handleOpen}>
					{/* Hover Content */}
					<Box
						className="hover-content"
						sx={{
							position: "absolute",
							top: "50%",
							left: "50%",
							transform: "translate(-50%, -60%)",
							opacity: 0,
							transition: "all 0.4s ease",
							textAlign: "center",
							width: "100%",
							color: "white",
						}}>
						<FullscreenIcon
							sx={{
								fontSize: 32,
								color: '#fff'
							}}
						/>
					</Box>
				</Box>
			</Box>

			{/* Modal */}
			<Modal
				open={open}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}>
				<Box
					sx={{
						position: "absolute",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)",
						maxWidth: "90vw",
						maxHeight: "90vh",
						bgcolor: "background.paper",
						boxShadow: 24,
						p: 0,
						borderRadius: 2,
						outline: "none",
					}}>
					<IconButton
						onClick={handleClose}
						sx={{
							position: "absolute",
							right: 8,
							top: 8,
							color: "white",
							bgcolor: "rgba(0,0,0,0.4)",
							"&:hover": {
								bgcolor: "rgba(0,0,0,0.6)",
							},
						}}>
						<CloseIcon />
					</IconButton>
					<img
						src={certificate.image}
						alt={certificate.title}
						style={{
							width: "100%",
							height: "100%",
							objectFit: "contain",
							borderRadius: "8px",
						}}
					/>
				</Box>
			</Modal>
		</Box>
	)
}

Certificate.propTypes = {
	certificate: PropTypes.shape({
		id: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		image: PropTypes.string.isRequired,
		date: PropTypes.string.isRequired,
		issuer: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired
	}).isRequired
}

export default Certificate
